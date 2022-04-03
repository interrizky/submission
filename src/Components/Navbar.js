import React from 'react';

/* logo */
import NavbarLogo from '../Assets/Images/ejavec-logo.svg'
/* Universal Cookie */
import Cookies from 'universal-cookie'
const cookies = new Cookies()


class Navbar extends React.Component {
  render() {
    return(
      <React.Fragment>
        <nav
          className="navbar"
          style={{ backgroundColor: "rgb(255, 167, 52)" }}
        >
          <a className="navbar-brand" href="/home">
            <img
              src={ NavbarLogo }
              width="90"
              height="30"
              className="d-inline-block align-top"
              alt="EJAVEC Logo"
              style={{ marginLeft: "10%" }}
            />
          </a>

          <form className="form-inline" style={{ justifyContent: "end", marginRight: "15px"}}>
            <button
              id="btnLogout"
              type="button"
              className="btn btn-outline-dark"
              onClick={ this.clickLogout }
            >
              Logout
            </button>
          </form>
        </nav>    

        <div
          id="row-alert"
          className="alert alert-success show my-2"
          role="alert"
        >
          Selamat Datang, {cookies.get('udatxu').name}
        </div>
      </React.Fragment>
    )
  }

  clickLogout = (event) => {
    event.preventDefault();
    /* remove cookies */
    cookies.remove('udatxu', { path: '/' })
    /* refresh page and hopes it directly went to Login Page */
    window.location.reload()    
  }
}

export default Navbar