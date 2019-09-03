import React from 'react';

const Question = (props) => {
    if (props.num1 > props.num2 || props.num1 === props.num2) {
        return (
            <div>
                <p>What is {props.num1} {props.sign} {props.num2}? {props.note}</p>
            </div>
        )
    } else if (props.num1 < props.num2) {
        return (
            <div>
                <p>What is {props.num2} {props.sign} {props.num1}? {props.note}</p>
            </div>
        )
    }
}

export default Question;