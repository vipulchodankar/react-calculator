import React, { Component } from 'react'
import './Buttons.scss'

class Buttons extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const buttons = [
            {
                id: "clear",
                text: "C",
                type: "clear"
            },
            {
                id: "empty1",
                text: " ",
                type: "empty"
            },
            {
                id: "empty2",
                text: " ",
                type: "empty"
            },
            {
                id: "divide",
                text: "/",
                type: "operator"
            },
            {
                id: "seven",
                text: "7",
                type: "number"
            },
            {
                id: "eight",
                text: "8",
                type: "number"
            },
            {
                id: "nine",
                text: "9",
                type: "number"
            },
            {
                id: "multiply",
                text: "*",
                type: "operator"
            },
            {
                id: "four",
                text: "4",
                type: "number"
            },
            {
                id: "five",
                text: "5",
                type: "number"
            },
            {
                id: "six",
                text: "6",
                type: "number"
            },
            {
                id: "add",
                text: "+",
                type: "operator"
            },
            {
                id: "one",
                text: "1",
                type: "number"
            },
            {
                id: "two",
                text: "2",
                type: "number"
            },
            {
                id: "three",
                text: "3",
                type: "number"
            },
            {
                id: "subtract",
                text: "-",
                type: "operator"
            },
            {
                id: "empty3",
                text: " ",
                type: "empty"
            },
            {
                id: "zero",
                text: "0",
                type: "number"
            },
            {
                id: "decimal",
                text: ".",
                type: "number"
            },
            {
                id: "equals",
                text: "=",
                type: "operator"
            }
        ];

        return (
            <div className="buttons-container"> { buttons.map((button) => ( <button key={button.id} id={button.id} type={button.type}>{button.text}</button> )) } </div>
        )
    }
}

export default Buttons;