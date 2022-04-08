import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import {  User } from 'react-feather'

/* components */
import ModalUser from './ModalUser'
/* logo */
import NavbarLogo from '../Assets/Images/ejavec-logo.svg'
/* Universal Cookie */
import Cookies from 'universal-cookie'
const cookies = new Cookies()


class Navbar extends React.Component {
  state = {
    isOpen: false,
  }

  openModalUser = () => this.setState({ isOpen: true });
  closeModalUser = () => this.setState({ isOpen: false });

  clickLogout = (event) => {
    event.preventDefault();

    cookies.remove('udatxu', { path: '/' })
    window.location.reload()    
  }

  render() {
    return(
      <React.Fragment>
        <nav className="navbar" style={{ backgroundColor: "rgb(255, 167, 52)" }}>
          <a className="navbar-brand" href="true">
            <img src={ NavbarLogo } width="90" height="30" className="d-inline-block align-top" alt="EJAVEC Logo" style={{ marginLeft: "10%" }} />
          </a>

          <form className="form-inline" style={{ justifyContent: "end", marginRight: "15px"}}>
            <DropdownButton title={<span><User /></span>} id="dropdown-basic-button" variant="outline-dark">
              <Dropdown.Item onClick={ this.openModalUser }>Change Password</Dropdown.Item>
              { this.state.isOpen ? <ModalUser closeModalUser={ this.closeModalUser } isOpenUser={ this.state.isOpen } handleSubmitUser={ this.handleSubmit }/> : null }
              <Dropdown.Divider />
              <Dropdown.Item onClick={ this.clickLogout }>Logout</Dropdown.Item>
            </DropdownButton>                                            
          </form>
        </nav>    

        <div id="row-alert" className="alert alert-success show my-2" role="alert">
          Selamat Datang, <b><i> {cookies.get('udatxu').name} </i></b>
        </div>
      </React.Fragment>
    )
  }
}

export default Navbar