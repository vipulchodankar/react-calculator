import React from 'react'
import './Display.scss'

const Display = props => (
    <div id="display-container">
        <div id="history"> {props.history} </div>
        <div id="display"> {props.currentOperation} </div>
    </div>
);

export default Display;