import React from 'react' 

class StatsDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='statsdialog' style={{display: this.props.showStats === true ? 'grid' : 'none'}}>
                <div className="statsdialogcenter">
                    <h2>Total Questions Answered Ever: {this.props.questionsAnswered}</h2>
                    <h2>Total Questions Answered Correctly: {this.props.questionsCorrect}</h2>
                    <h2>Total Questions Answered Incorrectly: {this.props.questionsIncorrect}</h2>
                    <button onClick={this.props.closeStats}>Close</button>
                </div>
            </div>
        )
    }
}

export default StatsDialog;