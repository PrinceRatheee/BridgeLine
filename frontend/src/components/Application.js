import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card/Card';

const Application = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* BridgeLine P2P  */}
            <div className='mt-[5rem] flex flex-col '>
                <div className='flex flex-col gap-[0.2rem] px-[4rem]  items-center'>

                    <h3 className='text-bold text-[4rem] underline-offset-4 '>Services</h3>
                    <div className='h-[0.4rem] w-[10rem] bg-[#2874fc]' />
                </div>
                <div className='flex justify-around '>
                    <div className='flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center'>
                        <h1 className='text-[#2874fc] madimi-one-regular text-[1.3rem]'>BridgeLine P2P</h1>
                        <h1 className='anton-regular text-[2.5rem]'>Peer to Peer Money Transfer</h1>
                        <h3 className='yantramanav-regular text-[1.1rem]'>The BridgeLine P2P is designed for transferring your funds to another person living in some other country or nation with least transaction fee. You can add funds from your bank account to B2P(BridgeLine P2P) and then can send it to other user . </h3>
                        <h4 className='text-[1.1rem] text-gray-500 '>It guarantees the safety of your money but also rapid transfer to other person.</h4>
                        <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold' onClick={() => navigate("/p2p")} >Proceed
                            <img src="./right.png" alt="Arrow" className='w-[2rem]' />

                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src="/p2p.png" className='w-[40rem] border-2' alt="" />
                    </div>

                </div>
            </div>

            {/* BridgeLine Fee Portal */}
            <div className='flex justify-around '>
                <div className='flex items-center'>
                    <img src="/ifb.png" className='w-[40rem] border-2' alt="" />
                </div>
                <div className='flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center'>
                    <h1 className='text-[#2874fc] madimi-one-regular text-[1.3rem]'>Institute Fee Bridge (IFB)</h1>
                    <h1 className='anton-regular text-[2.5rem]'>International Education Fee Payment</h1>
                    <h3 className='yantramanav-regular text-[1.1rem]'>The IFB(Institute Fee Bridge) is designed for paying institute fees for the universities situated outside our country. International fee payment has now made easy with IFB. We offer the least transaction cost to all the students studying outside the country , if they want to pay from bank account within their country . </h3>
                    <h4 className='text-[1.1rem] text-gray-500 '>It's aim is not to reduce the transaction cost on the family of students studying abroad.</h4>
                    <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold' onClick={()=>navigate("/ifb")}>Proceed
                        <img src="./right.png" alt="Arrow" className='w-[2rem]' />

                    </div>
                </div>



            </div>
            {/* Bridgeline Ecommerce  */}

                <div className='flex justify-around '>
                    <div className='flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center'>
                        <h1 className='text-[#2874fc] madimi-one-regular text-[1.3rem]'>BridgeLine GlobalPay Ecommerce</h1>
                        <h1 className='anton-regular text-[2.5rem]'>Pay for international products</h1>
                        <h3 className='yantramanav-regular text-[1.1rem]'>The BridgeLine GlobalPay platform is for those who buy products from international market and pay in their native country.Usually , to buy that product , the currency is first changed into another country which increases it's cost. Through BridgeLine GlobalPay you can buy that product cost to cost with zero fee.  </h3>
                        <h4 className='text-[1.1rem] text-gray-500 '>Now import products from international market with zero fee.</h4>
                        <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold'>Proceed
                            <img src="./right.png" alt="Arrow" className='w-[2rem]' />

                        </div>
                    </div>
                    <div>
                        <img src="/transferchain_web.5c25714d.png" className='w-[40rem]' alt="" />
                    </div>

                </div>
            {/* BridgeLine Debit Card */}
            {/* <div className='flex justify-around '>
                <div>
                    <Card/>
                </div>
                <div className='flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center'>
                    <h1 className='text-[#2874fc] madimi-one-regular text-[1.3rem]'>BridgeLine EasyPay Card(BEPC)</h1>
                    <h1 className='anton-regular text-[2.5rem]'>Globally accessible digital debit card</h1>
                    <h3 className='yantramanav-regular text-[1.1rem]'>Now , you can move around the world and can pay in any country in any currrency for free with our debit card. BridgeLine EasyPay Card(BEPC) allows you to deposit money in your currency and spend in any currency , with no limitations. </h3>
                    <h4 className='text-[1.1rem] text-gray-500 '>It0's aim is to reduce fees you pay while moving around the world.</h4>
                    <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold' onClick={()=>navigate("/ifb")}>Proceed
                        <img src="./right.png" alt="Arrow" className='w-[2rem]' />

                    </div>
                </div>



            </div> */}

        </div>
    )
}

export default Application