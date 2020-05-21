import React from 'react'
import './Button.scss'

// const isOperator = value => {
//     return !isNaN(value) || value === "." || value === "="
// }

const Button = props => (
    <button onClick={() => props.handleClick(props.children)}>
        { props.children }
    </button>
)

export default Button;