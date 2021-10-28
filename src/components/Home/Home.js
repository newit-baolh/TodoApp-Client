import Content from "../Content/Content";
import React, {useEffect, useState,Suspense} from "react";
import Navbar from "../Header/Navbar";
import {Link} from "react-router-dom";
import AuthServices from '../../services/auth.service'
import {useTranslation} from "react-i18next";


function Home() {
    const [isVerified, setIsVerified] = useState()
    const {t} = useTranslation()

   useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("user"))
       setIsVerified(data)
   },[])
   const onConFirmEmail = ()=>{
        AuthServices.confirmEmail(isVerified)
   }

    return (
        <>
            <Navbar/>
            {isVerified && isVerified.isVerify === false ? <p className=" px-10 bg-green-100">Your Email has not been verified. Please click on &nbsp;
                <Link className="text-blue-500 underline" to={"/confirmEmail" } onClick={onConFirmEmail}>Verify</Link>
            </p> : null}
            <div className="container mx-auto">
                <h1 className="text-4xl text-center font-bold py-4 border-b-2 ">
                    {t('MANAGEMENT TODO')}
                </h1>
                <div className="grid grid-cols-12 gap-x-10 m-4">
                    <Content/>
                </div>
            </div>
        </>
    );
}

export default Home;