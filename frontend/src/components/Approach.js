import React from 'react'

const Approach = () => {
    return (
        <div className="bg-[#001552] flex  justify-around ">
            <div className='flex flex-col justify-center gap-[2rem]'>
                <div className='flex flex-col gap-[0.2rem]  '>

                    <h3 className='text-white text-bold text-[1.4rem] underline-offset-4'>Our Approach</h3>
                    <div className='h-[0.2rem] w-[5rem] bg-white' />
                </div>
                <div className='flex '>
                    <div className='text-white w-[28rem] text-[1.3rem]  anton-regular'>BlockShard combines powerful, cutting edge technologies such as the cloud, blockchain and cryptography to deliver the first all-in-one cloud storage solution for both businesses and consumers.</div>
                    <div className='text-[1.1rem] text-gray-400 w-[20rem]'>
                        Since all uploaded data is broken into chunks, encrypted and distributed across the network, deciphering any exposed data would require almost limitless time and resources.
                    </div>
                </div>

            </div>
            <img src="/approach-world-fhd.b081a60a.png" alt="" />
        </div>
    )
}

export default Approach