import React from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'
const ForgotPassword = () => {
    return (
        <div>
            <form>
                <InputField
                    type="email"
                    placeholder="Enter your email"
                />
                <Button type="submit" name="Send Code" />
            </form>
        </div>
    )
}

export default ForgotPassword