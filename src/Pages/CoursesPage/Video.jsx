import React from 'react';

const Video = () => {
    return (
        <div className="container mx-auto lg:px-4">
            <div className="text-center mt-12 lg:mt-24">
                <h2 className="text-3xl lg:text-[55px] text-[#F5B711] font-semibold">Courses</h2>
                <p className="text-white font-semibold mt-4 text-lg">
                    Practical project-based courses
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Video Card 1 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://www.youtube.com/watch?v=jRMCheGk11E&list=PL07efmqYWHZ_rVeQ1ws0ER9eL6cxo-d5V&index=14"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Video Card 2 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://www.youtube.com/watch?v=DFmhX5h6Lig"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Video Card 3 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://www.youtube.com/embed/-xCExxPXCo0"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Video Card 4 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://youtu.be/cEr8XCnoSVY"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Video Card 5 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://www.youtube.com/embed/-xCExxPXCo0"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Video Card 6 */}
                <div className="max-w-sm mx-auto bg-[#1C222A] text-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-sm">
                    <iframe
                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mx-auto"
                        src="https://www.youtube.com/embed/-xCExxPXCo0"
                        title="Bootstrap 5 Essential Training: With Projects"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className="p-6">
                        <h3 className="text-lg lg:text-xl font-semibold uppercase mt-4">Problem Solving</h3>
                        <p className="mt-4 leading-6 lg:leading-[27px] text-white">
                            Skilled at troubleshooting and optimizing code, ensuring smooth and efficient website functionality for a seamless user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
