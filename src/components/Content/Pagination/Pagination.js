import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    
};

function Pagination(props) {

    return (
        <nav aria-label="Page navigation">
            <ul className="inline-flex space-x-2">
                <li>
                    <button
                        className="flex items-center justify-center w-8 h-8 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd" fillRule="evenodd"/>
                        </svg>
                    </button>
                </li>
                <li>
                    <button
                        className="w-8  h-8 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1
                    </button>
                </li>
                <li>
                    <button
                        className="w-8 h-8 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100  ">2
                    </button>
                </li>
                <li>
                    <button
                        className="w-8 h-8 text-white transition-colors duration-150   rounded-full focus:shadow-outline bg-blue-500 border border-r-0 border-indigo-600 ">3
                    </button>
                </li>
                <li>
                    <button
                        className="flex items-center justify-center w-8 h-8 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd" fillRule="evenodd"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;