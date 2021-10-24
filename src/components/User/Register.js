import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthServices from '../../services/auth.service'
import isEmail from "validator/es/lib/isEmail";
import Header from "../Header/Header";

const required = (value) => {
    if (!value) {
        return (
            <div className="text-xs tracking-wide text-red-600 mb-2">Thông tin không được để trống</div>
        )
    }
}

const checkUsername = (value) => {
    if (value.length < 3 || value.length > 15) {
        return (
            <div className="text-xs tracking-wide text-red-600">Tên người dùng phải lớn hơn 3 và nhỏ hơn 15 ký tự</div>
        )
    }
}

const checkEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="text-xs tracking-wide text-red-600">Sai định dạng email</div>
        )
    }
}
const minLength = (value) => {
    if (value.trim().length < 4 || value.trim().length > 15) {
        return <small className="text-xs tracking-wide text-red-600">Mật khẩu phải có ít nhất 4 ký tự và nhiều nhất 15
            ký tự</small>;
    }
}

function Register(props) {

    const formRef = useRef()
    const checkBtn = useRef()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [message, setMessage] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        formRef.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthServices.register(username, email, password).then(
                (response) => {
                    setTimeout(()=>{
                        window.location.href = "/login"
                    },2000)
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    console.log(error)
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    console.log(message)


    return (
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <Form ref={formRef} onSubmit={handleRegister}
                          className="bg-white rounded shadow-md text-black w-full">
                        {!successful && (
                            <div className="px-4 py-4">
                                <h1 className="mb-8 text-3xl text-center font-bold ">Đăng ký</h1>

                                <div className="mt-4 text-md"><label className="block">Tên đăng nhập</label>
                                    <Input
                                        onChange={onChangeUsername}
                                        type="text"
                                        className="block border border-gray-300 w-full p-3 rounded  mt-1"
                                        name="username"
                                        value={username}
                                        validations={[required, checkUsername]}
                                        placeholder="Tên đăng nhập"/></div>

                                <div className="mt-4"><label className="block">Email</label>
                                    <Input
                                        onChange={onChangeEmail}
                                        type="text"
                                        className="block border border-gray-300 w-full p-3 rounded  mt-1"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        validations={[required, checkEmail]}
                                    /></div>

                                <div className="mt-4"><label className="block">Mật khẩu</label>
                                    <Input
                                        onChange={onChangePassword}
                                        type="password"
                                        className="block border border-gray-300 w-full p-3 rounded mt-1"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        validations={[required, minLength]}
                                    /></div>

                                <button
                                    type="submit"
                                    className="w-full text-center mt-4 py-3 rounded bg-blue-400 text-white hover:bg-blue-500 focus:outline-none my-1"
                                >Tạo tài khoản
                                </button>

                                <div className="text-center text-sm text-grey-dark mt-4">
                                    Bằng cách đăng kí, bạn xác nhận bạn đã đọc và chấp nhận&nbsp;
                                    <Link className="underline border-b border-grey-dark text-blue-500" to={"#"}>
                                        điều khoản dịch vụ
                                    </Link> và&nbsp;
                                    <Link className="underline border-b border-grey-dark text-blue-500" to={"#"}>
                                        chính sách riêng tư
                                    </Link>
                                    &nbsp;của chúng tôi.
                                </div>
                                <div className="text-grey-dark mt-6 flex justify-center text-sm">
                                    Bạn đã có tài khoản?&nbsp;
                                    <Link className="underline border-b border-blue text-blue-400" to={"/login"}>
                                        Đăng nhập
                                    </Link>.
                                </div>
                            </div>
                        )}
                        {message && (message === 'Có lỗi! Tên người dùng sớm đã được sử dụng!'
                                ? <div
                                    className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-500 px-4 py-3 shadow-md"
                                    role="alert">
                                    <div className="flex justify-start text-center">
                                        <div className="py-1">
                                            <svg className="fill-current h-5 w-5 text-teal-500 mr-4"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-italic">{message}</p>
                                        </div>
                                    </div>
                                </div>
                                : <div
                                    className="bg-green-100 border-t-4 border-green-500 rounded-b text-green-500 px-4 py-3 shadow-md"
                                    role="alert">
                                    <div className="flex justify-start text-center">
                                        <div className="py-1">
                                            <svg className="fill-current h-5 w-5 text-teal-500 mr-4"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-italic">{message}</p>
                                        </div>
                                    </div>
                                </div>

                        )}
                        <CheckButton style={{display: "none"}} ref={checkBtn}/>
                    </Form>


                </div>
            </div>
    );
}

export default Register;