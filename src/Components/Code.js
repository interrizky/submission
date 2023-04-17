import React from 'react'
import Axios from 'axios'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Swal from 'sweetalert2'

const override = {
  position: "fixed", 
  top: "50%", 
  left: "50%", 
  transform: "translate(-50%, -50%)" 
}

class Code extends React.Component {
  constructor() {
    super()
    this.state = {
      loaderStatus: false,
    }
  }
  render() {
    return(
      (this.state.loaderStatus) 
      ?
        <ScaleLoader color="white" loading="true" cssOverride={ override } height="90px" width="15px" radius="10px" aria-label="Loading Spinner" data-testid="loader" speedMultiplier={ 1 } /> 
      :            
        <div className="card" style={{ width: '20rem' }}>
          <div className="card-header" style={{ backgroundColor: 'white' }}>
            <h4 className="text-center" style={{ fontSize: '21px' }}>Resend The Verification Code</h4>
          </div>
          <div className="card-body">
            <div className="wrapper-sub-heading">
              <p style={{ fontSize: "14px", textAlign: "justify" }}>Masukkan email anda yang teregistrasi di website ini pada kolom yang telah disediakan. Kode Verifikasi baru akan dikirimkan ke email anda. Terima kasih.</p>                
            </div>
            <form className="row g-2">
              <div className="form-group">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email for Username</label>                  
                <input autoFocus type="text" id="email" name="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group">
                <button type="button" id="btnResend" className="btn-success form-control" onClick={ this.clickResend } >
                  RESEND NEW CODE
                </button>
              </div>
              <div className="input-group">
                <button type="button" id="btnBack" className="btn-outline-success form-control" onClick={ this.loginBack }>
                  CANCEL
                </button>           
              </div>                          
            </form>            
          </div>       
        </div>
    )
  }

  clickResend = async(event) => {
    event.preventDefault()

    if( document.querySelector('#email').value === null || document.querySelector('#email').value === '' ) {
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi Kesalahan! Kolom Email Wajib Terisi!',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'indianred',            
      })      
    } else {
      /* set loader */
      this.setState({ loaderStatus: true })

      /* grab email value */
      let email_value = document.querySelector('#email').value

      /* check email */
      const datax_email = await Axios({
        url: 'https://submission-api.ejavec.org/checkmail',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 
          data_email: email_value,
          data_kode: "code"
        })                   
      })

      /* kalo emailnya udah ada */
      if( datax_email.data.status === 'Email Exist' ) {
        const datax = Axios({
          url: 'https://submission-api.ejavec.org/sendcode',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({ 
            data_email: email_value,
            data_kode: "sendcode"
          })               
        })

        /* unset loader */
        if( datax_email ) this.setState({ loaderStatus: false })        

        if( datax !== null ) {
          let timerInterval
          Swal.fire({
            title: 'Success!',
            text: 'Check Your Email For The Registration Code',
            icon: 'success',
            confirmButtonText: 'COOL',
            confirmButtonColor: 'green',
            html: 'Check Your Email For The Verification Code. Will be redirected to Login Page in <b></b> milliseconds.',
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
        /* unset loader */
        if( datax_email ) this.setState({ loaderStatus: false })

        Swal.fire({
          title: 'Error!',
          text: 'Terjadi Kesalahan! Email Tidak Terdaftar!',
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

  loginBack = () => {
    window.location.href = '/'
  }
}

export default Code