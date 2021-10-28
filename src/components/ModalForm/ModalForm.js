import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

ModalForm.propTypes = {
    onSubmit: PropTypes.func,
};
ModalForm.defaultProps = {
    onSubmit: null,
}

function ModalForm(props) {

    const {onSubmit, edit} = props
    const triggerRef = useRef(null)
    const [showModal, setShowModal] = useState(false)
    const [editing, setEditing] = useState(null)
    const [inputValues, setInputValues] = useState({
        id: "",
        name: "",
        status: "Cần làm",
        description: ""
    })
    const {t} = useTranslation()

    useEffect(() => {
        if (editing !== null) {
            setShowModal(true)
            setInputValues({
                ...inputValues,
                id: editing.id,
                name: editing.name,
                status: editing.status,
                description: editing.description
            })
        }
        return ()=>{
            setEditing(edit)
        }

    }, [ edit,editing,inputValues])

    useEffect(() => {
        const useDetectClickOutSide = (e) => {
            // Không làm gì nếu nhấp vào phần tử của ref hoặc các phần tử con
            // Do nothing if clicking ref's element or descendent elements
            if (!triggerRef.current || triggerRef.current.contains(e.target)) {
                return
            }
            setShowModal(false)
        }
        document.addEventListener("mousedown", useDetectClickOutSide)
        return () => {
            document.addEventListener("mousedown", useDetectClickOutSide)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!onSubmit) return
        const formValues = {
            data: inputValues
        }

        onSubmit(formValues)
        setInputValues({
            id:"",
            name: "",
            status: "Cần làm",
            description: ""
        })
        setShowModal(false)
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]: value})
    }


    return (
        <>
            <button className="bg-blue-500 py-2 px-10 rounded-md text-white hover:bg-blue-400"
                    onClick={() => {
                        setShowModal(true)
                        setInputValues({
                            id: "",
                            name: "",
                            status: "Cần làm",
                            description: ""
                        })
                    }}>
                <i className="fas fa-plus-circle"/>&nbsp; {t('ADD TODO')}
            </button>
            {showModal && (
                <div>
                    <form onSubmit={handleSubmit}
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-1/2 my-6 mx-auto max-w-3xl text-sm">
                            {/*content*/}
                            <div ref={triggerRef}
                                 className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <h2 className=" bg-blue-400 text-white text-2xl font-semibold py-2 relative rounded-t-lg text-center">
                                    {t('ADD TODO')}
                                    <svg
                                        onClick={() => setShowModal(false)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 absolute top-2.5 right-4 cursor-pointer hover:text-red-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="{2}"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </h2>
                                <div className="relative py-3 px-10 flex-auto">
                                    <div className="py-3">
                                        <label className="block text-left pb-2 text-gray-700">{t('TODO NAME')}</label>
                                        <input
                                            name="name"
                                            value={inputValues.name}
                                            onChange={onChange}
                                            className=" py-1.5 w-full bg-gray-100 px-4 outline-none"
                                            type="text"
                                            placeholder={t('INPUT NAME TODO')}
                                        />
                                    </div>
                                    <div className="py-5 text-left">
                                        <label className=" block pb-2 text-gray-700">{t('STATUS')}</label>
                                        <select
                                            name="status"
                                            value={inputValues.status}
                                            onChange={onChange}
                                            className="block w-full bg-gray-100 py-1.5 px-4 outline-none  "
                                        >
                                            <option>{t('NEED TODO')}</option>
                                            <option>{t('PENDING')}</option>
                                            <option>{t('DONE')}</option>
                                        </select>
                                    </div>
                                    <label className="block text-left">
                                        <span className="text-gray-700">{t('CONTENT')}</span>
                                        <textarea name="description" value={inputValues.description} onChange={onChange}
                                                  className="form-textarea mt-1 block w-full border border-gray-300 p-2"
                                                  rows="3" placeholder={t('WRITE CONTENT')}/>
                                    </label>
                                </div>

                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {t('CLOSE')}
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        {t('SAVE')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
                </div>)}
        </>
    )
}

export default ModalForm;