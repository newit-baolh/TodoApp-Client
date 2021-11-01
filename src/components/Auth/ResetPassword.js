import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthServices from '../../services/auth.service'

function ResetPassword() {
  const [input, setInput] = useState({ password: '' })
  const [message, setMessage] = useState(false)
  const onChange = (e) => {
    const { value } = e.target
    setInput({ ...input, password: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    AuthServices.resetPassword(input)
    setMessage(true)
    setInput({ ...input, password: '' })
  }
  console.log(input)
  return (
    <div className='flex text-left justify-center'>
      <div>
        <h1 className='text-2xl'>Reset Password</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
          <label>Nhập password mới</label>
          <br />
          <input
            name='password'
            onChange={onChange}
            type='password'
            placeholder='Nhập password mới'
            className='border border-3 px-2 w-ful mt-2 mb-2'
            value={input.password}
          />
          <br />
          {message && (
            <div className='text-red-500'>Tạo mật khẩu mới thành công</div>
          )}
          <button type='submit' className='bg-green-200 px-5 py-1 mt-4'>
            Reset
          </button>
        </form>
        <Link to='/login' className='text-blue-500'>
          Đi đến đăng nhập
        </Link>
      </div>
    </div>
  )
}

export default ResetPassword
