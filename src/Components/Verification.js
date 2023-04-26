import React from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import ScaleLoader from 'react-spinners/ScaleLoader'
const override = {
  position: "fixed", 
  top: "50%", 
  left: "50%", 
  transform: "translate(-50%, -50%)" 
}

class Verification extends React.Component {
  state = {
    data_name: localStorage.getItem('name') !== null ? localStorage.getItem('name') : null,
    data_email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : null,
    loaderStatus: false,
  }

  clickActivate = async(event) => {
    event.preventDefault()

    if( document.querySelector('#kode_registrasi').value === '' ) {
      Swal.fire({
        title: 'Error!',
        text: 'Periksa Kembali Semua Inputan Anda!',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'indianred',            
      })                  
    } else {
      this.setState({ ...this.state, loaderStatus: true })
  
      const datax = await Axios({
        url: 'https://submission-api.ejavec.org/verify',
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

      /* unset loader */
      this.setState({ ...this.state, loaderStatus: false })      
  
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
          text: 'Terjadi Kesalahan! Kode Verifikasi Tidak Sesuai!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'indianred',            
        }).then(result =>  {
          if(result.isConfirmed) {          
            window.location.reload()
          }
        })
      }
    }
  }

  render() {
    return(
      (this.state.loaderStatus) 
      ?
        <ScaleLoader color="white" loading="true" cssOverride={ override } height="90px" width="15px" radius="10px" aria-label="Loading Spinner" data-testid="loader" speedMultiplier={ 1 } /> 
      :      
        <div className="card">
          <div className="card-header" style={{ backgroundColor: 'white' }}>
            <h4 style={{ textAlign: "center" }}>Activate Your Account</h4>
          </div>
          <div className="card-body">
            <div className="text mb-2">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>Masukkan Kode Verifikasi Yang Telah Dikirimkan Ke Email Anda.
              </p>              
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
                  <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Kode Verifikasi</label>                  
                  <input autoFocus type="text" id="kode_registrasi" name="kode_registrasi" className="form-control" placeholder="Your Registration Code" aria-label="Kode Verifikasi" aria-describedby="basic-addon1" />
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