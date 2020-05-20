import React, { Component } from 'react'
import './Display.scss'

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="display-container">
                <div id="history">5+</div>
                <div id="display">+</div>
            </div>
        )
    }
};

export default Display;