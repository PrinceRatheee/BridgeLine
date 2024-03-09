import React, { useState } from 'react';

const Institute = () => {
  const [formData, setFormData] = useState({
    instituteName: '',
    yourName: '',
    rollNo: '',
    branch: '',
    year: '',
    email: '',
    phoneNumber: '',
    feeAmount: '',
    instituteCountry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log(formData);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col w-[70%] mx-auto my-[4rem]'>
        <div className='flex justify-between'>
          <div>
            <div>

              <h1 className='teko text-center text-[4rem]'>All in one <br /><span className='text-[#2874fc]'>Global Institute / Education </span><br />Fee Payment Portal </h1>
            </div>
          </div>
          <img src="./organization.png" alt="instituteimage " className='w-[20rem] h-[20rem]' />
        </div>

        <div className='bg-gray-200 flex flex-col'>

        </div>
      </div>
      <div className='bg-gray-100 flex flex-col gap-[0.5rem] py-[4rem]'>
        <div className='flex flex-col gap-[0.2rem] px-[4rem]  items-center mb-[3rem]'>

          <h3 className='text-bold text-[4rem] underline-offset-4 '>Pay to your institute</h3>
          <div className='h-[0.4rem] w-[10rem] bg-[#2874fc]' />
        </div>
        {/* Form  */}
        <div className="container mx-auto py-8">
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="instituteName" className="block mb-1">Institute Name</label>
              <input
                type="text"
                id="instituteName"
                name="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="yourName" className="block mb-1">Your Name</label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rollNo" className="block mb-1">Roll No</label>
              <input
                type="text"
                id="rollNo"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block mb-1">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block mb-1">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Your Email Id</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-1">Your Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feeAmount" className="block mb-1">Fee Amount</label>
              <input
                type="text"
                id="feeAmount"
                name="feeAmount"
                value={formData.feeAmount}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="instituteCountry" className="block mb-1">Institute's Country</label>
              <input
                type="text"
                id="instituteCountry"
                name="instituteCountry"
                value={formData.instituteCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Institute;
