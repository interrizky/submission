import React from 'react';
import Axios from 'axios';
import { EyeOff } from 'react-feather'
import imgEjavec from '../Assets/Images/ejavec-logo.svg'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends React.Component {
  clickRegister = () => {
    window.location.href = '/register'  
  }

  clickSubmit = async(event) => {
    event.preventDefault()

    if( document.querySelector('#username').value === '' || document.querySelector('#passwd').value === '' ) {
      Swal.fire({
        title: 'Error!',
        text: 'Recheck Your Input And Repeat The Process',
        icon: 'error',
        confirmButtonText: 'OKAY',
        confirmButtonColor: 'orange',            
      })
    } else {
      const datax = await Axios({
        url: 'https://submission-api.ejavec.org/auth',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 
          username: document.querySelector('#username').value,
          passwd: document.querySelector('#passwd').value,
        })                   
      })

      /* data user ditemukan: role peserta active dan inactive, admin gas pol */
      if( datax.data.message === "OK" && datax.data.result.role === "admin" ) {
          // swallfire panjang + bikin cookies
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Login Succeed',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'orange',
            html: 'Welcome! Will be redirected to Admin Page in <b></b> milliseconds.',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
              /* set cookies */
              cookies.set('udatxu', JSON.stringify(datax.data.result), { 
                path: '/',
                maxAge: 1800,
              })              
              /* redirect page to ADMIN dashboard page */  
              window.location.href = '/dashboard'
            })
      } else if( datax.data.message === "OK" && datax.data.result.role === "peserta" && datax.data.result.user_status === "inactive" ) {
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Redirecting to Verification Page',
            icon: 'success',
            confirmButtonText: 'Cool',
            confirmButtonColor: 'orange',
            html: 'Will be redirected to Verification Page in <b></b> milliseconds.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer')
              }
              /* put it in the LocalStorage (cause of using location.href) */
              localStorage.setItem('email', datax.data.result.email)
              localStorage.setItem('name', datax.data.result.name)
              /* redirected to verification page */
              window.location.href = '/verification'
            })
      } else if( datax.data.message === "OK" && datax.data.result.role === "peserta" && datax.data.result.user_status === "active" ) {
          // swallfire panjang + bikin cookies
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Login Succeed',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'orange',
            html: 'Welcome! Will be redirected to Home Page in <b></b> milliseconds.',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
              /* set cookies */
              cookies.set('udatxu', JSON.stringify(datax.data.result), { 
                path: '/',
                maxAge: 3600,
              })              
              /* redirect page to USER dashboard page */  
              window.location.href = '/home'
            })
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Terjadi Kesalahan! Masukkan Email dan Password Yang Sesuai!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',            
        })      
      }
    }
  }

  render() {
    return(
      <div className="login-page" id="login"  style={{
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          width: '50%',
          borderRadius: '15px'
        }}>
          <div className="wrapper-image my-3 mx-auto">
            <img className="logoLogin w-50" alt="Logo Login EJAVEC" src={ imgEjavec } />
          </div>
          <div className="wrapper-judul-login my-3 mx-auto">
            <p className="login-text" style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic' }}> L O G I N </p>
          </div>
          <div className="wrapper-form my-3 mx-4">
            <form>
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center" }}>
                  <input autoFocus type="text" id="username" name="username" className="form-control" placeholder="Your Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center" }}>
                  <input type="password" id="passwd" name="passwd" className="form-control" placeholder="Your Password" aria-label="Password" aria-describedby="basic-addon2" autoComplete="off" />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><EyeOff onClick={ this.showHideOne } /></div>
                  </div>                  
              </div>        
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center" }}>
                <button type="button" id="btnLogin" className="btn-danger form-control" onClick={ this.clickSubmit }>
                  LOGIN
                </button>        
              </div>
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center" }}>
                <button type="button" id="btnRegister" className="btn-outline-danger form-control" onClick={ this.clickRegister }>
                  SIGN UP HERE
                </button>        
              </div>              
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center", justifyContent: "center" }}>
                <a href="/forgot" style={{ margin: "0", textDecoration: "none" }}>Forgot Password?</a>
              </div>
              <div className="input-group mb-3 w-75 mx-auto" style={{ alignItems: "center", justifyContent: "center" }}>
                <a href="/code" style={{ margin: "0", textDecoration: "none" }}>Resend The Registration Code</a>
              </div>                
            </form>    
          </div>          
      </div>     
    )
  }

  showHideOne = (event) => {
    event.preventDefault()
    document.querySelector('#passwd').type === 'password' ? document.querySelector('#passwd').type = 'text' : document.querySelector('#passwd').type = 'password'
  }   
}

export default Login