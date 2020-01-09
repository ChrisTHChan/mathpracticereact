import React, {Component} from 'react';
import './stylesheets/App.css';
import Question from './components/Question';
import InputField from './components/InputField';
import NextButton from './components/NextButton';
import MenuButton from './components/MenuButton';
import QuitButton from './components/QuitButton';
import Particles from 'react-particles-js';
import WrongAnswerTip from './components/WrongAnswerTip';
import QuitMenu from './components/QuitMenu'
import SignIn from './components/SignIn'
import logo from './assets/logo.png'
import StatsDialog from './components/StatsDialog'
import SignUpDialog from './components/SignUpDialog'

const particlesOptions = {
  particles: {
    number: {
      value: 60
    },
    line_linked: {
      shadow: {
        enable: true,
        color: 'black',
        blur: 5,
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      appState: 'signin',
      showQuitting: false,
      digitState: 0,
      topicState: null,
      divisionState: {
        two: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        three: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        four: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
        five: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        six: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72],
        seven: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84],
        eight: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
        nine: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108],
        ten: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        eleven: [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132],
        twelve: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144],
      },
      num1: 0,
      num2: 0,
      note: '',
      questionAnswer: 0,
      userAnswer: 0,
      answerCorrect: null,
      questionsCorrect: 0,
      questionsIncorrect: 0,
      showStats: false,
      showSignUpDialog: false,
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        totalQuestionsAnswered: 0,
        totalQuestionsCorrect: 0,
        totalQuestionsIncorrect: 0,
      }
    }
  }
  
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      totalQuestionsAnswered: data.questionsanswered,
      totalQuestionsCorrect: data.questionscorrect,
      totalQuestionsIncorrect: data.questionsincorrect,
    }})
  }

  openRegisterDialog = () => {
    this.setState({showSignUpDialog: true})
  }

  handleSignUp = () => {
    this.setState({showSignUpDialog: false})
  }

  handleCloseStats = () => {
    this.setState({showStats: false})
  }

  handleStatsTabClick = () => {
    this.setState({showStats: true})
  }

  handleSignInState = () => {
    this.setState({isSignedIn: true})
  }

  handleSignOut = () => {
    this.setState({appState: 'signin'})
    this.setState({isSignedIn: false})
    this.setState({user: {
      id: '',
      name: '',
      email: '',
      totalQuestionsAnswered: 0,
      totalQuestionsCorrect: 0,
      totalQuestionsIncorrect: 0,
    }})
  }
  
  initNumDigit = (digit) => {
    if (digit === 1) {
      this.setState({num1: this.getRandomNumber(1, 10)})
      this.setState({num2: this.getRandomNumber(1, 10)})
    } else if (digit === 2) {
      this.setState({num1: this.getRandomNumber(10, 100)})
      this.setState({num2: this.getRandomNumber(10, 100)})
    } else if (digit === 3) {
      this.setState({num1: this.getRandomNumber(100, 1000)})
      this.setState({num2: this.getRandomNumber(100, 1000)})
    } else if (digit === 4) {
      this.setState({num1: this.getRandomNumber(1000, 10000)})
      this.setState({num2: this.getRandomNumber(1000, 10000)})
    }
  }

  initAddGame = (digit) => {
    this.setState({appState: 'active'})
    this.initNumDigit(digit)
    this.setState({topicState: '+'})
  }

  onStartGame1add = () => {
    this.initAddGame(1)
    this.setState({digitState: 1})
  }

  onStartGame2add = () => {
    this.initAddGame(2)
    this.setState({digitState: 2})
  }

  onStartGame3add = () => {
    this.initAddGame(3)
    this.setState({digitState: 3})
  }

  onStartGame4add = () => {
    this.initAddGame(4)
    this.setState({digitState: 4})
  }
  
  initMultGame = (digit) => {
    this.setState({appState: 'active'})
    this.initNumDigit(digit)
    this.setState({topicState: '*'})
  }

  onStartGame1mult = () => {
    this.initMultGame(1)
    this.setState({digitState: 1})
  }

  onStartGame2mult = () => {
    this.initMultGame(2)
    this.setState({digitState: 2})
  }

  onStartGame3mult = () => {
    this.initMultGame(3)
    this.setState({digitState: 3})
  }

  onStartGame4mult = () => {
    this.initMultGame(4)
    this.setState({digitState: 4})
  }

  initSubGame = (digit) => {
    this.setState({appState: 'active'})
    this.initNumDigit(digit)
    this.setState({topicState: '-'})
  }

  onStartGame1sub = () => {
    this.initSubGame(1)
    this.setState({digitState: 1})
  }

  onStartGame2sub = () => {
    this.initSubGame(2)
    this.setState({digitState: 2})
  }

  onStartGame3sub = () => {
    this.initSubGame(3)
    this.setState({digitState: 3})
  }

  onStartGame4sub = () => {
    this.initSubGame(4)
    this.setState({digitState: 4})
  }

  initDivGame = () => {
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({note: '(ignore remainders)'})
  }

  onStartGame1div = () => {
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({digitState: 'df'})
    this.setState({num2: this.getRandomNumber(2, 12)}, () => {
      if (this.state.num2 === 2) {
        this.setState({num1: this.state.divisionState.two[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 3) {
        this.setState({num1: this.state.divisionState.three[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 4) {
        this.setState({num1: this.state.divisionState.four[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 5) {
        this.setState({num1: this.state.divisionState.five[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 6) {
        this.setState({num1: this.state.divisionState.six[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 7) {
        this.setState({num1: this.state.divisionState.seven[this.getRandomNumber(0,11)]})
      }  else if (this.state.num2 === 8) {
        this.setState({num1: this.state.divisionState.eight[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 9) {
        this.setState({num1: this.state.divisionState.nine[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 10) {
        this.setState({num1: this.state.divisionState.ten[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 11) {
        this.setState({num1: this.state.divisionState.eleven[this.getRandomNumber(0,11)]})
      } else if (this.state.num2 === 12) {
        this.setState({num1: this.state.divisionState.twelve[this.getRandomNumber(0,11)]})
      }
    })
  }

  onStartGame2div = () => {
    this.initDivGame()
    this.setState({digitState: '3d1'})
    this.setState({num1: this.getRandomNumber(100, 1000)})
    this.setState({num2: this.getRandomNumber(1, 10)})
  }

  onStartGame3div = () => {
    this.initDivGame()
    this.setState({digitState: '4d1'})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(1, 10)})
  }

  onStartGame4div = () => {
    this.initDivGame()
    this.setState({digitState: '4d2'})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(10, 100)})
  }
  
  handleScoreCount = (ansCorrectOrIncorrect) => {
    if (this.state.isSignedIn ===  true) {
      fetch('https://young-dusk-54635.herokuapp.com/updateStats', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id,
          answer: ansCorrectOrIncorrect
        })
      })
      .then(res => res.json())
      .then(() => {
        this.setState(Object.assign(this.state.user, {totalQuestionsAnswered: parseInt(this.state.user.totalQuestionsAnswered) + 1}))
        if (ansCorrectOrIncorrect === 'correct') {
          this.setState(Object.assign(this.state.user, {totalQuestionsCorrect: parseInt(this.state.user.totalQuestionsCorrect) + 1}))
        } else if (ansCorrectOrIncorrect === 'incorrect') {
          this.setState(Object.assign(this.state.user, {totalQuestionsIncorrect: parseInt(this.state.user.totalQuestionsIncorrect) + 1}))
        }
      })
    } else {
      return
    }
  }

  raiseCorrectCount = () => {
    this.setState({answerCorrect: "yes"})
    this.setState({questionsCorrect: this.state.questionsCorrect + 1})
    this.handleScoreCount('correct')
  }

  raiseIncorrectCount = () => {
    this.setState({answerCorrect: "no"})
    this.setState({questionsIncorrect: this.state.questionsIncorrect + 1})
    this.handleScoreCount('incorrect')
  }

  onSubmitAnswer = () => {
    if (this.state.topicState === '+') {
      this.setState({questionAnswer: this.state.num1 + this.state.num2})
    } else if (this.state.topicState === '*') {
      this.setState({questionAnswer: this.state.num1 * this.state.num2})
    } else if (this.state.topicState === '-') {
      this.setState({questionAnswer: Math.abs(this.state.num1 - this.state.num2)})
    } else if (this.state.topicState === '/') {
      this.setState({questionAnswer: Math.floor(this.state.num1 / this.state.num2)})
    }
    if (parseInt(this.state.userAnswer) === (this.state.num1 + this.state.num2) && this.state.topicState === '+') {
      this.raiseCorrectCount()
    } else if (parseInt(this.state.userAnswer) === (this.state.num1 * this.state.num2) && this.state.topicState === '*') {
      this.raiseCorrectCount()
    } else if (parseInt(this.state.userAnswer) === (Math.abs(this.state.num1 - this.state.num2)) && this.state.topicState === '-') {
      this.raiseCorrectCount()
    } else if (parseInt(this.state.userAnswer) === (Math.floor(this.state.num1 / this.state.num2)) && this.state.topicState === '/') {
      this.raiseCorrectCount()
    } else {
      this.raiseIncorrectCount()
    }
  };

  onNextQuestion = () => {
    //THIS FUNCTION IS FOR REINITIATING THE LOGIC FOR WHATEVER SPECIFIC QUESTION YOU WERE DOING
    this.setState({answerCorrect: null})
    if (this.state.digitState === 1) {
      this.setState({num1: this.getRandomNumber(1, 10)})
      this.setState({num2: this.getRandomNumber(1, 10)})
    } else if (this.state.digitState === 2) {
      this.setState({num1: this.getRandomNumber(10, 100)})
      this.setState({num2: this.getRandomNumber(10, 100)})
    } else if (this.state.digitState === 3) {
      this.setState({num1: this.getRandomNumber(100, 1000)})
      this.setState({num2: this.getRandomNumber(100, 1000)})
    } else if (this.state.digitState === 4) {
      this.setState({num1: this.getRandomNumber(1000, 10000)})
      this.setState({num2: this.getRandomNumber(1000, 10000)})
    } else if (this.state.digitState === 'df') {
      this.setState({num2: this.getRandomNumber(2, 12)}, () => {
        if (this.state.num2 === 2) {
          this.setState({num1: this.state.divisionState.two[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 3) {
          this.setState({num1: this.state.divisionState.three[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 4) {
          this.setState({num1: this.state.divisionState.four[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 5) {
          this.setState({num1: this.state.divisionState.five[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 6) {
          this.setState({num1: this.state.divisionState.six[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 7) {
          this.setState({num1: this.state.divisionState.seven[this.getRandomNumber(0,11)]})
        }  else if (this.state.num2 === 8) {
          this.setState({num1: this.state.divisionState.eight[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 9) {
          this.setState({num1: this.state.divisionState.nine[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 10) {
          this.setState({num1: this.state.divisionState.ten[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 11) {
          this.setState({num1: this.state.divisionState.eleven[this.getRandomNumber(0,11)]})
        } else if (this.state.num2 === 12) {
          this.setState({num1: this.state.divisionState.twelve[this.getRandomNumber(0,11)]})
        }
      })
    } else if (this.state.digitState === '3d1') {
      this.setState({num1: this.getRandomNumber(100, 1000)})
      this.setState({num2: this.getRandomNumber(1, 10)})
    } else if (this.state.digitState === '4d1') {
      this.setState({num1: this.getRandomNumber(1000, 10000)})
      this.setState({num2: this.getRandomNumber(1, 10)})
    } else if (this.state.digitState === '4d2') {
      this.setState({num1: this.getRandomNumber(1000, 10000)})
      this.setState({num2: this.getRandomNumber(10, 100)})
    }
  }

  onQuitFunction = () => {
    this.setState({showQuitting: true})
  }
  
  onNoQuitFunction = () => {
    this.setState({showQuitting: false})
  }

  onSignInFunction = () => {
    this.setState({showSignIn: true})
  }

  noSignInFunction = () => {
    this.setState({showSignIn: false})
  }

  toMenu = () => {
    this.setState({appState: 'menu'})
  }

  onQuitFunction2 = () => {
    this.setState({
      appState: 'menu',
      showQuitting: false,
      digitState: 0,
      topicState: null,
      divisionState: {
        two: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        three: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        four: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
        five: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        six: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72],
        seven: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84],
        eight: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
        nine: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108],
        ten: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        eleven: [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132],
        twelve: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144],
      },
      num1: 0,
      num2: 0,
      note: '',
      questionAnswer: 0,
      userAnswer: 0,
      answerCorrect: null,
      score: 0,
      questionsCorrect: 0,
      questionsIncorrect: 0,
    })
  }
  
  onInputChange = (e) => {
    this.setState({userAnswer: e.target.value})
  }
  
  getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  onEnterPress = (e) => {
    if (e.which === 13) {
      this.onSubmitAnswer()
    }
  }
  
  render() {
    if (this.state.answerCorrect === 'yes' && this.state.appState === 'active') {
      //ANSWER RIGHT SCREEN
      return (
        <div className="App">
          <QuitMenu showQuitting={this.state.showQuitting} onQuitFunction2={this.onQuitFunction2} onNoQuitFunction={this.onNoQuitFunction}/>
          <Particles className='particles' params={particlesOptions}/>
          <h1>Welcome to MathPractice, Guest!</h1>
          <h3>Answer the following questions to the best of your ability!</h3>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <h3>Good job! You got the answer right!</h3>
          <NextButton nextQuestion={this.onNextQuestion}/>
          <QuitButton quitFunction={this.onQuitFunction}/>
        </div>
      );
    } else if (this.state.answerCorrect === 'no' && this.state.appState === 'active') {
      //ANSWER WRONG SCREEN
      return (
        <div className="App">
          <QuitMenu showQuitting={this.state.showQuitting} onQuitFunction2={this.onQuitFunction2} onNoQuitFunction={this.onNoQuitFunction}/>
          <Particles className='particles' params={particlesOptions}/>
          <h1>Welcome to MathPractice, Guest!</h1>
          <h3>Answer the following questions to the best of your ability!</h3>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <h3>Awww, you got the answer wrong... The answer is <u>{this.state.questionAnswer}</u></h3>
          <NextButton nextQuestion={this.onNextQuestion}/>
          <WrongAnswerTip mode={this.state.topicState} digits={this.state.digitState}/>
          <QuitButton quitFunction={this.onQuitFunction}/>
        </div>
      );
    } else if (this.state.answerCorrect === null && this.state.appState === 'active') {
      //QUESTION SCREEN
      return (
        <div className="App">
          <QuitMenu showQuitting={this.state.showQuitting} onQuitFunction2={this.onQuitFunction2} onNoQuitFunction={this.onNoQuitFunction}/>
          <Particles className='particles' params={particlesOptions}/>
          <h1>Welcome to MathPractice, Guest!</h1>
          <h3>Answer the following questions to the best of your ability!</h3>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <InputField inputChange={this.onInputChange} enterPress={this.onEnterPress}/><br/>
          <div>
            <button onClick={this.onSubmitAnswer}>Submit Answer</button>
          </div>
          <h1>This session's score: {this.state.questionsCorrect} / {this.state.questionsCorrect + this.state.questionsIncorrect}</h1>
          <h1>questions correct in this session: {this.state.questionsCorrect}</h1>
          <h1>questions incorrect in this session: {this.state.questionsIncorrect}</h1>
          <QuitButton quitFunction={this.onQuitFunction}/>
        </div>
      );
    } else if (this.state.appState === 'menu') {
      return (
        <div className="App">
          <StatsDialog 
          showStats={this.state.showStats} 
          closeStats={this.handleCloseStats}
          questionsAnswered={this.state.user.totalQuestionsAnswered}
          questionsCorrect={this.state.user.totalQuestionsCorrect}
          questionsIncorrect={this.state.user.totalQuestionsIncorrect}/>
          <Particles className='particles' params={particlesOptions}/>
          {this.state.isSignedIn === true ? <h1>Welcome to MathPractice, {this.state.user.name}!</h1> : <h1>Welcome to MathPractice, Guest!</h1>}
          <h2>Choose a topic to practice!</h2>
          {this.state.isSignedIn === true ? <h3 className="maintab" onClick={this.handleStatsTabClick}>Your Lifetime Stats</h3> : null}
          {this.state.isSignedIn === true ? <h3 className="maintab" onClick={this.handleSignOut}>Sign Out</h3> : <h3 className="maintab" onClick={this.handleSignOut}>Sign in to save your scores!</h3>}
          <div className='MenuContainer'>
            <MenuButton startGame={this.onStartGame1add} label="One Digit Addition!"/>
            <MenuButton startGame={this.onStartGame2add} label="Two Digit Addition!"/>
            <MenuButton startGame={this.onStartGame3add} label="Three Digit Addition!"/>
            <MenuButton startGame={this.onStartGame4add} label="Four Digit Addition!"/>
            <MenuButton startGame={this.onStartGame1sub} label="One Digit Subtraction!"/>
            <MenuButton startGame={this.onStartGame2sub} label="Two Digit Subtraction!"/>
            <MenuButton startGame={this.onStartGame3sub} label="Three Digit Subtraction!"/>
            <MenuButton startGame={this.onStartGame4sub} label="Four Digit Subtraction!"/>
            <MenuButton startGame={this.onStartGame1mult} label="One Digit Multiplication!"/>
            <MenuButton startGame={this.onStartGame2mult} label="Two Digit Multiplication!"/>
            <MenuButton startGame={this.onStartGame3mult} label="Three Digit Multiplication!"/>
            <MenuButton startGame={this.onStartGame4mult} label="Four Digit Multiplication!"/>
            <MenuButton startGame={this.onStartGame1div} label="Division Facts!"/>
            <MenuButton startGame={this.onStartGame2div} label="Three Digit by One Digit Division!"/>
            <MenuButton startGame={this.onStartGame3div} label="Four Digit by One Digit Division!"/>
            <MenuButton startGame={this.onStartGame4div} label="Four Digit by Two Digit Division!"/>
          </div>
        </div>
      )
    } else if (this.state.appState === 'signin') {
      return (
          <div className="App">
            <SignUpDialog 
            handleHaveAccountClick={this.handleSignUp} 
            signUpButton={this.handleSignUp} 
            showSignUpDialog={this.state.showSignUpDialog}/>
            <Particles className='particles' params={particlesOptions}/>
              <h1>Welcome to MathPractice!</h1>
              <h3>Please Sign In, Register, or Continue as Guest!</h3>
                <div>
                  <img src={logo} alt='' height="85px" width="auto" className="logo"/>
                  <SignIn 
                  openRegisterDialog={this.openRegisterDialog} 
                  toMenu={this.toMenu}
                  loadUser={this.loadUser}
                  handleSignInState={this.handleSignInState}/>
                </div>
          </div>
      )
    }
  }
}

export default App;


