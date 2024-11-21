import portfolio1 from '../../assets/images/portfolio-img1.jpg';
import portfolio2 from '../../assets/images/portfolio-img2.jpg';
import portfolio3 from '../../assets/images/portfolio-img3.jpg';

const CardSection = () => {
    return (
        <div className="p-4 lg:p-8">
            <div className="text-center mt-12 lg:mt-24">
                <h2 className='text-3xl lg:text-[55px] text-white font-semibold'>Portfolio</h2>
                <p className='text-[#F5B711] font-semibold mt-2 text-lg'>MY Cases</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 my-8 lg:my-16 lg:ml-[-60px]">
                {/* Card 1 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio1} alt="Portfolio 1" className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold uppercase mt-2">Design Skills</h3>
                    <p className="mt-4 leading-6 text-white">
                        Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[2px]"></i>
                    </h4>
                </div>
                {/* Card 2 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio2} alt="Portfolio 2" className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold uppercase mt-2">Development Skills</h3>
                    <p className="mt-4 leading-6 text-white">
                        Experienced in developing responsive and efficient websites with a focus on performance and usability.
                    </p>
                    <h4 className="mt-6 flex items-center gap-2 text-white font-semibold">
                        Say Hello
                        <i className="cursor-pointer text-[#f8b90c] fa-solid fa-arrow-right mt-[2px]"></i>
                    </h4>
                </div>
                {/* Card 3 */}
                <div className="mx-auto w-full lg:w-[420px] max-w-md py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img src={portfolio3} alt="Portfolio 3" className="rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold uppercase mt-2">Problem Solving</h3>
                    <p className="mt-4 leading-6 text-white">
                        Skilled at troubleshooting and optimizing code for smooth and efficient website functionality.
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
