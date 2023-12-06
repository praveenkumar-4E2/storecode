import React from 'react'
import LoginForm from '../compoenents/auth/LoginForm'
import { Link,useNavigate } from 'react-router-dom'
import SocialMediaLinks from '../compoenents/auth/SocialMediaLinks'
import arrow from '../Assests/arrow.png'
const LoginPage = () => {

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
          <h1>Welcome back! Glad to see you, Again!</h1>
        </span>

        <LoginForm />
        <SocialMediaLinks text="Or Login with" />
        
      </div>
      <div>
      <p>Don't have an Account? <Link to="/" className='link-color'>Register Now</Link></p>
      </div>


    </div>

  )
}

export default LoginPage