import React, {useEffect, useState} from 'react';
import Search from "./Control/Search/Search";
import Sort from "./Control/Sort/Sort";
import TaskList from "./TaskList/TaskList";
import Pagination from "./Pagination/Pagination";
import ModalForm from "../ModalForm/ModalForm";
import {createTask, getList} from "../../services/Services";


function Content() {
    const [data, setData] = useState([])


    useEffect(() => {
        getList.then(res => setData(res)).catch(err => `Had problem ${err}`)
        return () => {
            getList.then(res => setData(res)).catch(err => `Had problem ${err}`)
        }
    }, [])

    const onSubmitData = (value) => {
        console.log(value)
        if (value.data.id === "") {
            createTask(value).then(res => setData([...data, res.data])).catch(err => `Had problem ${err}`)
        }
    }
    return (
        <div className="text-center col-end-13 col-span-12 rounded-lg shadow-lg border border-gray-200 ">
            <div className="text-left pb-2 ml-6 mt-5">
                <ModalForm onSubmit={onSubmitData}/>
            </div>
            <div className="flex justify-start items-center mx-6 mt-4 relative mb-10">
                <Search/>
                <Sort/>
            </div>
            <div className="bg-white rounded-lg py-6">
                <div className="block overflow-x-auto mx-6 pb-5">
                    <TaskList data={data}/>
                </div>
                <Pagination/>
            </div>
        </div>
    );
}

export default Content;