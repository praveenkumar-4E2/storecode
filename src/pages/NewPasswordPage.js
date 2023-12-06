import React from 'react'
import NewPasswordForm from '../compoenents/auth/NewPasswordForm'
import arrow from '../Assests/arrow.png'
import {useNavigate} from 'react-router-dom'
const NewPasswordPage = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <div className='container'>

            <div className='page-width'>
                <div className='arrow'>
                    <img src={arrow} alt='back' onClick={goBack} />
                </div>
                <span className='text-gradient'>
                    <h1>Create new password!</h1>
                </span>
                <span className='text-wrap'>

                    <p>
                        Your new password must be unique from those previously used with min 8 letters
                    </p>
                </span>

                <NewPasswordForm />


            </div>
        </div>

    )
}

export default NewPasswordPage