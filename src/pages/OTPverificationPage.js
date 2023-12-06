import React from 'react'
import OTPverificationForm from '../compoenents/auth/OTPverificationForm'
import arrow from '../Assests/arrow.png'
import {useNavigate} from 'react-router-dom'

const OTPverificationPage = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <div className='container'>
            <div className='page-width'>
                <div className='arrow'>
                    <img src={arrow} alt='back' onClick={goBack}/>
                </div>
                <span className='text-gradient'>
                    <h1>OTP Verification</h1>
                </span>
                <span className='text-wrap'>

                    <p>
                        Enter the verification code we just sent on your email address.
                    </p>
                </span>
                <OTPverificationForm />
            </div>
        </div>

    )
}

export default OTPverificationPage