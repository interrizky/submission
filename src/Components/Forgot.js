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
            <div className="header mb-3">
              <h4 style={{ textAlign: "center" }}>Forgot Password</h4>
            </div>
            <div className="text mb-3">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>The password consists of 10 (ten) characters and is a combination of characters, letters, and numbers. The maximum duration of password usage is 90 days. It is highly recommended to change the password periodically (weekly / monthly)
              </p>
            </div>
          </div>          
        </div>        
      </div>
    )
  }
}

export default Forgot