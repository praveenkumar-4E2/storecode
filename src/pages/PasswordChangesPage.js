import React from 'react'
import approval from '../Assests/Approval.png'
import arrow from '../Assests/arrow.png'
import {useNavigate , Link} from 'react-router-dom'
const PasswordChangesPage = () => {
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
                <img src={approval} alt='approve' />
                <span className='text-gradient'>
                    <h1>Password Chaged!</h1>
                </span>
                <span className='text-wrap'>

                    <p>
                        Your password has been changed successfully.
                    </p>
                </span>
                <button> <Link to="/login">Back to Login</Link>
                    </button>

            </div>
        </div>

    )
}

export default PasswordChangesPage