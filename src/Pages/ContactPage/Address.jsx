import React from 'react';

const Address = () => {
    return (
        <div className="mb-20">
            <div className="flex">
                <div className="">
                    <i class="text-4xl text-[#f8b50d] fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-5">
                    <h3 className='text-white text-2xl font-semibold'>Address</h3>
                    <p className='text-white text-base font-medium'>Mirpur, Dhaka – 1216</p>
                </div>
            </div>
            <div className="flex my-10">
                <div className="">
                    <i class="text-4xl text-[#f8b50d] fas fa-user"></i>
                </div>
                <div className="ml-5">
                    <h3 className='text-white text-2xl font-semibold'>Address</h3>
                    <p className='text-white text-base font-medium'>Mirpur, Dhaka – 1216</p>
                </div>
            </div>
            <div className="flex">
                <div className="">
                    <i class="text-4xl text-[#f8b50d] far fa-envelope"></i>
                </div>
                <div className="ml-5">
                    <h3 className='text-white text-2xl font-semibold'>Address</h3>
                    <p className='text-white text-base font-medium'>Mirpur, Dhaka – 1216</p>
                </div>
            </div>
        </div>
    );
};

export default Address;