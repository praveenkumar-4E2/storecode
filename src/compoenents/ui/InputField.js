import React from 'react'

function InputField({ type, placeholder, value }) {
  
  
  return (
      <div className='input-container gradient-border'>
          <input
              type={type}
              placeholder={placeholder}
              value={value}
          />
          
    </div>
  )
}

export default InputField