import React from 'react'
import Button from '../ui/Button'
import './OTPverification.css';
const OTPverificationForm = () => {
    return (
        <div>
            <form >
                <div className='opt-fields'>
                    <span className='gradient-border'>
                        <input type='text' />
                    </span>

                    <span className='gradient-border'>
                        <input type='text' />
                    </span>

                    <span className='gradient-border'>
                        <input type='text' />
                    </span>

                    <span className='gradient-border'>
                        <input type='text' />
                    </span>
                </div>
                <Button type="submit" name="Verify" />


            </form>

        </div>
    )
}

export default OTPverificationForm