import React from 'react';
import PropTypes from 'prop-types';

Sort.propTypes = {
    
};

function Sort(props) {
    return (
        <button
            className="bg-blue-500 px-6 py-1.5 ml-20  rounded-md text-white border border-white hover:bg-blue-400 group-hover:block relative ">
            Sắp xếp
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block pl-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
            </svg>
            <div
                className="absolute top-10 left-0 w-full bg-blue-100 border border-black-500 rounded-md cursor-pointer hidden  hover:active ">
                <div className="bg-blue-500 px-3 hover:bg-blue-400">Tên A-Z</div>
                <div className="bg-blue-500 px-3 hover:bg-blue-400">Tên Z-A</div>
                <hr/>
                <div className="bg-blue-500 px-3 hover:bg-blue-400">Cần làm</div>
                <div className="bg-blue-500 px-3 hover:bg-blue-400">Đang làm</div>
                <div className="bg-blue-500 px-3 hover:bg-blue-400">Đã xong</div>
            </div>
        </button>
    );
}

export default Sort;