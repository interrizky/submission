import React from 'react';
import Axios from 'axios';

// Icon
import { EyeOff } from 'react-feather'
// SweetAlert2
import Swal from 'sweetalert2'


class Register extends React.Component {
  clickSignUp = async(event) => {
    event.preventDefault();

    if( document.querySelector('#nama').value === '' || document.querySelector('#handphone').value === '' || document.querySelector('#organisasi').value === '' || document.querySelector('#email').value === '' || document.querySelector('#password1').value === '' || document.querySelector('#password2').value === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Periksa Kembali Semua Inputan Anda!',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'Orange',            
      })            
    } else if( document.querySelector('#password1').value.length <= 3 || document.querySelector('#password2').value.length <= 3 ) {
        Swal.fire({
          title: 'Error!',
          text: 'Panjang Character Password Minimal 4 dan Maksimal 12',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',            
        })                  
    } else if( document.querySelector('#password1').value !== document.querySelector('#password2').value ) {
        Swal.fire({
          title: 'Error!',
          text: 'Kolom Password Tidak Sama!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',            
        })            
    } else {
      /* check email */
      const datax_email = await Axios({
        url: 'http://localhost:2020/checkmail',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 
          data_email: document.querySelector('#email').value,
        })                   
      })

      /* kalo emailnya udah ada */
      if( datax_email.data.status === 'Email Exist' ) {
        Swal.fire({
          title: 'Error!',
          text: 'Terjadi Kesalahan! Email Sudah Terdaftar!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',            
        })        
      } else {
        const datax = Axios({
          url: 'http://localhost:2020/register',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({ 
            data_nama: document.querySelector('#nama').value.toUpperCase(),
            data_handphone: document.querySelector('#handphone').value,
            data_organisasi: document.querySelector('#organisasi').value.toUpperCase(),
            data_email: document.querySelector('#email').value,
            data_password: document.querySelector('#password2').value,
          })                   
        })
        
        if( datax !== null ) {
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Check Your Email For The Registration Code',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'orange',
            html: 'Check Your Email For The Registration Code. Will be redirected to Login Page in <b></b> milliseconds.',
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
                
              window.location.href = '/'
            })
        } 
      }
    }
  }

  render() {
    return(
      <div className="row register-page d-flex align-items-center">
        <div className="wrapper-register mx-auto" id="register" style={{ 
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // textAlign: 'center', 
          width: '720px', 
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
                    <input autoFocus type="text" id="nama" name="nama" className="form-control" placeholder="Full Name" aria-label="Name" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>No. Handphone Aktif</label>                  
                    <input type="text" id="handphone" name="handphone" className="form-control" placeholder="Active Phone Number" aria-label="Phone Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Nama Instansi</label>                  
                    <input type="text" id="organisasi" name="organisasi" className="form-control" placeholder="Organization / Institution Name" aria-label="Organization Name" aria-describedby="basic-addon3" />
                  </div>    
                </div>
                <div className="wrapper-form-kanan col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group mb-3">
                    <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email for Username</label>                  
                    <input type="text" id="email" name="email" className="form-control" placeholder="Active Email" aria-label="Email" aria-describedby="basic-addon4" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="inputPassword-1-label" className="col-form-label" style={{ textAlign: "left" }}>Password</label>
                    <div className="input-group mb-2">
                      <input type="password" id="password1" name="password1" className="form-control" placeholder="Your Password" aria-label="Password1" aria-describedby="basic-addon5" autoComplete="off" minLength="4" maxLength="12" />
                      <div className="input-group-prepend">
                        <div className="input-group-text"><EyeOff onClick={ this.showHideOne } /></div>
                      </div>
                    </div>
                  </div>   
                  <div className="form-group mb-3">
                    <label htmlFor="inputPassword-2-label" className="col-form-label" style={{ textAlign: "left" }}>Confirm Password</label>
                    <div className="input-group mb-2">
                      <input type="password" id="password2" name="password2" className="form-control" placeholder="Confirm Password" aria-label="Password2" aria-describedby="basic-addon6" autoComplete="off" minLength="4" maxLength="12" />
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