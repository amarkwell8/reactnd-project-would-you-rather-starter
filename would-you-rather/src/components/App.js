import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import Dashboard from './Dashboard'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
