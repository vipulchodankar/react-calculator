import React from 'react'
import './Button.scss'

const ClearButton = props => (
    <button id={props.name} onClick={props.handleClear}  className="clear-button">
        { props.children }
    </button>
);

export default ClearButton;