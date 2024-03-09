import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const amount=localStorage.getItem('addMoney');
    const email=localStorage.getItem('emailData');
    const addMoney=async()=>{
        const object={amount,email};
        const response=await axios.post("http://localhost:8000/api/addmoney",object);
        
    }
    useEffect(() => {
        addMoney();
     
    }, [])
    
    return (
        <div className="flex flex-col gap-[1rem] min-h-[90vh] items-center justify-center ">
                <h3 className="font-bold text-[4rem] mb-[-1rem] text-[#A2FF86]">Congrats</h3>
                <p className="text-gray-500 text-[1.3rem] font-semibold">Your Money has been added</p>
                <button 
                    className="bg-red-500 hover:bg-red-600  py-[0.6rem] w-[10rem]   text-white rounded-xl cursor-pointer flex justify-center "
                    onClick={()=>{navigate("/")}}
                >
                    Go Back To Home 
                </button>
            </div>
      )
}

export default Success