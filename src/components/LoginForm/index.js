import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isError: false,
  }

  successSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.successSubmit()
    } else {
      this.setState({errorMsg: data.error_msg, isError: true})
    }
    if (username === '' || password === '') {
      this.setState({isError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMsg, isError} = this.state

    return (
      <div className="bgLoginFormCont">
        <div className="loginFormCont">
          <div className="loginLogoCont">
            <img
              className="logoImgSm"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <img
              className="loginImg"
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            />
          </div>
          <form onSubmit={this.onSubmitForm} className="loginForm">
            <img
              className="logoImgLg"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <div className="inputCont">
              <label htmlFor="username">USERNAME</label>
              <input
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
                id="username"
                type="text"
              />
            </div>
            <div className="inputCont">
              <label htmlFor="password">PASSWORD</label>
              <input
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
                id="password"
                type="password"
              />
            </div>
            <button className="loginBtn" type="submit">
              Login
            </button>
            {isError && <p className="errorMsg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
