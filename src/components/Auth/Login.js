import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import AuthServices from '../../services/auth.service'
import isEmail from 'validator/es/lib/isEmail'

const required = (value) => {
  if (!value) {
    return (
      <div className='text-xs tracking-wide text-red-600'>
        Thông tin không được để trống
      </div>
    )
  }
}
const checkEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='text-xs tracking-wide text-red-600'>
        Sai định dạng email
      </div>
    )
  }
}
const minLength = (value) => {
  if (value.trim().length < 4) {
    return (
      <small className='text-xs tracking-wide text-red-600'>
        Mật khẩu phải có ít nhất 4 ký tự
      </small>
    )
  }
}

Login.propTypes = {}

function Login(props) {
  const formRef = useRef()
  const checkBtn = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleLogin = (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    formRef.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthServices.login(email, password).then(
        () => {
          props.history.push('/home')
          window.location.reload()
        },
        (err) => {
          const resMessage =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString()

          setLoading(false)
          setMessage(resMessage)
        }
      )
    } else {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 '>
      <div className='px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/4'>
        <h3 className='text-2xl font-bold text-center'>Đăng nhập</h3>
        <Form action='' onSubmit={handleLogin} ref={formRef}>
          <div className='mt-4'>
            <div>
              <label className='block' htmlFor='email'>
                Email
              </label>
              <Input
                type='text'
                placeholder='Email'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                onChange={onChangeEmail}
                name='email'
                value={email}
                validations={[required, checkEmail]}
              />
            </div>
            <div className='mt-4'>
              <label className='block'>Mật khẩu</label>
              <Input
                type='password'
                placeholder='Mật khẩu'
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                onChange={onChangePassword}
                name='password'
                value={password}
                validations={[required, minLength]}
              />
            </div>
            <div className='flex justify-between items-center mt-4 mb-2'>
              <button
                className='px-7 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 w-full'
                disabled={loading}
              >
                {loading && (
                  <svg
                    className=' animate-spin h-5 w-5 inline-block mr-3 text-white'
                    fill='none'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 50 50'
                  >
                    <path d='M 25.394531 2.0605469 C 20.64091 1.9695865 15.987252 3.3611197 12.138672 5.9726562 C 8.2784778 8.5815405 5.1347795 12.355546 3.3613281 17.154297 L 5.2382812 17.845703 C 6.864483 13.445393 9.7209952 10.019967 13.259766 7.6289062 A 1.0001 1.0001 0 0 0 13.261719 7.6269531 C 18.597216 4.0064374 25.663997 2.9517511 32.154297 5.3378906 C 35.782713 6.6746757 38.735033 8.8643601 41.033203 11.542969 C 42.943053 13.835385 44.277409 16.403211 45.142578 19.287109 L 47.058594 18.712891 C 46.123983 15.597675 44.657565 12.766813 42.568359 10.259766 A 1.0001 1.0001 0 0 0 42.558594 10.25 C 40.057785 7.3323897 36.813537 4.922771 32.845703 3.4609375 C 31.068278 2.8074724 29.25189 2.3894124 27.435547 2.1914062 C 26.754418 2.117154 26.07362 2.0735412 25.394531 2.0605469 z'></path>
                  </svg>
                )}
                Đăng nhập
              </button>
            </div>
            <Link
              to={'/forgotPassword'}
              className='text-sm text-blue-600 hover:underline'
            >
              Quên mật khẩu?
            </Link>
            <div className='text-sm block'>
              Tạo tài khoản mới tại đây 👉
              <Link className='text-blue-500 underline' to={'/signup'}>
                Đăng ký
              </Link>
            </div>
            {message && (
              <div className='text-red-500 px-2 py-2 mt-5' role='alert'>
                <div className='flex text-center'>
                  <div className='py-1'>
                    <svg
                      className='fill-current h-5 w-5 text-teal-500 mr-3'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-italic'>{message}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  )
}

export default Login
