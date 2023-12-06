import React from 'react'

function Button({ type, name }) {
    const styledComponent = {
        width: "100%"
    }
  return (
      <div style={styledComponent}>
          <button type={type}>{name}</button>
    </div>
  )
}

export default Button