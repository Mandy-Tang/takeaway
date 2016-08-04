import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="login-page">
        <div className="login">
          <h4 className="login-header text-center">Takeaway</h4>
          <LoginForm/>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(LoginPage)
