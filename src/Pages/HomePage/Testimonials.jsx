import ClientsImg1 from '../../assets/images/Clients.jpg';
import ClientsImg2 from '../../assets/images/rossbrown.jpg';
import ClientsImg3 from '../../assets/images/ryangladhill.jpg';

const CardSection = () => {
    return (
        <div className="">
            <div className="text-center mt-24">
                <h2 className='text-[55px] text-white font-semibold'>TESTIMONIALS</h2>
                <p className='text-[#F5B711] font-semibold'>What my Clients are saying?</p>
            </div>
            <div className="flex justify-center my-16 gap-7">
                <div className="mx-auto w-[455px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        He is a very nice guy to work with. Thanks a lot for helping and I will do more business with you 🙂
                    </p>
                    <img className='rounded-full mt-6' src={ClientsImg1} alt="" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2'>mbdevboston</h4>
                    <h5 className='text-white text-xl font-semibold'>Designer</h5> 
                </div>      
                <div className="mx-auto w-[455px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        Great experience, highly recommend him. Worked through all my questions with me and was very timely in his responsiveness.
                    </p>
                    <img className='rounded-full mt-6' src={ClientsImg2} alt="" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2'>rossbrown</h4>
                    <h5 className='text-white text-xl font-semibold'>Manager</h5> 
                </div>      
                <div className="mx-auto w-[455px] py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <p className="mt-4 w-[370px] leading-[27px] text-white">
                        He is a very nice guy to work with. Thanks a lot for helping and I will do more business with you 🙂
                    </p>
                    <img className='rounded-full mt-6' src={ClientsImg3} alt="" />
                    <h4 className='text-[#F8B90C] text-xl font-semibold my-2'>ryangladhill</h4>
                    <h5 className='text-white text-xl font-semibold'>Manager</h5> 
                </div>      
            </div>
        </div>
    );
};

export default CardSection;