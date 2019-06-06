import React from 'react';
import columnaddimg from './columnaddimg.svg'
import subtraction from './subtraction.gif'
import subborrow from './minusborrow.png'
import multtable from './multtable.jpg'
import mult1 from './mult1.gif'
import mult2 from './mult2.gif'
import mult3 from './mult3.gif'
import mult4 from './mult4.gif'


const WrongAnswerTip = (props) => {
    if (props.mode === '+' && props.digits === 1) {
        return (
            <div>
                <h3>This table can help you to learn to add:</h3>
                        <table border="1" align="center" cellpadding="2" cellspacing="0">
							<tr align="center" bgcolor="#FFCCFF">
								<th width="30" bgcolor="#FFCCFF">+</th>
								<th width="30">0</th>
								<th width="30">1</th>
								<th width="30">2</th>
								<th width="30">3</th>
								<th width="30">4</th>
								<th width="30">5</th>
								<th width="30">6</th>
								<th width="30">7</th>
								<th width="30">8</th>
								<th width="30">9</th>
								<th width="30">10</th>
								<th width="30">11</th>
								<th width="30">12</th>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">0</th>
								<td>0</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">1</th>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">2</th>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">3</th>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">4</th>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">5</th>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">6</th>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">7</th>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">8</th>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">9</th>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
								<td>21</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">10</th>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
								<td>21</td>
								<td>22</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">11</th>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
								<td>21</td>
								<td>22</td>
								<td>23</td>
							</tr>
							<tr align="center">
								<th bgcolor="#FFCCFF">12</th>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
								<td>21</td>
								<td>22</td>
								<td>23</td>
								<td>24</td>
							</tr>
						</table>
                        <table border="0" align="center">
							<tr>
								<td width="350">
									<h3 align="left">How to use</h3>
									<p align="left">Example: <b>3 + 5</b></p>
									<p align="left">Go down to the &quot;3&quot; row <br />
then along to  the &quot;5&quot; column,<br />
and there is your answer! &quot;<b>8</b>&quot;</p>								</td>
								<td>
									<div class="beach">
						    			<table align="center">
											<tr align="right">
												<th width="25">+</th>
												<th width="25">1</th>
												<th width="25">2</th>
												<th width="25">3</th>
												<th width="25">4</th>
												<th width="25">5</th>
												<th width="25">6</th>
												<th width="25">7</th>
											</tr>
											<tr align="right">
												<th>1</th>
												<td>2</td>
												<td>3</td>
												<td>4</td>
												<td>5</td>
												<td bgcolor="ddddff">6</td>
												<td>7</td>
												<td>8</td>
										  </tr>
											<tr align="right">
												<th>2</th>
												<td>3</td>
												<td>4</td>
												<td>5</td>
												<td>6</td>
												<td bgcolor="ddddff">7</td>
												<td>8</td>
												<td>9</td>
										  </tr>
											<tr align="right">
												<th bgcolor="#DDDDFF">3</th>
												<td bgcolor="#DDDDFF">4</td>
												<td bgcolor="#DDDDFF">5</td>
												<td bgcolor="#DDDDFF">6</td>
												<td bgcolor="#DDDDFF">7</td>
												<td bgcolor="#33FF00"><b>8</b></td>
												<td>9</td>
												<td>10</td>
										  </tr>
											<tr align="right">
												<th>4</th>
												<td>5</td>
												<td>6</td>
												<td>7</td>
												<td>8</td>
												<td>9</td>
												<td>10</td>
												<td>11</td>
										  </tr>
					    			  </table>
								</div>								</td>
							</tr>
			</table>
            </div>
        )
    } else if (props.mode === '+' && props.digits !== 1) {
        return (
            <div>
                <h3>Here is a tip!</h3>
                <h3>Example: 16 + 16</h3>
                <h3>6 + 6 is 12... so we split the 12 into one ten, and 2 ones!</h3>
                <h3>Then we add it on top of the tens column so we remember to add it when we do tens!</h3>
                <img src={columnaddimg} alt=''/>
                <h3>This is called carrying, and we only do it when we get a 2 digit number as our sum in one column!</h3>
                <h3>This works with bigger numbers as well!</h3>
            </div>
        )
    } else if (props.mode === '-' && props.digits === 1) {
        return (
            <div>
                <h3>Here is a tip!</h3>
                <h3>Subtraction is taking one number away from another...</h3>
                <h3>If you start with 3 apples, then subtract 2 apples, you have 3 apples left!</h3>
                <h3>That's written as 5 - 2 = 3!</h3>
                <img src={subtraction} alt=''/>
            </div>
        )
    } else if (props.mode === '-' && props.digits !== 1) {
        return (
            <div>
                <h3>Column addition is much like column addition, do it line by line!</h3>
				<h3>However when the top number in one column is bigger than the number under it...</h3>
				<h3>We have to borrow a "1" from the number in the next digits column...</h3>
				<h3>and then we add a tens digit to the smaller top number in the column were doing!</h3>
				<img src={subborrow} alt=''/>
            </div>
        )
	} else if (props.mode === '*' && props.digits === 1) {
        return (
            <div>
				<h3>Here is the multiplication table:</h3>
				<h3>The chosen number on the top row is multiplied by the chosen number on the side column,</h3>
				<h3>to get the connected number as the result!</h3>
				<img src={multtable} alt=''/>
			</div>
        )
    } else if (props.mode === '*' && props.digits !== 1) {
        return (
            <div>
				<h3>Long Multiplication is a special method for multiplying larger numbers.</h3>
				<h3>It is a way to multiply numbers larger than 10 that only needs your knowledge of the ten times Multiplication Table.</h3>
				<h3>Step 1:</h3>
				<img src={mult1} alt=''/><br/>
				<h3>Step 2:</h3>
				<img src={mult2} alt=''/><br/>
				<h3>Step 3:</h3>
				<img src={mult3} alt=''/><br/>
				<h3>Step 4:</h3>
				<img src={mult4} alt=''/><br/>
			</div>
        )
	} else if (props.mode === '/' && props.digits === 1) {
        return (
            <h1>PLACEHOLDER</h1>
        )
    } else if (props.mode === '/' && props.digits !==1) {
        return (
            <h1>PLACEHOLDER</h1>
        )
    }
}

export default WrongAnswerTip