import React, { useState } from 'react'
import AuthServices from '../../services/auth.service'

function ForgotPassword() {
  const [input, setInput] = useState({ email: '' })
  const [message, setMessage] = useState(false)
  const onChange = (e) => {
    const { value } = e.target
    setInput({ ...input, email: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    AuthServices.forgotPassword(input)
    setMessage(true)
    setInput({ ...input, email: '' })
  }
  return (
    <div className='flex text-left justify-center'>
      <div>
        <h1 className='text-2xl'>Forgot Password</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
          <label>Nhập địa chỉ email</label>
          <br />
          <input
            name='email'
            onChange={onChange}
            type='email'
            placeholder='Nhập địa chỉ email cần lấy lại mật khẩu'
            className='border border-3 px-2 w-ful mt-2 mb-2'
            value={input.email}
          />
          <br />
          {message && (
            <div className='text-red-500'>
              Gửi link xác nhận tới email thành công
            </div>
          )}
          <button type='submit' className='bg-green-200 px-5 py-1 mt-4'>
            Gửi
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
