import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Search from "./Control/Search/Search";
import Sort from "./Control/Sort/Sort";
import TaskList from "./TaskList/TaskList";
import Pagination from "./Pagination/Pagination";
import ModalForm from "../ModalForm/ModalForm";


function Content(props) {


    return (
        <div className="text-center col-end-13 col-span-12 rounded-lg shadow-lg border border-gray-200 ">
            <div className="text-left pb-2 ml-6 mt-5">
                <ModalForm/>
            </div>
            <div className=" flex justify-start items-center mx-6 mt-4 relative ">
                <Search/>
                <Sort/>
            </div>
            <div className="bg-white rounded-lg py-6">
                <div className="block overflow-x-auto mx-6 pb-5">
                <TaskList/>
                </div>
                <Pagination/>
            </div>

        </div>
    );
}

export default Content;