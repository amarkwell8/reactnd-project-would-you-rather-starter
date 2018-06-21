import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Option extends Component {
     render() {
         const {option} = this.props;
        return(
            <div style={{display: 'inline'}}>
                {option.text}
                <h4>{option.votes.length}</h4>
            </div>
        )
     }
 }

function mapStateToProps({authedUser, users, questions}, { option }) {
   
    return {
        authedUser,
        option: option
    }
}

export default connect(mapStateToProps)(Option)