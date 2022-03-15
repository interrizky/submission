import React from 'react';

/* Custom CSS */
import '../Assets/CSS/Login.css'

class Login extends React.Component {
  render() {
    return(
      <div className="row login" id="login">
        <div className="input-group mb-3" style={{ justifyContent: 'center' }}>
          <p style={{ margin: '0' }}>Welcome Back!</p>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <input type="text" id="username" name="username" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-key"></i>
            </span>
          </div>
          <input type="password" id="password" name="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
          <div className="input-group-prepend">
            <span className="input-group-text show_hide_password" id="basic-addon1">
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            </span>
          </div>        
        </div>
        <div className="input-group mb-3">
          <button type="submit" id="btnLogin" className="btn btn-success form-control">
            LOGIN
          </button>        
        </div>
        <div className="input-group mb-3">
          <button type="button" id="btnSignUp" className="btn btn-info form-control">
            SIGN UP
          </button>        
        </div>
      </div>            
    )
  }
}

export default Login