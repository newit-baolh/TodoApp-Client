import Header from "../Header/Header";
import Content from "../Content/Content";
import React from "react";

function Home() {
    return (
        <>
            <Header/>
            <div className="container mx-auto">
                <h1 className="text-4xl text-center font-bold py-4 border-b-2 ">
                    QUẢN LÝ CÔNG VIỆC
                </h1>
                <div className="grid grid-cols-12 gap-x-10 m-4">
                    <Content/>
                </div>
            </div>
        </>
    );
}

export default Home;