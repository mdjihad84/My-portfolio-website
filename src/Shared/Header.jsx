import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-white text-xl font-bold menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                                Say Hello
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/" className="text-3xl font-bold text-white">MD JIHAD</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white text-lg menu menu-horizontal px-1 gap-3">
                    <li>
                        <NavLink to="/" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] hover:bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-lg font-semibold w-[118px] h-[50px] rounded-[40px] bg-[#f8b90c] shadow-[0 0 5px #f9c873] shadow-[#f9c873] flex items-center justify-center text-center">
                            Say Hello
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
