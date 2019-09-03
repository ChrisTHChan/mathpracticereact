import React from 'react';

const QuitButton = ({quitFunction}) => {
    return (
        <button onClick={quitFunction} className='quitButton'>Quit, Back to Menu</button>
    )
}

export default QuitButton;