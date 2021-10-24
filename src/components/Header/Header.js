import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

Header.propTypes = {};

function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-2 bg-blue-500">
            <div className="flex items-center flex-no-shrink text-white mr-6 block ">
                <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#50e6ff"
                          d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"/>
                    <linearGradient id="LWrCNISWBFF4cEElU_pWDa" x1="28.529" x2="33.6" y1="15.472" y2="10.4"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#3079d6"/>
                        <stop offset="1" stopColor="#297cd2"/>
                    </linearGradient>
                    <path fill="url(#LWrCNISWBFF4cEElU_pWDa)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"/>
                    <path fill="#057093"
                          d="M28,24h-7c-0.552,0-1,0.448-1,1l0,0c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1l0,0	C29,24.448,28.552,24,28,24z"/>
                    <path fill="#057093"
                          d="M31,20H21c-0.552,0-1,0.448-1,1l0,0c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1l0,0	C32,20.448,31.552,20,31,20z"/>
                    <circle cx="17" cy="21" r="1" fill="#057093"/>
                    <circle cx="17" cy="25" r="1" fill="#057093"/>
                    <path fill="#057093"
                          d="M31,28H21c-0.552,0-1,0.448-1,1l0,0c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1l0,0	C32,28.448,31.552,28,31,28z"/>
                    <circle cx="17" cy="29" r="1" fill="#057093"/>
                    <path fill="#057093"
                          d="M28,32h-7c-0.552,0-1,0.448-1,1l0,0c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1l0,0	C29,32.448,28.552,32,28,32z"/>
                    <circle cx="17" cy="33" r="1" fill="#057093"/>
                    <linearGradient id="LWrCNISWBFF4cEElU_pWDb" x1="35.398" x2="43.857" y1="-458.086" y2="-471.113"
                                    gradientTransform="matrix(1 0 0 -1 0 -426)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f44f5a"/>
                        <stop offset=".443" stopColor="#ee3d4a"/>
                        <stop offset="1" stopColor="#e52030"/>
                    </linearGradient>
                    <path fill="url(#LWrCNISWBFF4cEElU_pWDb)"
                          d="M39,35.25c0,0,2.015-2.25,4.5-2.25s4.5,2.042,4.5,4.5c0,4.23-6.628,9.059-8.508,10.344	c-0.298,0.204-0.685,0.204-0.983,0C36.628,46.559,30,41.73,30,37.5c0-2.458,2.015-4.5,4.5-4.5S39,35.25,39,35.25z"/>
                </svg>
                <span className="font-semibold text-xl tracking-tight px-4">TodoApp</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <button
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                    >
                        Docs
                    </button>
                    <button
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                    >
                        Examples
                    </button>
                    <button
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
                    >
                        Blog
                    </button>
                </div>
                <div>

                    <NavLink
                        to={"/login"}
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;