import React from 'react'
import './Display.scss'

const Display = props => (
    <div id="display-container">
        <div id="display"> {props.input == ""?0:props.input} </div>
    </div>
);

export default Display;