import React, { useState } from 'react';  // Import useState hook
import SectionTitle from '../../Component/SectionTitle';
import HandImg from '../../assets/images/Hand.png';

const Contact = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [alert, setAlert] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1 && input2) {
      setAlert('All information complete.');
      setAlertType('positive');
    } else {
      setAlert('Please fill all fields.');
      setAlertType('negative');
    }
  };

  return (
    <div className="">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact​"
          subtitle="Let's Talk About Ideas​"
        />
      </div>
      
      <div className="flex justify-center items-center my-20"> 
        {/* Personal Info Section */}
        <div className="">
          <img src={HandImg} alt="HandImg" className="rounded-xl" />
          <h2 className="text-3xl font-semibold text-white mt-2">MD JAHIDUL ISLAM ( JIHAD )</h2>
          <h3 className="text-xl text-white my-3">Web Developer (Back end)</h3>
          <p className="text-lg text-white">Are You Looking For Your Business Online Presence? I am here. 🙂</p>
        </div>
        
        {/* Form Section */}
        <div className="w-[630px] mx-auto">
            <form onSubmit={handleSubmit}>
                {/* Input Fields */}
                <div className="flex gap-4 w-[110%]">
                    <div className="">
                        <label htmlFor="input1" className="block font-medium text-[17px] text-white mb-3">First Name *</label>
                        <input
                            id="input1"
                            type="text"
                            className="w-[338px] hover:border-[#f8b50d] p-2 border bg-[#1C222A] border-gray-300 rounded-xl mt-1"
                            placeholder="John"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="input2" className="block font-medium text-[17px] text-white mb-3">Last Name *</label>
                        <input
                            id="input2"
                            type="text"
                            className="w-[338px] hover:border-[#f8b50d] p-2 border bg-[#1C222A] border-gray-300 rounded-xl mt-1"
                            placeholder="Doe"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                    </div>
                </div>

                <div className="my-8">
                    <label htmlFor="input3" className="block font-medium text-[17px] text-white mb-3">Email Address *</label>
                    <input
                        id="input3"
                        type="email"
                        className="w-[110%] p-2 border hover:border-[#f8b50d] border-gray-300 bg-[#1C222A] rounded-xl mt-1"
                        placeholder="exmple@gmail.com"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="textarea" className="block font-medium text-[17px] text-white mb-3">Message *</label>
                    <textarea
                        id="textarea"
                        className="w-[110%] p-2 bg-[#1C222A] border border-gray-300 hover:border-[#f8b50d] rounded-xl mt-1"
                        placeholder="Tell us more about your project"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>

                {/* Alert Messages */}
                {alert && (
                <div
                    className={`p-4 mb-4 text-white  rounded-xl ${
                    alertType === 'positive' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    {alert}
                </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-[110%] px-4 py-3 bg-[#f8b50d] text-white  rounded-xl hover:bg-[#d19809] mt-4"
                    >
                    Submit
                </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
