import React from 'react'
import  './SocialMediaLinks.css'
import fb from '../../Assests/facebook_ic.png'
import apple from '../../Assests/cib_apple.png'
import google from '../../Assests/google_ic.png'
const SocialMediaLinks = ({text}) => {
  return (
    <div className='links'>
      <div className='lines'>

        <div className='line line1'></div>
        <span>{text}</span>
        <div className='line line2'></div>
      </div>
          
      <div className='social-icons'>
        <div className='link gradient-border'><img src={fb} alt='fb' /></div>
        <div className='link gradient-border' ><img src={ google} alt='gg' /></div>
        <div className='link gradient-border'><img src={apple} alt='apple'/></div>
              
        </div>

    </div>
  )
}

export default SocialMediaLinks