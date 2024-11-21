import portfolio1 from '../../assets/images/portfolio-img1.jpg';
import portfolio2 from '../../assets/images/portfolio-img2.jpg';
import portfolio3 from '../../assets/images/portfolio-img3.jpg';

const CardSection = () => {
    return (
        <div className="">
            <div className="text-center mt-24">
                <h2 className='text-[55px] text-white font-semibold'>Portfolio</h2>
                <p className='text-[#F5B711]'>MY Cases</p>
            </div>
            <div className="flex justify-center my-16 gap-5">
                <div className="mx-auto w-[440px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-10 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio1} alt="" />
                    <h3 className="text-lg font-semibold uppercase mt-2 mb-[-10px]">
                        Design Skills
                    </h3>
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[5px]"></i>
                    </h4>
                </div>
                <div className="mx-auto w-[440px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-10 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio2} alt="" />
                    <h3 className="text-lg font-semibold uppercase mt-2 mb-[-10px]">
                        Design Skills
                    </h3>
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[5px]"></i>
                    </h4>
                </div>
                <div className="mx-auto w-[440px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-10 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio3} alt="" />
                    <h3 className="text-lg font-semibold uppercase mt-2 mb-[-10px]">
                        Design Skills
                    </h3>
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[5px]"></i>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CardSection;