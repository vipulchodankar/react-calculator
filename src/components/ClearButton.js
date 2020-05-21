import React from 'react'
import './Button.scss'

const ClearButton = props => (
    <button onClick={props.handleClear}  className="clear-button">
        { props.children }
    </button>
);

export default ClearButton;