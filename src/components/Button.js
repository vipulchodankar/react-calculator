import React from 'react'
import './Button.scss'

const isOperator = value => {
    return !isNaN(value) || value === "." || value === "="
}

const Button = props => (
    <button>
        { props.children }
    </button>
)

export default Button;