import React from 'react';
import CardData from '../../Component/BlogCard';


const Video = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-center mt-12 lg:mt-24">
                <h2 className="text-3xl lg:text-[55px] text-[#F5B711] font-semibold">Blog</h2>
                <p className="text-white font-semibold mt-4 text-lg">
                    Practical project-based courses
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 my-16 mb-44">
                {CardData.map((video, index) => (
                    <div key={index} className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <img
                                className="w-full h-[200px] sm:h-[250px] lg:w-[384px] lg:h-[300px] mx-auto"
                                src={video.image}
                                alt={video.title}
                            />
                        </a>
                        <div className="p-6">
                            <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">{video.title}</h3>
                            <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Video;
