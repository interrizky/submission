import React from 'react';
import Axios from 'axios';

/* SweetAlert2 */
import Swal from 'sweetalert2'

class Verification extends React.Component {
  state = {
    data_name: localStorage.getItem('name') !== null ? localStorage.getItem('name') : null,
    data_email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : null
  }

  clickActivate = async(event) => {
    event.preventDefault()

    const datax = await Axios({
      url: 'http://localhost:8080/verify',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ 
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        kode_registrasi: document.querySelector('#kode_registrasi').value,
      })                   
    })

    /* data sesuai */
    if( datax.data.status === 'OK' ) {
      let timerInterval
      Swal.fire({
        title: 'Success!',
        text: 'Redirecting to Login Page',
        icon: 'success',
        confirmButtonText: 'Cool',
        confirmButtonColor: 'orange',
        html: 'Will be redirected to Login Page in <b></b> milliseconds.',
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
          /* remove it in the LocalStorage (cause of using location.href) */
          localStorage.removeItem('email')
          localStorage.removeItem('name')
          /* redirected to login page */
          window.location.href = '/'
        })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi Kesalahan! Kode Registrasi Tidak Sesuai!',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'Orange',            
      })
    }

  }

  render() {
    return(
      <div className="row activation-page d-flex align-items-center">
        <div className="wrapper-activation mx-auto" id="activation" style={{
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '500px', 
          height: '575px',                 
          borderRadius: '15px'
        }}>
          <div className="wrapper-header mx-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="header mb-2">
              <h4 style={{ textAlign: "center" }}>Activate Your Account</h4>
            </div>
            <div className="text mb-2">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>Masukkan Kode Registrasi Yang Telah Dikirimkan Ke Email Anda.
              </p>              
            </div>         
          </div>

          <div className="wrapper-form mx-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="form mb-2">
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Nama Peserta</label>                  
                <input type="text" id="nama" name="nama" className="form-control" placeholder="Your Full Name" aria-label="Name" aria-describedby="basic-addon2" defaultValue={ this.state.data_name } disabled/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email Aktif</label>                  
                <input type="text" id="email" name="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon3" defaultValue={ this.state.data_email } disabled/>
              </div>               
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Kode Registrasi</label>                  
                <input autoFocus type="text" id="kode_registrasi" name="kode_registrasi" className="form-control" placeholder="Your Registration Code" aria-label="Kode Registrasi" aria-describedby="basic-addon1" />
              </div>              
            </div>
            <div className="button my-4">
              <div className="input-group mb-3">
                <button type="button" id="btnResend" className="btn-success form-control" onClick={ this.clickActivate } >
                  ACTIVATE
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

  loginBack = (event) => {
    event.preventDefault();
    
    /* remove it in the LocalStorage (cause of using location.href) */
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    /* redirected to login page */
    window.location.href = '/'
  }  
}

export default Verification