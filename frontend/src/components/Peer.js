import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Peer = () => {

    const navigate = useNavigate();
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
                    console.log("response",response);
                    setUser(response.data.object); // Assuming response.data contains user data
                }
            } catch (error) {
                console.log("Error in fetching user data on frontend:", error);
            }
        };

        fetchData();
    }, [navigate]);


    return (
        <div className='flex flex-col'>
            <div className='flex flex-col w-[70%] mx-auto my-[4rem]'>
                <div className='flex justify-between'>
                    <div>
                        <div>

                            <h1 className='teko text-[4rem]'><span className='text-[#2874fc]'>BridgeLine </span> Presents
                                <br /><span className='text-[#2874fc]'> Person to Person (P2P) </span> <br /> Zero Fee International <br />Money Transfer </h1>
                        </div>
                    </div>
                    <img src="./networking.png" alt="userimage" className='w-[20rem] h-[20rem]' />
                </div>

                <div className='bg-gray-200 flex flex-col'>

                </div>
            </div>

            <div className='bg-gray-100 flex flex-col gap-[0.5rem] py-[4rem]'>
                <div className='flex flex-col gap-[0.2rem] px-[4rem]  items-center mb-[3rem]'>

                    <h3 className='text-bold text-[4rem] underline-offset-4 '>Your Dashboard</h3>
                    <div className='h-[0.4rem] w-[10rem] bg-[#2874fc]' />
                </div>
                <h1 className='text-center text-[1.8rem]'>Hello, <span className='yantramanav-regular font-bold text-[2.5rem] text-[#2874fc]'>{user.name}</span></h1>
                <h1 className='text-center mb-[2rem]'><span className='teko text-[2rem] mr-[0.8rem] '>Your Amount :</span> <span className='text-[3rem]'>{user.country==="india"?"₹ ":"$ "}{user.amount}</span></h1>
                <div className='flex justify-around'>
                    <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold' onClick={()=>navigate("/transfermoney")}>Deposit
                        <img src="./depositwhite.png" alt="depositimage" className='w-[1.5rem] ' />
                    </div>
                    <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold' onClick={()=>navigate("/widthdrawmoney")}>Withdraw
                        <img src="./upload.png" alt="depositimage" className='w-[1.5rem] ' />

                    </div>
                    <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold'>Send/Transfer
                        <img src="./send.png" alt="depositimage" className='w-[1.5rem] ' />

                    </div>

                </div>

                
                <div className='w-[80%] h-[0.4rem] bg-[#2874fc] mt-[2rem] mx-auto'></div>
                {/* Transaction History  */}
                <div className='flex flex-col' >
                    <div className='flex flex-col gap-[0.2rem] px-[4rem]   my-[3rem]'>

                        <h3 className='text-bold text-[2rem] underline-offset-4 '>Your previous Transactions:</h3>
                        <div className='h-[0.4rem] w-[18rem] bg-[#2874fc]' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-center text-gray-600'>It seems that you have not done any transaction yet!</h3>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-[0.2rem] px-[4rem]   my-[5rem]'>

                        <h3 className='text-bold text-[2rem] underline-offset-4 '>Your Expense Track and Analytics</h3>
                        <div className='h-[0.4rem] w-[18rem] bg-[#2874fc]' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-center text-gray-600'>You need to do some transactions to get your track record!</h3>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-[0.2rem] px-[4rem]   my-[5rem]'>

                        <h3 className='text-bold text-[2rem] underline-offset-4 '>Credit Score Based Rewards</h3>
                        <div className='h-[0.4rem] w-[18rem] bg-[#2874fc]' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-center gap-[1rem]'>
                            <div className='flex gap-[0.5rem] items-center'>

                                <h3 className='text-center teko text-[4rem] text-gray-500'>Your Coins : </h3>
                            </div>
                            <div className='flex items-center gap-[0.5rem]'>
                                <h1 className='text-[4rem] teko'>0</h1>
                                <img src="./coin.png" alt="" className='w-[3rem] h-[4rem]' />

                            </div>
                        </div>
                        <div className='flex justify-center gap-[0.5rem] items-center hover:gap-[0.8rem]'>
                            <h1 className='text-[#2874fc]  cursor-pointer'>Reedem Now </h1>
                            <img src="./rightblue.png" alt="proceedimage" className=' w-[1rem] cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Peer