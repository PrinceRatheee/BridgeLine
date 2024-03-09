import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-[#f3f8ff] flex flex-col  py-[2rem] px-[10rem] mt-auto'>
            <div className='flex justify-between'>
                <div className='flex gap-[2rem] items-center'>

                    <h1 className='anton-regular text-[1.8rem] '>BridgeLine</h1>
                    <div className='flex flex-col items-end justify-center'>
                        <h1 className=' text-[1.1rem] underline-offset-4 font-semibold text-[#2874fc]'>Global Transaction made  <span className='font-bold'>Easy</span></h1>
                        <div className='h-[0.4rem] w-[3rem] bg-[#2874fc] ' />

                    </div>
                </div>
                <div className='flex gap-[2rem]'>

                    <div className='bg-[#011552] hover:bg-[#0060ff] cursor-pointer text-white rounded-lg flex px-[1.2rem] py-[0.6rem] items-center '>
                        <img src="/playstore.png" alt="play store_image" className='w-[2rem] h-[2rem]' />
                        <div className='flex flex-col'>
                            <h3 className='text-[0.8rem]'>Get it On</h3>
                            <h3 className='font-bold'>Play Store</h3>
                        </div>
                    </div>
                    <div className='bg-[#011552] hover:bg-[#0060ff]  cursor-pointer text-white rounded-lg flex gap-[0.4rem] px-[1.2rem] py-[0.6rem] items-center '>
                        <img src="/app-store.png" alt="play store_image" className='w-[2rem] h-[2rem]' />
                        <div className='flex flex-col'>
                            <h3 className='text-[0.8rem]'>Get it On</h3>
                            <h3 className='font-bold'>App Store</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[0.2rem] bg-gray-200 mt-[1rem] mb-[2rem]' />
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[1.2rem] mb-[1rem]'>Products</h1>
                    <div className='flex flex-col'>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black'  onClick={() => navigate("/p2p")}>BridgeLine P2P</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular' onClick={()=>navigate("/ifb")}>Institute Fee Bridge (IFB)</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>BridgeLine GlobalPay</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[1.2rem] mb-[1rem]'>Resources</h1>
                    <div className='flex flex-col'>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Blog</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Knowledge Base</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Security</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Startups</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Docs</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[1.2rem] mb-[1rem]'>Help</h1>
                    <div className='flex flex-col'>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Community</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Support Center</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Status</p>
                        <p className='text-gray-500 text-[0.9rem] cursor-pointer hover:text-black yantramanav-regular'>Contact Us</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[0.5rem]'>
                    <h1 className='font-bold text-[1.2rem] text-center mb-[1rem]'>Follow Us</h1>
                    <div className="flex gap-[1rem] ">
                        <div className='flex items-center justify-center w-[4rem] h-[4rem] border-2 cursor-pointer hover:bg-gray-200 ' > <img src="/github-sign.png" alt="" className='w-[2.5rem] ' /></div>
                        <div className='flex items-center justify-center w-[4rem] h-[4rem] border-2 cursor-pointer hover:bg-gray-200' ><img src="/linkedin.png" className='w-[2.5rem]' alt="" /></div>
                    </div>
                    <div className="flex gap-[1rem]">
                        <div className='flex items-center justify-center w-[4rem] h-[4rem] border-2 cursor-pointer hover:bg-gray-200' > <img src="/twitter.png" alt="" className='w-[2.5rem]' /></div>
                        <div className='flex items-center justify-center w-[4rem] h-[4rem] border-2 cursor-pointer hover:bg-gray-200' ><img src="/instagram.png" className='w-[2.5rem]' alt="" /></div>
                    </div>
                    <div className="flex"></div>

                </div>

            </div>
        </div>
    )
}

export default Footer