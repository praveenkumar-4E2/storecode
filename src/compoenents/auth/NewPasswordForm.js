import React from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
import './OTPverification.css'

const NewPasswordForm = () => {
    return (
        <div>

            <form>
                <InputField
                    type="password"
                    placeholder="New Password"
                />
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                />
                <Button type="submit" name="Reset Password" />
            </form>
        </div>
    )
}

export default NewPasswordForm