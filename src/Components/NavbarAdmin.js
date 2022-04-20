import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { User } from 'react-feather'

/* components */
import ModalUser from './ModalUser'
/* logo */
import NavbarLogo from '../Assets/Images/ejavec-logo.svg'
/* Universal Cookie */
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class NavbarAdmin extends React.Component {
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

          <div className="menu form-inline d-flex flex-row justify-content-center" style={{ marginRight: "10px"}}>
            <Link to="/fullpaper" style={{ color: "black", textDecoration: "none" }}><div className="p-2 bd-highlight">FULL-PAPER</div></Link>
            <Link to="/sharia" style={{ color: "black", textDecoration: "none" }}><div className="p-2 bd-highlight">SHARIA</div></Link>
            {/* <Link to="/report" style={{ color: "black", textDecoration: "none" }}><div className="p-2 bd-highlight">REPORT</div></Link> */}
            <DropdownButton title={<span><User /></span>} id="dropdown-basic-button" variant="outline-dark" style={{ marginLeft: "10px" }}>
              <Dropdown.Item onClick={ this.openModalUser }>Change Password</Dropdown.Item>
              { this.state.isOpen ? <ModalUser closeModalUser={ this.closeModalUser } isOpenUser={ this.state.isOpen } handleSubmitUser={ this.handleSubmit }/> : null }
              <Dropdown.Divider />
              <Dropdown.Item onClick={ this.clickLogout }>Logout</Dropdown.Item>
            </DropdownButton>            
          </div>          
        </nav>    

        <div id="row-alert" className="alert alert-success show my-1" role="alert">
          Welcome Admin, <b><i> {cookies.get('udatxu').name} </i></b>
        </div>
      </React.Fragment>
    )
  }
}

export default NavbarAdmin