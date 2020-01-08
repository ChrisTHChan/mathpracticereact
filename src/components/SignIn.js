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
                console.log(error)
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
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.fillInAllFieldsSnackbar}                    
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred',
                            }}
                            message='Sign in failed. Fill in all the fields.'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeFillInAllFieldsSnackbar}>
                                    CLOSE X
                                </Button>
                            } 
                            />
                    </Snackbar>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.badEmailSnackbar}                    
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred',
                            }}
                            message='Sign in failed. Please use a proper email.'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeBadEmailSnackbar}>
                                    CLOSE X
                                </Button>
                            } 
                            />
                    </Snackbar>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.couldntFindUserSnackbar}                    
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred',
                            }}
                            message='Incorrect e-mail or password. Try again.'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeCouldntFindUserSnackbar}>
                                    CLOSE X
                                </Button>
                            } 
                            />
                    </Snackbar>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.errorLoggingInSnackbar}                    
                        >
                            <SnackbarContent 
                            style={{
                                backgroundColor: 'darkred',
                            }}
                            message='Error signing in, try again please.'
                            action={
                                <Button key='undo' color="inherit" size='small' onClick={this.closeErrorLoggingInSnackbar}>
                                    CLOSE X
                                </Button>
                            } 
                            />
                    </Snackbar>
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