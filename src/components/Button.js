import React from 'react'
import './Button.scss'

const Button = props => (
    <button id={props.name} onClick={() => props.handleClick(props.children)}>
        { props.children }
    </button>
)

export default Button;