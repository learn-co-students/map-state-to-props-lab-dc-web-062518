import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {console.log(this.props.users)}
        {this.props.users.map(user => <li>{user.username} {user.hometown} </li>)}
        {this.props.count}
        </ul>
      </div>
    )
  }

}

const mapStateToProps= (state)=>{
  return {users: state.users, count: state.users.length}
}

export default connect(mapStateToProps)(Users)
