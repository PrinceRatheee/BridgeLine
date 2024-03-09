import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Widthdraw = () => {
    const navigate=useNavigate();
    const [amount, setAmount] = useState("");
    const [user, setUser] = useState("");
    const email=localStorage.getItem("emailData");
    const  onWidthdraw=async()=>{
        console.log("5467fgchjko9p0[-]");
        const object={email,amount};
        const response =await axios.post("http://localhost:8000/api/widthdraw",object);
        navigate("/");
    }
    return (
        <div className='flex flex-col my-[5rem]'>
            <h1 className='text-center text-[2rem] font-bold'>Deposit Money</h1>
            <div className='h-[0.2rem] w-[10rem] bg-[#2874fc] mx-auto' />

            <div className='flex justify-center gap-[2rem] mt-[2rem]'>
                <h1 className='text-[1.5rem] font-bold'>Enter Amount :</h1>
                <input type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} className='w-[10rem] border-2 border-black border-solid p-[0.5rem]' />
            </div>
            <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[15rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold mx-auto mt-[3rem]' onClick={()=> onWidthdraw()}>Widthdraw
                <img src="./right.png" alt="Arrow" className='w-[2rem]' />
            </div>
        </div>
    );
}

export default Widthdraw