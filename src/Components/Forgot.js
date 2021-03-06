import React from 'react';
import Axios from 'axios';

// SweetAlert2
import Swal from 'sweetalert2'

class Forgot extends React.Component {
  render() {
    return(
      <div className="row forgot-page d-flex align-items-center">
        <div className="wrapper-forgot mx-auto" id="forgot" style={{
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // textAlign: 'center', 
          width: '480px', 
          height: '480px',                 
          borderRadius: '15px'
        }}>
          <div className="wrapper-header mx-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="header mb-2">
              <h4 style={{ textAlign: "center" }}>Forgot Password</h4>
            </div>
            <div className="text mb-2">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>Masukkan email anda yang teregistrasi di website ini pada kolom yang telah disediakan. Password baru akan dikirimkan ke email anda. Terima kasih.
              </p>              
            </div>         
          </div>

          <div className="wrapper-form mx-5 my-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="form mb-2">
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email for Username</label>                  
                <input autoFocus type="text" id="email" name="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="button my-4">
              <div className="input-group mb-3">
                <button type="button" id="btnResend" className="btn-success form-control" onClick={ this.clickResend } >
                  RESEND NEW PASSWORD
                </button>
              </div>
              <div className="input-group mb-3">
                <button type="button" id="btnBack" className="btn-outline-success form-control" onClick={ this.loginBack }>
                  CANCEL
                </button>           
              </div>
            </div>             
          </div>          

        </div>        
      </div>
    )
  }

  clickResend = async(event) => {
    event.preventDefault()

    if( document.querySelector('#email') === null || document.querySelector('#email') === '' ) {
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi Kesalahan! Masukkan Email Anda Yang Terdaftar!',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'Orange',            
      })      
    } else {
      /* check email */
      const datax_email = await Axios({
        url: 'https://submission-api.ejavec.org/checkmail',
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
        const datax = Axios({
          url: 'https://submission-api.ejavec.org/forgotpwd',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({ 
            data_email: document.querySelector('#email').value,
            data_kode: "passwd"
          })               
        })

        if( datax !== null ) {
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Check Your Email For The New Password Code',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'orange',
            html: 'Check Your Email For The New Password Code. Will be redirected to Login Page in <b></b> milliseconds.',
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
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Terjadi Kesalahan! Email Tidak Terdaftar!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',            
        })            
      }
    }
  }  

  loginBack = () => {
    window.location.href = '/'
  }
}

export default Forgot