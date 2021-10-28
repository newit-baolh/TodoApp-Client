import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

Search.propTypes = {
    onSearch: PropTypes.func,
};
Search.defaultProps = {
    onSearch: ""
}

function Search(props) {

    const {onSearch} = props
    const [search, setSearch] = useState("")
    const typingTimeOutRef = useRef(null)
    const {t} = useTranslation()

    const handleOnChange = (e) => {
        const {value} = e.target
        setSearch(value)

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        }
        typingTimeOutRef.current = setTimeout(() => {
            const formValues = {
                keyword: value
            }
            onSearch(formValues)
        }, 500)
    }
    const onClear = () => {
        setSearch("")
        const formValues = {
            keyword: ""
        }
        onSearch(formValues)
    }

    return (
        <div className="w-2/3 absolute top-0 left-0 mr-10">
            <input
                value={search}
                onChange={handleOnChange}
                type="text"
                placeholder={t('SEARCH')}
                className=" inline-block py-1.5 bg-gray-100 px-4 w-full outline-none  rounded-lg focus:shadow  left-0"
            />
            {search && <span
                onClick={onClear}
                className="absolute top-1.5 right-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6 cursor-pointer" >
                    <path
                        d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z">
                    </path>
                </svg>
                </div>

            </span>}
        </div>
    );
}

export default Search;