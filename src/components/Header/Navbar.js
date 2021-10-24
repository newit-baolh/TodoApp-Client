import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import AuthServices from '../../services/auth.service'


function Navbar(props) {
    const ref = useRef()
    const [showModal, setShowModal]=useState(false)

    const openProfile = () => {
        setShowModal(true)
    }
    useEffect(()=>{
        const onCloseModelProfile = (e)=>{
            if(!ref.current || ref.current.contains(e.target)){
                return
            }setShowModal(false)
        }
        document.addEventListener("mousedown",onCloseModelProfile)
        return ()=>{
            document.addEventListener("mousedown",onCloseModelProfile)
        }
    },[])
    const onLogout = () => {
      AuthServices.logout()
    }
    return (
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <Link to={"/home"}><svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
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
                            </svg></Link>
                        </div>
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">
                                <Link to={"/home"} class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang chủ</Link>

                                <Link to={"#"} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nhóm</Link>

                                <Link to="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Todo</Link>

                                <Link to="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lịch</Link>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div class="ml-3 relative">
                            <div>
                                <button onClick={openProfile} type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                </button>
                            </div>
                            {showModal && (
                                <div
                                    ref={ref}
                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                    tabIndex="-1">
                                    <Link to={"/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300" role="menuitem"
                                       tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
                                    <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300" role="menuitem"
                                       tabIndex="-1" id="user-menu-item-1">Settings</Link>
                                    <Link to={"/login"} onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300" role="menuitem"
                                       tabIndex="-1" id="user-menu-item-2">Sign out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;