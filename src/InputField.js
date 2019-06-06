import React from 'react';

const InputField = ({inputChange, enterPress}) => {
    return (
        <div>
            <input autoFocus type="text" onChange={inputChange} onKeyPress={enterPress}/>
        </div>
    )
}

export default InputField;