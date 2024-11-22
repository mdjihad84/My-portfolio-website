import HeroImg from '../../assets/images/Man.jpg';

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse gap-[135px] lg:flex-row items-center justify-around p-6 lg:p-12 lg:ml-[-44px] lg:mt-[80px]">
            <div className="text-center lg:text-left">
                <h4 className='text-white font-Poppins text-sm lg:text-lg uppercase'>Hello, My Name Is</h4>
                <h2 className='text-white font-Poppins text-2xl lg:text-5xl uppercase font-semibold my-4 lg:my-6 lg:w-[640px]'>MD JAHIDUL ISLAM ( JIHAD )</h2>
                <h4 className='text-[#f5b711] font-Poppins uppercase font-semibold text-sm lg:text-lg'>I AM Web Developer</h4>
                <p className='text-white leading-6 lg:leading-[25px] font-normal w-full lg:w-[610px] my-4'>From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique.</p>
                <button className='text-white ml-[100px] lg:ml-0 text-base lg:text-lg font-semibold px-5 lg:px-[20px] font-Sans-serif w-[160px] lg:w-[190px] h-[48px] lg:h-[58px] rounded-full bg-[#f8b90c] shadow-custom flex items-center justify-center text-center animate-button-move'>
                    Contact
                </button>
            </div>
            <div className="relative mt-8 lg:mt-0">
                <img className="w-[300px] lg:w-[600px] rounded-full" src={HeroImg} alt="" />
                {/* Absolute area with vertical and horizontal animations */}
                <div className="ml-[35px] gap-3 lg:gap-0 lg:ml-0 flex absolute mt-[-110px] lg:mt-[-175px] animate-move-vertical flex-col lg:flex-row">
                    <div className="w-[220px] lg:w-[295px] h-[90px] lg:h-[110px] rounded-[20px] lg:rounded-[28px] bg-[#111122] flex justify-center items-center border border-[#FFC107]">
                        <div className="text-center">
                            <h3 className="text-[24px] lg:text-[38px] text-white font-bold">08+</h3>
                            <p className="text-[#F5B711] text-sm lg:text-base">Months of Experience</p>
                        </div>
                    </div>
                    <div className="w-[220px] lg:w-[295px] lg:mt-[75px] h-[90px] lg:h-[110px] rounded-[20px] lg:rounded-[28px] bg-[#111122] flex justify-center items-center border border-[#FFC107]">
                        <div className="text-center">
                            <h3 className="text-[24px] lg:text-[38px] text-white font-bold">50+</h3>
                            <p className="text-[#F5B711] text-sm lg:text-base">Completed Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
