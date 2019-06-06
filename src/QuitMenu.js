import React from 'react' 

const QuitMenu = (props) => {
    return (
        <div className='promptScreen' style={{display: props.showQuitting === true ? 'grid' : 'none'}}>
            <div className="promptScreenCenter">
                <h3>Are you sure you want to quit?</h3>
                <h3>Your score will not be saved.</h3><br/>
                <button onClick={props.onQuitFunction2}>Yes, I'm Done.</button>
                <button onClick={props.onNoQuitFunction}>No, I'm Not Done Yet.</button>
            </div>
        </div>
    )
}

export default QuitMenu;