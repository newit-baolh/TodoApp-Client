import React, {useEffect, useState} from 'react';
import Search from "./Control/Search/Search";
import Sort from "./Control/Sort/Sort";
import TaskList from "./TaskList/TaskList";
import Pagination from "./Pagination/Pagination";
import ModalForm from "../ModalForm/ModalForm";
import {createTask, deleteTask, getList, updateTask} from "../../services/Services";



function Content(props) {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(null)
    const [filters, setFilters] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        getList().then(res => {
            setData(res)
            setFilters(res)
        }).catch(err => `Had problem ${err}`)
        return () => {
            getList().then(res => setData(res)).catch(err => `Had problem ${err}`)
        }
    }, [])

    const onSubmitData = (value) => {
        if (value.data.id === "") {
            onCreate(value)
        } else {
            onUpdate(value)
        }
    }
    // Tạo 1 task mới
    const onCreate = (value)=>{
        createTask(value).then(res => setData([...data, res.data])).catch(err => `Had problem ${err}`)
    }
    // Xoá 1 task
    const onDelete = (item) => {
        const newData = [...data]
        const index = newData.findIndex(ele => ele.id === item.id)
        if (index !== -1) {
            newData.splice(index, 1)
        }
        setData(newData)
        deleteTask(item)

    }
    // Cập nhật lại 1 task
    const onUpdate = (value) => {
        let newData = [...data]
        const index = newData.findIndex(ele => ele.id === value.data.id)
        if (index !== -1) {
            updateTask(value.data)
                .then(res => {
                    newData[index] = res.data
                    setData(newData)
                })
                .catch(err => `Had problem ${err}`)
        }
    }

    // cleanup code edit after edit change
    useEffect(() => {
        setEdit(null)
    }, [edit])

    const onSearchItem = (value) => {
        const keyword = value.keyword
        if (value.search !== "") {
            const filterData = filters.filter(item => {
                let a = item.name.toLowerCase()
                let b = keyword.toLowerCase()
                return a.includes(b)
            })
            setData(filterData)

        } else {
            setData(filters)
        }
    }

    // Pagination
    const itemsPerPage = 5
    const pagesVisited = pageNumber * itemsPerPage
    const displayItemsPage = data.slice(pagesVisited, pagesVisited + itemsPerPage)
    const pageCount = Math.ceil(data.length / itemsPerPage)
    const paginated = {
        displayItemsPage,pageCount
    }

    return (
        <div className="text-center col-end-13 col-span-12 rounded-lg shadow-lg border border-gray-200 z-10">
            <div className="text-left pb-2 ml-6 mt-5 z-10">
                <ModalForm onSubmit={onSubmitData} edit={edit}/>
            </div>
            <div className="flex justify-start items-center mx-6 mt-4 relative mb-10">
                <Search onSearch={onSearchItem}/>
                <Sort/>
            </div>
            <div className="bg-white rounded-lg py-6 z-10">
                <div className="block overflow-x-auto mx-6 pb-5 z-10">
                    <TaskList data={data} onDelete={onDelete} onEdit={(item) => setEdit(item)} paginated={paginated}/>
                </div>
                <Pagination data={data} paginated={paginated} pageNumber={(item)=>setPageNumber(item)}/>
            </div>
        </div>
    );
}

export default Content;