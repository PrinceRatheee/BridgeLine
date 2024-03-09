const express = require('express');
const { connect } = require('./db/connection');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const app = express();
const cors = require('cors');
const stripe = require('stripe')("sk_test_51OMTBgSBwW6fmG0JXexEGREGn1CViNKMuHzw53jJzGNQ7Mq9YJ92MRibCx2uXyKZgMBml2Dnl0463BAgI2Cd63lx009VOMLIpk");

connect();

const Users = require('./models/userModel');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

// Routes
app.get('/', (req, res) => {
    res.send("This is Backend");
});

// Widthdraw money
app.post('/api/widthdraw', async (req, res) => {
    try {
        console.log("fgh657890--98765789");
        const data = await req.body;
        const {  email,amount } = data;
        console.log("widthdrawing money", amount, email);
        const user = await Users.findOne({ email });
        user.amount = Number(user.amount) -  Number(amount);
        console.log("user65dwe", user);
        await user.save();

        return res.json({
            status: 200,
        });
    } catch (error) {
        console.error(error);

        return res.json({
            status: 400,
        });
    }
})
//Deposit Money
app.post('/api/deposit', async (req, res) => {
    try {
        const reqBody = await req.body;

        const { amount, currency } = reqBody;
        console.log(amount, "boooooody", currency);
        const product = ["hvj"];
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: product.map(item => {
                return {
                    price_data: {
                        currency: currency,
                        product_data: {
                            name: "Deposit money"
                        },
                        unit_amount: amount * 100
                    },
                    quantity: 1


                }
            }),
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/failure",
        });
        // console.log("urlllllllllllllll---",session?.url,"    qty-",qty)
        return res.json({
            url: session?.url,
            amount: amount
        });
    } catch (error) {
        console.error(error);

        return res.json({
            status: 400,
        });
    }
})
//Add Money
app.post('/api/addmoney', async (req, res) => {
    try {
        const data = await req.body;
        const { amount, email } = data;
        console.log("adding money", amount, email);
        const user = await Users.findOne({ email });
        user.amount = Number(user.amount) + Number(amount);
        console.log("user65dwe", user);
        await user.save();

        return res.json({
            status: 200,
        });
    } catch (error) {
        console.error(error);

        return res.json({
            status: 400,
        });
    }
})

//Fetch User
app.post('/api/userData', async (req, res) => {
    try {
        console.log("Received Backend Request for user data");
        const { email } = req.body;
        console.log("email", req.body);
        const isAlreadyExist = await Users.findOne({ email });
        if (isAlreadyExist) {
            console.log("User data", isAlreadyExist);
        }
        const object = {
            name: isAlreadyExist.fullName,
            amount: isAlreadyExist.amount,
            country: isAlreadyExist.country
        };
        console.log(object);
        return res.status(200).json({ message: 'User Data Fetched', object, status: 200 });


    } catch (error) {
        console.log(error, "signup backend error");
        return res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
})
//login and signup routes

app.post('/api/register', async (req, res) => {
    try {
        console.log("Received registration request");
        const user = req.body;
        const { fullname, phone, email, password, country } = user;
        console.log("user received", req.body);
        // console.log("pic received",pic,fullName,email,password);
        // console.log(req.body);
        if (!fullname || !email || !password || !phone) {
            return res.status(400).json({ message: 'Please fill all required details', status: 400 });
        } else {
            const isAlreadyExist = await Users.findOne({ email });
            const isUserAlreadyExist = await Users.findOne({ phone });

            if (isAlreadyExist || isUserAlreadyExist) {
                return res.status(400).json({ message: 'User Alredy Exist', status: 400 });
            } else {
                const salt = await bcryptjs.genSalt(10);
                const hashedpassword = await bcryptjs.hash(password, salt);

                const newUser = new Users({
                    fullName: fullname,
                    email,
                    password: hashedpassword,
                    phone,
                    coins: 0,
                    amount: 0,
                    country
                });

                await newUser.save();
                console.log("mbvdhmsbdfndm");
                return res.status(200).json({ message: 'User Registered Successfully', status: 200 });

            }
        }
    } catch (error) {
        console.log(error, "signup backend error");
        return res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Please fill all the required details', status: 400 });
        } else {
            const user = await Users.findOne({ email });
            if (!user) {
                res.status(400).json({ message: 'User Email or Password is Incorrect', status: 400 });
            }
            else {


                const validateUser = await bcryptjs.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).json({ message: 'User Email or Password is Incorrect', status: 400 });
                }
                else {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "bridgeline";
                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                        await Users.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName, }, token: token, message: "user signedin successfully", status: 200 });

                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
})


const server = app.listen(port, () => {
    console.log('Listening on port ' + port);
});