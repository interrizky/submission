import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import { EyeOff } from 'react-feather'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class ModalUser extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()

    if( !cookies.get('udatxu') ) {
      Swal.fire({
        title: 'Info!',
        text: 'Login Expired. Kindly Re-Login',
        icon: 'info',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'Orange',
        allowOutsideClick: true,
        backdrop: true,
        allowEscapeKey: true,
        allowEnterKey: true            
      }).then(result =>  {
        if(result.isConfirmed) {
          window.location.reload()
        }
      })  
    } else {
      if( document.querySelector('#pass_baru_1').value === '' || document.querySelector('#pass_baru_2').value === '' || (document.querySelector('#pass_baru_1').value !== document.querySelector('#pass_baru_2').value) ) {
        /* kalo inputannya kosongan */
        Swal.fire({
          title: 'Error!',
          text: 'Periksa Kembali Inputan Anda!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false            
        }).then(result =>  {
        if(result.isConfirmed) {
          document.querySelector('#pass_baru_1').value = ''
          document.querySelector('#pass_baru_2').value = ''
        }
      })
      } else if( document.querySelector('#pass_baru_1').value !== document.querySelector('#pass_baru_2').value ) {
        /* kalo inputan pass baru = pas lama dan pass baru 1-2 tidak sama */
        Swal.fire({
          title: 'Error!',
          text: 'Periksa Kembali Inputan Anda!',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false            
        }).then(result =>  {
        if(result.isConfirmed) {
          document.querySelector('#pass_baru_1').value = ''
          document.querySelector('#pass_baru_2').value = ''
        }
        })
      } else {
        Axios({
          url: 'https://submission-api.ejavec.org/getMyPassword',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + cookies.get('udatxu').token            
          },
          data: JSON.stringify({ 
            data_email: cookies.get('udatxu').email,
            data_phone: cookies.get('udatxu').phone,
            data_role: cookies.get('udatxu').peserta,
            data_active: cookies.get('udatxu').user_status,
            data_passwd: document.querySelector('#pass_baru_2').value
          })                   
        }).then(response => {
          if(response.data.status === 'success') {
            Swal.fire({
              title: 'Sucess!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Okay',
              confirmButtonColor: 'Orange',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false            
            }).then(result =>  {
              if(result.isConfirmed) {
                window.location.reload()
              }
            })
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.data.message,
              icon: 'error',
              confirmButtonText: 'Okay',
              confirmButtonColor: 'Orange',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false            
            }).then(result =>  {
              if(result.isConfirmed) {
                window.location.reload()
              }
            })
          }
        })
      }
    }
  }

  render() {
    return(
      <Modal show={this.props.isOpenUser} onHide={this.props.closeModalUser} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>My Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper-change-password">
            <form>
              <div className="form-group mb-4">
                <label htmlFor="pass_baru_1">Password Baru</label>
                <div className="input-group">
                  <input autoFocus type="password" autoComplete="off" className="form-control" id="pass_baru_1" name="pass_baru_1" onChange={this.pass_baru_1} required />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><EyeOff onClick={ this.showHideOne } /></div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="pass_baru_2">Konfirmasi Password Baru</label>
                <div className="input-group">
                  <input autoFocus type="password" autoComplete="off" className="form-control" id="pass_baru_2" name="pass_baru_2" onChange={this.pass_baru_2} required />
                  <div className="input-group-prepend">
                    <div className="input-group-text"><EyeOff onClick={ this.showHideTwo } /></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ this.handleSubmit }>
            Change My Password
          </Button>     
        </Modal.Footer>
      </Modal>
    )
  }

  showHideOne = (event) => {
    event.preventDefault()
    document.querySelector('#pass_baru_1').type === 'password' ? document.querySelector('#pass_baru_1').type = 'text' : document.querySelector('#pass_baru_1').type = 'password'
  } 
  
  showHideTwo = (event) => {
    event.preventDefault()
    document.querySelector('#pass_baru_2').type === 'password' ? document.querySelector('#pass_baru_2').type = 'text' : document.querySelector('#pass_baru_2').type = 'password'
  }  
}

export default ModalUser