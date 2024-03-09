import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedInUser=localStorage.getItem('emailData');
 
      
    }, [])
    
    return (
        <div className='flex flex-col w-[80%] mx-auto pt-[2rem] '>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[0.5rem] items-center justify-center'>
                    <img src="/currency.png" alt="Logo" className='w-[3rem] h-[3rem] cursor-pointer' onClick={()=>navigate("/")}/>
                    <h1 className=' text-[2.5rem] teko cursor-pointer' onClick={()=>navigate("/")}>BridgeLine</h1>
                </div>
                <div className='flex gap-[4rem]'>
                    <p className='yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]' onClick={() => navigate("/p2p")} >P2P</p>

                    <p className='yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]' onClick={()=>navigate("/ifb")}>IFB</p>
                    <p className='yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]'>GlobalPay</p>
                </div>

                <div className='flex gap-[1rem] items-center'>
                    <p className='curor-pointer madimi-one-regular text-[1.3rem] cursor-pointer' onClick={()=>navigate("/login")}>Login</p>
                    <div className='bg-[#2874fc] rounded-lg px-[2rem] cursor-pointer py-[0.6rem] text-white text-[0.9rem] font-semibold' onClick={()=>navigate("/signup")}>Get Started</div>
                </div>
            </div>
            <div className='w-full h-[0.2rem] bg-gray-300 mt-[1rem]' />
        </div>
    )
}

export default Nav