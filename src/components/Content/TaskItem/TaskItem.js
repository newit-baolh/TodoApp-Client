import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getList} from "../../../services/Services";

TaskItem.propTypes = {
    
};

function TaskItem(props) {
    const[data, setData] = useState([])
    useEffect(()=>{
        setData(props.data)
    })
    return (
        <>{
            data && data.map((item, index)=>(
                <tr key={index} className={
                    item.status !== "Đã xong"
                    ? "w-full font-light text-gray-700  whitespace-no-wrap border border-b-1 "
                    : "w-full font-light text-gray-700  whitespace-no-wrap border border-b-1 bg-gray-200"
                }>
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4">{item.name}</td>
                    <td className="px-4 py-4">
              <span className={
                  item.status === "Đang làm"
                  ? "text-sm bg-blue-500 text-white rounded-full px-2 py-1"
                      : (item.status === "Cần làm"
                          ? "text-sm bg-green-500 text-white rounded-full px-2 py-1"
                          : "text-sm bg-gray-500 text-white rounded-full px-2 py-1")
              }>
                {item.status === "Đang làm"
                    ? "Đang làm"
                    : (item.status === "Cần làm"
                        ? "Cần làm"
                        : "Đã xong")}
              </span>
                    </td>
                    <td className="px-4 py-4">
                        <span className="bg-blue-200 px-6 rounded-md py-2">{item.updatedAt}</span>
                    </td>
                    <td className="text-center px-3 py-4 flex gap-5">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </button>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))
        }</>
    );
}

export default TaskItem;