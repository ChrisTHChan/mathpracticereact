import React from 'react';

const SignIn = ({toMenu}) => {
    return (
        <div className="signinbox">
            <div className='signinContent'>
                <div className="inputdiv">
                    <input placeholder='E-Mail' className='emailnpass'/>
                </div>
                <div className="inputdiv">
                    <input placeholder='Password' className='emailnpass'/>
                </div>
                <button>Log In</button>
                <button onClick={toMenu}>Continue as Guest</button>
                <button>Register Now</button>
            </div>
        </div>
    )
}

export default SignIn;