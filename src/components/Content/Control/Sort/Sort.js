import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

Sort.propTypes = {};

function Sort(props) {
    const {onSort} = props
    const {t} = useTranslation()

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
                <option value="default">{t('FILTER')}</option>
                <option value="increase">{t('A-Z')}</option>
                <option value="decrease">{t('Z-A')}</option>
                <option value="make">{t('NEED TODO')}</option>
                <option value="pending">{t('PENDING')}</option>
                <option value="finish">{t('DONE')}</option>
            </select>
        </div>
    )
}

export default Sort;