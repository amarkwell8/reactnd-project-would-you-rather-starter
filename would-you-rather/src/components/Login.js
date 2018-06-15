import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
    }
    userSelected = (e) => {
        e.preventDefault();
        const {dispatch } = this.props;
        dispatch(setAuthedUser(e.target.value));
    }
    render() {
        return(
            <div>
                Login
                <select onChange={this.userSelected}>
                    {this.props.possibleUsers.map((id) => (
                        <option value={id} key={id}>{id}</option>
                    ))}
                </select>
            </div>
        )
    }
}

function mapStateToProps({ users} ) {
    return {
        possibleUsers: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)