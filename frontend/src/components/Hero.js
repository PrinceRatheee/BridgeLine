import React from 'react';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}
const Hero = () => {
  return (
    <div className='flex justify-evenly my-[3rem]'>
      <div className='flex flex-col w-[30rem] gap-[1rem]'>
        <h1 className='madimi-one-regular text-[3.5rem] font-bold'>
          International Transaction 

          Made 

          <span className='text-[#2874fc]'>{" "} Simplified</span>
        </h1>
        
        <div className='bg-[#2874fc] hover:bg-[#2876fcf1] w-[18rem] flex justify-center cursor-pointer py-[1rem] text-[0.9rem] text-white font-bold'> Get Started
          <div className='flex items-center ml-[0.5rem] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-4 h-4 font-bold hover:w-6 hover:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

          </div>

        </div>
        {/* <motion.img className="scroll-img text-black" src="./scroll.png" alt=""  variants={textVariants} animate="scrollButton"/> */}
        <motion.div className="scroll-img " variants={textVariants} animate="scrollButton">

          <svg className="scroll-img w-[3.5rem] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.01266 4.56502C8.75361 4.16876 9.5587 4 11.1411 4H12.8589C14.4413 4 15.2464 4.16876 15.9873 4.56502C16.6166 4.90155 17.0985 5.38342 17.435 6.01266C17.8312 6.75361 18 7.5587 18 9.14111V14.8589C18 16.4413 17.8312 17.2464 17.435 17.9873C17.0985 18.6166 16.6166 19.0985 15.9873 19.435C15.2464 19.8312 14.4413 20 12.8589 20H11.1411C9.5587 20 8.75361 19.8312 8.01266 19.435C7.38342 19.0985 6.90155 18.6166 6.56502 17.9873C6.16876 17.2464 6 16.4413 6 14.8589V9.14111C6 7.5587 6.16876 6.75361 6.56502 6.01266C6.90155 5.38342 7.38342 4.90155 8.01266 4.56502ZM12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09168 3.32432 5.32432 4.09168 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09168 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09168 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM13 6H11V11H13V6ZM7.75781 13.758L12.0005 18.0006L16.2431 13.758L14.8289 12.3438L12.0005 15.1722L9.17203 12.3438L7.75781 13.758Z" ></path></svg>
        </motion.div>
      </div>

      <div className='flex items-center '>
        <img src="/money.png" alt="heroImage" className='w-[20rem] heroImage' />
      </div>

    </div>
  )
}

export default Hero