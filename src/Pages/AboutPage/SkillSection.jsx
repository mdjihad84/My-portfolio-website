import React from 'react';

const Skill = () => {
    return (
        <div className="my-10 flex flex-col md:flex-row justify-center gap-6 lg:px-4">
            {/* Education Section */}
            <div className="bg-[#1C2229] w-full md:w-[700px] p-[40px] rounded-xl">
                <h2 className='text-3xl text-[#F8B90C] font-bold'>EDUCATION</h2>
                <div>
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className='my-3 text-base font-semibold text-white'>2013-2014</p>
                    <h4 className='text-xl font-bold text-white'>M.Sc. In Information and Communication Technology</h4> 
                </div>
                <div className="my-4">
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className='my-3 text-base font-semibold text-white'>2013-2014</p>
                    <h4 className='text-xl font-bold text-white'>M.Sc. In Information and Communication Technology</h4> 
                </div>
                <div>
                    <i className="fas fa-book-open text-lg text-[#F8B90C] mt-3"></i>
                    <p className='my-3 text-base font-semibold text-white'>2013-2014</p>
                    <h4 className='text-xl font-bold text-white'>M.Sc. In Information and Communication Technology</h4> 
                </div>
            </div>

            {/* Skill Section */}
            <div className="bg-[#1C2229] w-full md:w-[700px] p-[40px] rounded-xl">
                <h2 className="text-3xl text-[#F8B90C] font-bold mb-6">SKILL</h2>
                
                {/* Skill: HTML */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "90%" }}>
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: CSS */}
                <div className="my-5">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "85%" }}>
                            <span>CSS</span>
                            <span>85%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: JavaScript */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "40%" }}>
                            <span>JavaScript</span>
                            <span>40%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Bootstrap */}
                <div className="my-5">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "50%" }}>
                            <span>Bootstrap</span>
                            <span>50%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Tailwind */}
                <div className="mb-5">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "70%" }}>
                            <span>Tailwind</span>
                            <span>70%</span>
                        </div>
                    </div>
                </div>

                {/* Skill: Figma */}
                <div className="mb-4">
                    <div className="w-full bg-gray-300 rounded-[8px] h-10 relative">
                        <div className="bg-[#F8B90C] h-10 rounded-[8px] flex items-center justify-between px-6 py-4 text-black text-sm font-bold" style={{ width: "50%" }}>
                            <span>Figma</span>
                            <span>50%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
