import React from 'react'

class Forgot extends React.Component {
  render() {
    return(
      <div className="row forgot-page d-flex align-items-center">
        <div className="wrapper-forgot mx-auto" id="forgot" style={{
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // textAlign: 'center', 
          width: '500px', 
          height: '575px',                 
          borderRadius: '15px'
        }}>
          <div className="wrapper-form mx-5" id="wrapper-form" style={{ position: "relative", top: "5%"  }}>
            <div className="header mb-2">
              <h4 style={{ textAlign: "center" }}>Forgot Password</h4>
            </div>
            <div className="text mb-2">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>Masukkan email anda yang teregistrasi di website ini pada kolom yang telah disediakan lalu ketik ENTER. Tunggu beberapa saat untuk sistem melakukan pengecekan dan kemudian klik tombol RESEND NEW PASSWORD. Password baru akan dikirimkan ke email anda. Terima kasih.
              </p>
            </div>
            <div className="form mb-2">
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Email for Username</label>                  
                <input autoFocus type="text" id="email" name="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>Nama Peserta</label>                  
                <input type="text" id="nama" name="nama" className="form-control" placeholder="Your Full Name" aria-label="Name" aria-describedby="basic-addon2" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email-label" className="col-form-label" style={{ textAlign: "left" }}>No. Handphone Aktif</label>                  
                <input type="text" id="handphone" name="handphone" className="form-control" placeholder="Your Active Phone Number" aria-label="Phone Number" aria-describedby="basic-addon3" />
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

  loginBack = () => {
    window.location.href = '/'
  }
}

export default Forgot