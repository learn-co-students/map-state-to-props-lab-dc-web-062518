import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    console.log('user props', this.props)
    return (
      <div>
        <ul>
          <h3>Users:</h3>
          <p>Number of Users: {this.props.userCount}</p>
          {this.props.users.map(user => {
             return <li key={user.username}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
