import React from 'react';

const SubmitButton = ({submitAnswer}) => {
    return (
        <div>
            <button onClick={submitAnswer}>Submit Answer</button>
        </div>
    )
}

export default SubmitButton;