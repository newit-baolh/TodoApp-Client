import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

Sort.propTypes = {};

function Sort(props) {
    const {onSort} = props

    const handleSort =(e)=>{
        let value = e.target.value
        onSort(value)
    }

    return (
        <div className="absolute top-0 right-32 bg-blue-500 ml-20 rounded-2xl ">
            <select
                onChange={handleSort}
                className="block w-full px-7 py-1.5 outline-none  border border-blue-200 bg-blue-400 rounded rounded-md text-white"
            >
                <option value="default">Sắp xếp</option>
                <option value="increase">Tên A - Z</option>
                <option value="decrease">Tên Z - A</option>
                <option value="make">Cần làm</option>
                <option value="pending">Đang làm</option>
                <option value="finish">Đã xong</option>
            </select>
        </div>
    )
}

export default Sort;