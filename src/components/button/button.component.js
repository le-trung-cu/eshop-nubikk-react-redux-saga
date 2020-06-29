import React from 'react'
import './button.styles.scss'

const Button = ({ children, className }) => {
    return (
        <button className={`btn ${className}`}>
            {children}
        </button>
    )
}

export default Button
