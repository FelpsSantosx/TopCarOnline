import React from "react"

const Button = ({ onClick, children, className = '', color = 'bg-secondv', ...props }) => {
    return (
        <button onClick={onClick} className={`${color} font-montserrat text-h3 rounded-lg 
        text-primary hover:text-second hover:bg-primary p-3 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button