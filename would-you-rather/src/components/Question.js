import React, {Component} from 'react'
import {connect} from 'react-redux'
import Option from './Option'

class Question extends Component {
    render() {
        const { question } = this.props;
        if(question === null){
            return <h4>Question does not exist</h4>
        }

        const { id, author, timestamp, optionOne, optionTwo} = question
        return(
            <div>
                <p>Would you rather?</p>
                <div>
                   <Option option={optionOne} />
                   <div />
                   <Option option={optionTwo} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
    const question = questions[id];

    return {
        authedUser,
        question: question
    }
}

export default connect(mapStateToProps)(Question)