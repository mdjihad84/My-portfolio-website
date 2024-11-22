import React from 'react';

const CardSection = () => {
    return (
        <div className="lg:p-8">
            <div className="text-center mt-12 lg:mt-24">
                <h2 className='text-3xl lg:text-[55px] text-white font-semibold'>What I do</h2>
                <p className='text-[#F5B711] font-semibold mt-4 text-lg'>My Services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 my-8 lg:my-16 lg:ml-[-60px]">
                {/* Card 1 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fa-brands fa-figma text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">Design Skills</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                        Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[2px]"></i>
                    </h4>
                </div>
                {/* Card 2 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fas fa-laptop-code text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">FRont-end developer</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                        Experienced in building responsive and efficient web applications using modern frameworks and technologies like React, Tailwind, and more.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[2px]"></i>
                    </h4>
                </div>
                {/* Card 3 */}
                <div className="w-full lg:w-[420px] max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <i className="fa-solid fa-cogs text-4xl lg:text-5xl text-[#f8b90c] font-extrabold mb-4"></i>
                    <h3 className="text-lg lg:text-xl font-semibold uppercase">Problem Solving</h3>
                    <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                        Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[2px]"></i>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
