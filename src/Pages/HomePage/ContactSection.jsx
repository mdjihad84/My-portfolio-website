
const CardSection = () => {
    return (
        <div className="">
            <div className="text-center mt-24">
                <h2 className='text-[55px] text-white font-semibold'>Contact​</h2>
                <p className='text-[#F5B711] font-semibold'>Are You Looking For Your Business Online Presence? I am here. 🙂</p>
            </div>
            <div className="flex justify-center my-16 gap-7">      
                <div className="mx-auto w-[440px] py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i className="text-[#F8B90C] text-[40px] fa-solid fa-user"></i>
                    <h3 className="text-white text-2xl font-semibold my-2">Md Jahidul Islam Jihad</h3>
                    <p className="text-white text-base font-semibold">Web Developer (Bangladesh)​</p> 
                </div>     
                <div className="mx-auto w-[440px] py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i class="fa-solid fa-user-group text-[#F8B90C] text-[40px]"></i>
                    <h3 className="text-white text-2xl font-semibold my-2">Freelance</h3>
                    <p className="text-white text-base font-semibold">Available Right Now​</p> 
                </div>     
                <div className="mx-auto w-[440px] py-9 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <i className="fa-solid fa-envelope text-[#F8B90C] text-[40px]"></i>
                    <h3 className="text-white text-2xl font-semibold my-2">Email​</h3>
                    <p className="text-white text-base font-semibold">mdjihad@gmail.com​</p> 
                </div>     
            </div>
        </div>
    );
};

export default CardSection;