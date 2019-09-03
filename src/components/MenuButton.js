import React from 'react';

const MenuButton = (props) => {
    return (
        <button onClick={props.startGame} className='MenuButton'>{props.label}</button>
    )
}

export default MenuButton;