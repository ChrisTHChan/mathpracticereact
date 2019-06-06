import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group"
import './App.css';
import Question from './Question';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import NextButton from './NextButton';
import MenuButton from './MenuButton';
import QuitButton from './QuitButton';
import Particles from 'react-particles-js';
import WrongAnswerTip from './WrongAnswerTip';
import QuitMenu from './QuitMenu'
import SignIn from './SignIn.js'
import logo from './logo.png'


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
      score: 0,
      questionsCorrect: 0,
      questionsIncorrect: 0,
    }
  }
  
  onStartGame1add = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 1})
    this.setState({num1: this.getRandomNumber(1, 10)})
    this.setState({num2: this.getRandomNumber(1, 10)})
    this.setState({topicState: '+'})
  }

  onStartGame2add = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 2})
    this.setState({num1: this.getRandomNumber(10, 100)})
    this.setState({num2: this.getRandomNumber(10, 100)})
    this.setState({topicState: '+'})
  }

  onStartGame3add = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 3})
    this.setState({num1: this.getRandomNumber(100, 1000)})
    this.setState({num2: this.getRandomNumber(100, 1000)})
    this.setState({topicState: '+'})
  }

  onStartGame4add = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 4})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(1000, 10000)})
    this.setState({topicState: '+'})
  }

  onStartGame1mult = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 1})
    this.setState({num1: this.getRandomNumber(1, 10)})
    this.setState({num2: this.getRandomNumber(1, 10)})
    this.setState({topicState: '*'})
  }

  onStartGame2mult = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 2})
    this.setState({num1: this.getRandomNumber(10, 100)})
    this.setState({num2: this.getRandomNumber(10, 100)})
    this.setState({topicState: '*'})
  }

  onStartGame3mult = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 3})
    this.setState({num1: this.getRandomNumber(100, 1000)})
    this.setState({num2: this.getRandomNumber(100, 1000)})
    this.setState({topicState: '*'})
  }

  onStartGame4mult = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 4})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(1000, 10000)})
    this.setState({topicState: '*'})
  }

  onStartGame1sub = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 1})
    this.setState({num1: this.getRandomNumber(1, 10)})
    this.setState({num2: this.getRandomNumber(1, 10)})
    this.setState({topicState: '-'})
  }

  onStartGame2sub = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 2})
    this.setState({num1: this.getRandomNumber(10, 100)})
    this.setState({num2: this.getRandomNumber(10, 100)})
    this.setState({topicState: '-'})
  }

  onStartGame3sub = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 3})
    this.setState({num1: this.getRandomNumber(100, 1000)})
    this.setState({num2: this.getRandomNumber(100, 1000)})
    this.setState({topicState: '-'})
  }

  onStartGame4sub = () => {
    this.setState({appState: 'active'})
    this.setState({digitState: 4})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(1000, 10000)})
    this.setState({topicState: '-'})
  }

  onStartGame1div = () => {
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({digitState: 'df'})
    //have to use updater function here, because the if statements depend on the first setstate and
    //they are located in the same function, therefore asynchronous operations happening at the same time.
    //react batches them together, so have to write it like this so react knows the if statements are dependant
    //on the updated num2 state.
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
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({digitState: '3d1'})
    this.setState({num1: this.getRandomNumber(100, 1000)})
    this.setState({num2: this.getRandomNumber(1, 10)})
    this.setState({note: '(ignore remainders)'})
  }

  onStartGame3div = () => {
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({digitState: '4d1'})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(1, 10)})
    this.setState({note: '(ignore remainders)'})
  }

  onStartGame4div = () => {
    this.setState({appState: 'active'})
    this.setState({topicState: '/'})
    this.setState({digitState: '4d2'})
    this.setState({num1: this.getRandomNumber(1000, 10000)})
    this.setState({num2: this.getRandomNumber(10, 100)})
    this.setState({note: '(ignore remainders)'})
  }

  onSubmitAnswer = () => {
    //COMPARISON FUNCTIONS GO HERE WHEN YOUR ANSWER IS SUBMITTED.
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
      this.setState({answerCorrect: "yes"})
      this.setState({score: this.state.score + 1})
      this.setState({questionsCorrect: this.state.questionsCorrect + 1}) 
    } else if (parseInt(this.state.userAnswer) === (this.state.num1 * this.state.num2) && this.state.topicState === '*') {
      this.setState({answerCorrect: "yes"})
      this.setState({score: this.state.score + 1})
      this.setState({questionsCorrect: this.state.questionsCorrect + 1}) 
    } else if (parseInt(this.state.userAnswer) === (Math.abs(this.state.num1 - this.state.num2)) && this.state.topicState === '-') {
      this.setState({answerCorrect: "yes"})
      this.setState({score: this.state.score + 1})
      this.setState({questionsCorrect: this.state.questionsCorrect + 1})
    } else if (parseInt(this.state.userAnswer) === (Math.floor(this.state.num1 / this.state.num2)) && this.state.topicState === '/') {
      this.setState({answerCorrect: "yes"})
      this.setState({score: this.state.score + 1})
      this.setState({questionsCorrect: this.state.questionsCorrect + 1})
    } else {
      this.setState({answerCorrect: "no"})
      this.setState({questionsIncorrect: this.state.questionsIncorrect + 1})
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

  //for this function literally just copy and paste default state object into this setstate function, except for appstate
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
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <h3>Good job! You got the answer right!</h3>
          <NextButton nextQuestion={this.onNextQuestion}/>
          <QuitButton quitFunction={this.onQuitFunction}/>
          </div>
          </CSSTransition>
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
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <h3>Awww, you got the answer wrong... The answer is <u>{this.state.questionAnswer}</u></h3>
          <NextButton nextQuestion={this.onNextQuestion}/>
          <WrongAnswerTip mode={this.state.topicState} digits={this.state.digitState}/>
          <QuitButton quitFunction={this.onQuitFunction}/>
          </div>
          </CSSTransition>
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
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div>
          <Question num1={this.state.num1} sign={this.state.topicState} num2={this.state.num2} note={this.state.note}/>
          <InputField inputChange={this.onInputChange} enterPress={this.onEnterPress}/><br/>
          <SubmitButton submitAnswer={this.onSubmitAnswer}/>
          <h1>score: {this.state.questionsCorrect} / {this.state.questionsCorrect + this.state.questionsIncorrect}</h1>
          <h1>questions correct: {this.state.questionsCorrect}</h1>
          <h1>questions incorrect: {this.state.questionsIncorrect}</h1>
          <QuitButton quitFunction={this.onQuitFunction}/>
          </div>
          </CSSTransition>
        </div>
      );
    } else if (this.state.appState === 'menu') {
      return (
        <div className="App">
          <Particles className='particles' params={particlesOptions}/>
          <h1>Welcome to MathPractice, Guest!</h1>
          <h3>Choose a topic to practice!</h3>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
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
          </CSSTransition>
        </div>
      )
    } else if (this.state.appState === 'signin') {
      return (
          <div className="App">
            <Particles className='particles' params={particlesOptions}/>
              <h1>Welcome to MathPractice!</h1>
              <h3>Please Log In, Register, or Continue as Guest!</h3>
              <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
                <div>
                  <img src={logo} alt='' height="85px" width="auto" className="logo"/>
                  <SignIn toMenu={this.toMenu}/>
                </div>
              </CSSTransition>
          </div>
      )
    }
  }
}

export default App;


