import HeroImg from '../../assets/images/Man.jpg';

const HeroSection = () => {
    return (
        <div className="flex items-center justify-around">
            <div className="">
                <h4 className='text-white font-Poppins text-lg uppercase'>Hello, My Name Is</h4>
                <h2 className='text-white font-Poppins text-5xl uppercase font-semibold my-6'>MD JAHIDUL ISLAM ( JIHAD )</h2>
                <h4 className='text-[#f5b711] font-Poppins uppercase font-semibold text-lg'>I AM Web Developer</h4>
                <p className='text-white leading-[25px] font-normal w-[610px] my-4'>From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique.</p>
                {/* Button with vertical animation */}
                <button className='text-white text-lg font-semibold px-[20px] font-Sans-serif w-[190px] h-[58px] rounded-[40px] bg-[#f8b90c] Custom shadow #F9C873] flex items-center justify-center text-center animate-button-move'>
                    Contact
                </button>
            </div>
            <div className="relative">
                <img className="w-[600px] rounded-full" src={HeroImg} alt="" />
                {/* Absolute area with vertical and horizontal animations */}
                <div className="flex absolute mt-[-175px] animate-move-vertical">
                    <div className="w-[295px] h-[110px] rounded-[28px] bg-[#111122] flex justify-center items-center border border-[#FFC107]">
                        <div className="w-[332px] text-center">
                            <h3 className="text-[38px] text-white font-bold">8+</h3>
                            <p className="text-[#F5B711]">Month of Experience</p>
                        </div>
                    </div>
                    <div className="mt-[75px] w-[295px] h-[110px] rounded-[28px] bg-[#111122] flex justify-center items-center border border-[#FFC107]">
                        <div className="w-[332px] text-center">
                            <h3 className="text-[38px] text-white font-bold">50+</h3>
                            <p className="text-[#F5B711]">Completed Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
