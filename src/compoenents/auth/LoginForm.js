import React from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import './LoginForm.css'
import {Link} from 'react-router-dom'
function LoginForm() {
  return (
    <div className='login-from'>

      <form >
        <InputField
          type="text"
          placeholder="Enter your email id"
        />

        <InputField
          type="password"
          placeholder="Enter your password"
        />
        <span className='text-right'>
        <Link to="/password/reset" className='link-color'>Forgot Password?</Link>
        </span>
      

        <Button type="submit" name="Login" />
      </form>
    </div>
  )
}

export default LoginForm