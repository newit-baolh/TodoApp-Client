import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import {useTranslation} from "react-i18next";


function TaskList(props) {
    const {t} = useTranslation()

    return (
        <table className="w-full text-center rounded-lg table-auto z-10">
            <thead>
            <tr className="text-gray-800 border border-b-0 bg-blue-300">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">{t('TODO NAME')}</th>
                <th className="px-4 py-3">{t('STATUS')}</th>
                <th className="px-4 py-3">{t('TIME')}</th>
                <th className="px-4 py-3">{t('ACTION')}</th>
            </tr>
            </thead>
            <tbody>
            <TaskItem data={props.data} onDelete={props.onDelete} onEdit={props.onEdit} paginated={props.paginated}/>
            </tbody>
        </table>
    );
}

export default TaskList;