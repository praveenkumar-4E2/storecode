import React from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import './RegisterationForm.css'

function RegisterationForm() {
  return (
    <div className='registeration-form'>

      <form>
        <InputField
          type="text"
          placeholder="Name"
        />
        <InputField
          type="email"
          placeholder="Email Id"
        />
        <InputField
          type="text"
          placeholder="Contact"
        />
        <InputField
          type="password"
          placeholder="Password"
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
        />
        <InputField
          type="text"
          placeholder="select"
        />




        <Button type="submit" name="Register" />
      </form>

    </div>
  )
}

export default RegisterationForm