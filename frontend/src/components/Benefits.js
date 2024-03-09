import React from 'react'
const Benefits = () => {
    return (
        <div className='mt-[2rem] flex flex-col'>
            <div className='flex flex-col gap-[0.2rem] px-[4rem] '>

                <h3 className='text-bold text-[1.4rem] underline-offset-4'>Our Benefits</h3>
                <div className='h-[0.2rem] w-[5rem] bg-[#2874fc]' />
            </div>
            <div className='flex mx-auto gap-[4rem]'>
                <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
                    <div className='flex flex-col gap-[0.2rem] items-center'>

                        <img src="/dollar.png" className='w-[4rem]' alt="" />
                        <div className='flex items-center'>

                            <h3 className='text-bold text-[1.3rem] '>Transaction Fee</h3>
                        </div>
                    </div>
                    <h3 className='w-[12rem] yantramanav-regular'>Enjoy reduced transaction fees thanks to our  finance principles, cutting unnecessary costs and maximizing your returns.</h3>
                </div>
                <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
                    <div className='flex flex-col gap-[0.2rem] items-center'>

                        <img src="/innovation.png" className='w-[4rem]' alt="" />
                        <div className='flex items-center'>

                            <h3 className='text-bold text-[1.3rem]'>Rapid Transfer</h3>
                        </div>
                    </div>
                    <h3 className='w-[12rem] yantramanav-regular'>Experience lightning-fast transactions ensuring swift and seamless transfers across borders in seconds, not days.</h3>
                </div>
                <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
                    <div className='flex flex-col gap-[0.2rem] items-center'>

                        <img src="/data-encryption.png" className='w-[4rem]' alt="" />
                        <div className='flex items-center'>

                            <h3 className='text-bold text-[1.3rem]'>Safe and Secure</h3>
                        </div>
                    </div>
                    <h3 className='w-[12rem] yantramanav-regular'>Rest easy knowing your transactions are fortified with blockchain smart contracts. Your financial assets are safeguarded like never before.</h3>
                </div>
                <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
                    <div className='flex flex-col gap-[0.2rem] items-center'>

                        <img src="/global-network.png" className='w-[4rem]' alt="" />
                        <div className='flex items-center'>

                            <h3 className='text-bold text-[1.3rem]'>Globally Accessible</h3>
                        </div>
                    </div>
                    <h3 className='w-[12rem] yantramanav-regular'>Seamlessly conduct transactions across the globe with ease, empowering you to manage your finances regardless of your location.</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Benefits