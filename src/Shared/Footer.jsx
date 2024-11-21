import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center p-4 bg-[#1C222A] text-white">
            <div className="flex space-x-4">
                <a href="#" className="text-[#F8B90C]"><i className="fab fa-facebook-f text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i></a>
                <a href="#" className="text-[#F8B90C]"><i className="fab fa-twitter text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i></a>
                <a href="#" className="text-[#F8B90C]"><i className="fab fa-instagram text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i></a>
                <a href="#" className="text-[#F8B90C]"><i className="fab fa-linkedin-in text-[#262626] bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full shadow-[0px_0px_5px_0px_#f9c873]"></i></a>
            </div>
            <p className="text-sm font-semibold text-[#F8B90C]">© All Rights Reserved 2024 - 2025 | Md jihad</p>
        </footer>

    );
};

export default Footer;