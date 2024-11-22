
import React from 'react';
import testimonialsData from '../../Component/CoursesData';

const Testimonials = () => {
  return (
    <div className="lg:py-24">
      <div className="text-center mt-12 lg:mt-24">
        <h2 className="text-3xl lg:text-[55px] text-white font-semibold">TESTIMONIALS</h2>
        <p className="text-[#F5B711] font-semibold mt-4 text-lg">What my Clients are saying?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full max-w-md mx-auto py-8 bg-[#1C222A] text-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="mb-2">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star text-[#F5B711]"></i>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">{testimonial.course}</h3>
            <p className="mt-4 leading-6 lg:leading-[27px] text-white">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <button className="text-white text-base lg:text-lg font-semibold lg:px-[30px] font-Sans-serif w-[265px] lg:w-[245px] h-[48px] lg:h-[58px] rounded-full bg-[#f8b90c] shadow-custom flex items-center justify-center text-center animate-button-move">
          INSTRUCTOR PROFILE
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

