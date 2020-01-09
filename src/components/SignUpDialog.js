import React from 'react' 
import { Button, Snackbar, SnackbarContent } from '@material-ui/core';

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            fillInAllFieldsSnackbar: false,
            loadingSnackbar: false,
            badEmailSnackbar: false,
            emailAlreadyRegisteredSnackbar: false,
        }
    }
    
    returnSnackbar = (openContent, message, closeContent) => {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openContent}                    
                >
                    <SnackbarContent 
                    style={{
                        backgroundColor: 'darkred',
                    }}
                    message={message}
                    action={
                        <Button key='undo' color="inherit" size='small' onClick={closeContent}>
                            CLOSE X
                        </Button>
                    } 
                    />
            </Snackbar>
        )
    }

    closeEmailAlreadyRegisteredSnackbar = () => {
        this.setState({emailAlreadyRegisteredSnackbar: false})
    }

    closeBadEmailSnackbar = () => {
        this.setState({badEmailSnackbar: false})
    }

    closeFillInAllFieldsSnackbar = () => {
        this.setState({fillInAllFieldsSnackbar: false})
    }

    onNameChange = (e) => {
        this.setState({signUpName: e.target.value})
    }

    onEmailChange = (e) => {
        this.setState({signUpEmail: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({signUpPassword: e.target.value})
    }

    onSignUp = () => {
        if (this.state.signUpEmail.length === '' || this.state.signUpName.length === '' || this.state.signUpPassword === '') {
            this.setState({fillInAllFieldsSnackbar: true})
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.signUpEmail) === false) {
            this.setState({badEmailSnackbar: true})
        } else {
            this.setState({loadingSnackbar: true})
            fetch('https://young-dusk-54635.herokuapp.com/signup', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.signUpName,
                    email: this.state.signUpEmail,
                    password: this.state.signUpPassword
                })
            })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.signUpButton()
                    this.setState({loadingSnackbar: false})
                    this.setState({signUpName: ''})
                    this.setState({signUpEmail: ''})
                    this.setState({signUpPassword: ''})
                } else {
                    this.setState({loadingSnackbar: false})
                    this.setState({emailAlreadyRegisteredSnackbar: true})
                }
            })
        }
    }

    render() {
        return (
            <div className='signupdialog' style={{display: this.props.showSignUpDialog === true ? 'grid' : 'none'}}>
                <div className="signupdialogcenter">
                    <div className="signupdialogcontainer">
                        <h1>Sign up for MathPractice!</h1>
                        <div className="inputdiv">
                            <input onChange={this.onNameChange} value={this.state.signUpName} placeholder='Name' className='emailnpass'/>
                        </div>
                        <div className="inputdiv">
                            <input onChange={this.onEmailChange} value={this.state.signUpEmail} placeholder='E-Mail' className='emailnpass'/>
                        </div>
                        <div className="inputdiv">
                            <input type="password" onChange={this.onPasswordChange} value={this.state.signUpPassword} placeholder='Password' className='emailnpass'/>
                        </div>
                        <p className='haveaccounttext' onClick={this.props.handleHaveAccountClick}>Already have an account? Sign in!</p>
                        <button onClick={this.onSignUp}>Sign up!</button>
                        {this.returnSnackbar(this.state.emailAlreadyRegisteredSnackbar, 'Register failed. This e-mail is already used!', this.closeEmailAlreadyRegisteredSnackbar)}
                        {this.returnSnackbar(this.state.fillInAllFieldsSnackbar, 'Register failed. Fill in all the fields!', this.closeFillInAllFieldsSnackbar)}
                        {this.returnSnackbar(this.state.badEmailSnackbar, 'Sign in failed. Please use a proper email.', this.closeBadEmailSnackbar)}
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.loadingSnackbar}             
                        >
                            <SnackbarContent
                            style={{
                                backgroundColor: 'teal'
                            }}
                            message='Signing you up...'
                            />
                        </Snackbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpDialog;