import React from 'react';

/* Image */
import imgEjavec from '../Assets/Images/ejavec-logo.svg'

class Login extends React.Component {

  clickRegister = () => {
    window.location.href = '/register'  
  }

  clickSubmit = () => {

  }

  render() {
    return(
      <div className="row login-page d-flex align-items-center">
        <div className="wrapper-login mx-auto" id="login" style={{
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          width: '500px', 
          height: '575px',                 
          borderRadius: '15px'
        }}>
          <div className="wrapper-image">
            <img src={ imgEjavec } alt="LogoLogin" style={{ width: '225px', height: '225px' }} />
            <h4>L O G I N</h4>
          </div>
          <form>
            <div className="wrapper-form mx-5" id="wrapper-form">
              <div className="input-group mb-3" style={{ alignItems: "center" }}>
                  <input autoFocus type="text" id="username" name="username" className="form-control" placeholder="Your Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mb-3" style={{ alignItems: "center" }}>
                  <input type="password" id="password" name="password" className="form-control" placeholder="Your Password" aria-label="Password" aria-describedby="basic-addon1" autoComplete="off" />
              </div>        
              <div className="input-group mb-3" style={{ alignItems: "center" }}>
                <button type="button" id="btnLogin" className="btn-danger form-control" onClick={ this.clickSubmit }>
                  LOGIN
                </button>        
              </div>
              <div className="input-group mb-3" style={{ alignItems: "center" }}>
                <button type="button" id="btnRegister" className="btn-outline-danger form-control" onClick={ this.clickRegister }>
                  NEW USERS? SIGN UP HERE
                </button>        
              </div>              
              <div className="input-group mb-3" style={{ alignItems: "center", justifyContent: "end" }}>
                <a href="/forgot" style={{ margin: "0", textDecoration: "none" }}>Forgot Password ?</a>
              </div>  
            </div> 
          </form>
        </div>                 
      </div>     
    )
  }
}

export default Login