import React from 'react';

// Icon
import { EyeOff } from 'react-feather'

class Register extends React.Component {
  render() {
    return(
      <div className="row register-page d-flex align-items-center">
        <div className="wrapper-register mx-auto" id="register" style={{ 
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // textAlign: 'center', 
          width: '600px', 
          height: '575px',                 
          borderRadius: '15px'
        }}>
          <div className="wrapper-form mx-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="header mb-5">
              <h4 style={{ textAlign: "center" }}>USER REGISTRATION</h4>
            </div>

            <form>
              <div className="row form d-flex my-4">
                <div className="wrapper-form-kiri col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Nama Peserta</label>                  
                    <input autoFocus type="text" id="nama" name="nama" className="form-control" placeholder="Your Full Name" aria-label="Name" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>No. Handphone Aktif</label>                  
                    <input type="text" id="handphone" name="handphone" className="form-control" placeholder="Your Active Phone Number" aria-label="Phone Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Nama Instansi</label>                  
                    <input type="text" id="instansi" name="instansi" className="form-control" placeholder="Your Organization Name" aria-label="Organization Name" aria-describedby="basic-addon3" />
                  </div>    
                </div>
                <div className="wrapper-form-kanan col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email for Username</label>                  
                    <input type="text" id="email" name="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon4" />
                  </div>
                  <div className="form-group mb-3">
                      <label htmlFor="inputPassword-1-label" className="col-form-label" style={{ textAlign: "left" }}>Password</label>
                      <div className="input-group mb-2">
                        <input autoFocus type="password" id="password1" name="password1" className="form-control" placeholder="Your Password" aria-label="Password1" aria-describedby="basic-addon5" autoComplete="off" onKeyPress={ this.movePwdTwo } />
                        <div className="input-group-prepend">
                          <div className="input-group-text"><EyeOff onClick={ this.showHideOne } /></div>
                        </div>
                      </div>
                  </div>   
                  <div className="form-group mb-3">
                      <label htmlFor="inputPassword-2-label" className="col-form-label" style={{ textAlign: "left" }}>Confirm Password</label>
                      <div className="input-group mb-2">
                        <input type="password" id="password2" name="password2" className="form-control" placeholder="Confirm It" aria-label="Password2" aria-describedby="basic-addon6" autoComplete="off" onKeyUp={ this.typeText } onKeyPress={ this.moveToButton } />
                        <div className="input-group-prepend">
                          <div className="input-group-text"><EyeOff onClick={ this.showHideTwo } /></div>
                        </div>
                      </div>
                  </div>                   
                </div>              
              </div>
            </form>              

            <div className="button my-4">
              <div className="input-group mb-3">
                <button type="button" id="btnSignUp" className="btn-danger form-control" onClick={ this.clickSignUp } >
                  SIGN UP
                </button>
              </div>
              <div className="input-group mb-3">
                <button type="button" id="btnBack" className="btn-outline-danger form-control" onClick={ this.loginBack }>
                  CANCEL
                </button>           
              </div>              
            </div>              

          </div>
        </div>
      </div>
    );
  }

  showHideOne = (event) => {
    event.preventDefault()
    document.querySelector('#password1').type === 'password' ? document.querySelector('#password1').type = 'text' : document.querySelector('#password1').type = 'password'
  } 
  
 showHideTwo = (event) => {
    event.preventDefault()
    document.querySelector('#password2').type === 'password' ? document.querySelector('#password2').type = 'text' : document.querySelector('#password2').type = 'password'
  }   

  loginBack = (event) => {
    event.preventDefault()
    window.location.href = '/'
  }

}

export default Register