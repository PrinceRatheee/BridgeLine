import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(""); // Corrected useState syntax
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const emailData = localStorage.getItem('emailData');
                if (!emailData) {
                    navigate("/");
                } else {
                    setEmail(emailData);
                    const response = await axios.post("http://localhost:8000/api/userData", { email: emailData });
                    console.log("response", response);
                    setUser(response.data.object); // Assuming response.data contains user data
                }
            } catch (error) {
                console.log("Error in fetching user data on frontend:", error);
            }
        };

        fetchData();
    }, [navigate]);

    const payment = async () => {
        try {
            const currency = user.country === "india" ? "inr" : "usd";
            console.log("currency", currency);
            const object = { amount, currency };
            const response = await axios.post("http://localhost:8000/api/deposit", object);
            console.log("response from stripe", response.data);
            if (response.status === 200) {
                localStorage.setItem('addMoney',amount);
                const url = response.data.url;
                if (url.startsWith("http")) {
                    window.location.href = url; // Navigate to the URL directly
                } else {
                    navigate(url); // Navigate using react-router-dom
                }

            }
            else {
                navigate("/failure")
            }
        } catch (error) {
            console.log(error, "error in stripe payment frontend");
        }
    }
    return (
        <div className='flex flex-col my-[5rem]'>
            <h1 className='text-center text-[2rem] font-bold'>Deposit Money</h1>
            <div className='h-[0.2rem] w-[10rem] bg-[#2874fc] mx-auto' />

            <div className='flex justify-center gap-[2rem] mt-[2rem]'>
                <h1 className='text-[1.5rem] font-bold'>Enter Amount :</h1>
                <input type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} className='w-[10rem] border-2 border-black border-solid p-[0.5rem]' />
            </div>
            <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[15rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold mx-auto mt-[3rem]' onClick={() => payment()}>Deposit via Stripe
                <img src="./right.png" alt="Arrow" className='w-[2rem]' />
            </div>
        </div>
    );
};

export default Deposit;
