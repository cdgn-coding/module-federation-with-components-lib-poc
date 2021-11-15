import React from 'react'
const Button = ({ text, color = 'greenyellow' }) => {
  return (
    <button style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:color,
        border:"none"
      }}>
        {text}
    </button>
  )
}

export default Button;