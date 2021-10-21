import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from "../TaskItem/TaskItem";

TaskList.propTypes = {
    
};

function TaskList(props) {
    return (
        <table className="w-full text-left rounded-lg table-auto">
            <thead>
            <tr className="text-gray-800 border border-b-0 bg-blue-300">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Tên công việc</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3">Thời gian</th>
                <th className="px-4 py-3">Hành động</th>
            </tr>
            </thead>
            <tbody>
            <TaskItem data={props.data}/>
            </tbody>
        </table>
    );
}

export default TaskList;