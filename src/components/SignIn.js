import React, {Component} from 'react';
import { Button, Snackbar, SnackbarContent } from '@material-ui/core';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: '',
            fillInAllFieldsSnackbar: false,
            loadingSnackbar: false,
            errorLoggingInSnackbar: false,
            couldntFindUserSnackbar: false,
            badEmailSnackbar: false,
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

    closeBadEmailSnackbar = () => {
        this.setState({badEmailSnackbar: false})
    }

    closeCouldntFindUserSnackbar = () => {
        this.setState({couldntFindUserSnackbar: false})
    }
    
    closeErrorLoggingInSnackbar = () => {
        this.setState({errorLoggingInSnackbar: false})
    }

    closeFillInAllFieldsSnackbar = () => {
        this.setState({fillInAllFieldsSnackbar: false})
    }

    emailChange = (e) => {
        this.setState({signInEmail: e.target.value})
    }

    passwordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSubmitSignIn = () => {
        if (this.state.signInEmail === '' || this.state.signInPassword === '') {
            this.setState({fillInAllFieldsSnackbar: true})
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.signInEmail) === false) {
            this.setState({badEmailSnackbar: true})
        } else {
            this.setState({loadingSnackbar: true})
            fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.toMenu()
                    this.props.loadUser(user)
                    this.props.handleSignInState()
                    this.setState({loadingSnackbar: false})
                } else {
                    this.setState({loadingSnackbar: false})
                    this.setState({couldntFindUserSnackbar: true})
                }
            })
            .catch(error => {
                this.setState({loadingSnackbar: false})
                this.setState({errorLoggingInSnackbar: true})
            })
        }
    }

    render() {
        return (
            <div className="signinbox">
                <div className='signinContent'>
                    <div className="inputdiv">
                        <input onChange={this.emailChange} placeholder='E-Mail' className='emailnpass'/>
                    </div>
                    <div className="inputdiv">
                        <input type="password" onChange={this.passwordChange} placeholder='Password' className='emailnpass'/>
                    </div>
                    <button onClick={this.onSubmitSignIn}>Sign In</button>
                    <button onClick={this.props.toMenu}>Continue as Guest</button>
                    <button onClick={this.props.openRegisterDialog}>Register Now</button>
                    {this.returnSnackbar(this.state.fillInAllFieldsSnackbar, 'Sign in failed. Fill in all the fields.', this.closeFillInAllFieldsSnackbar)}
                    {this.returnSnackbar(this.state.badEmailSnackbar, 'Sign in failed. Please use a proper email.', this.closeBadEmailSnackbar)}
                    {this.returnSnackbar(this.state.couldntFindUserSnackbar, 'Incorrect e-mail or password. Try again.', this.closeCouldntFindUserSnackbar)}
                    {this.returnSnackbar(this.state.errorLoggingInSnackbar, 'Error signing in, try again please.', this.closeErrorLoggingInSnackbar)}
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
                            message='Signing you in...'
                            />
                        </Snackbar>
                </div>
            </div>
        )
    }
}

export default SignIn;