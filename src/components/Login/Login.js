import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

Login.propTypes = {
    
};

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <div className="flex justify-center">
                    <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
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
                </div>
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                                <input type="text" placeholder="Email"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                    <span className="text-xs tracking-wide text-red-600">Email field is required </span>
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                                <input type="password" placeholder="Password"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                            <span className="text-xs tracking-wide text-red-600">Password field is required </span>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <NavLink className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" to={"/"}>Login</NavLink>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;