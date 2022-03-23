import React from 'react'

// logo
import NavbarLogo from '../Assets/Images/ejavec-logo.svg'
// button react-feather
import { Search, XCircle, RefreshCw } from 'react-feather'


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
          Selamat Datang, User
        </div>

        <div className="wrapper-navigation d-flex my-3">
          <div className="navigation-add p-0 col-md-2">
            <form className="form-inline">
              <button
                type="button"
                name="btnAdd"
                id="btnAdd"
                className="btn btn-md btn-outline-primary mr-4"
              >
                Add Paper
              </button>
            </form>
          </div>

          <div className="navigation-search p-0 col-md-6">
            <form className="form-inline justify-content-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search"
                  id="search"
                  name="search"
                  placeholder="Search Paper Here.."
                />
                <div className="wrapper-button-navigation">
                  <button
                    type="button"
                    name="btnSearch"
                    id="btnSearch"
                    className="btn btn-md btn-outline-secondary mx-2"
                  >
                    <Search />
                  </button>
                  <button
                    type="button"
                    name="btnReset"
                    id="btnReset"
                    className="btn btn-md btn-outline-danger"
                  >
                    <XCircle />
                  </button>
                  <button
                    type="button"
                    name="btnRefresh"
                    id="btnRefresh"
                    className="btn btn-md btn-outline-success mx-2"
                  >
                    <RefreshCw />
                  </button>  
                </div>                 
              </div>           
            </form>
          </div>

          <div className="pagination justify-content-end col-md-4 p-0">
            <ul className="pagination pagination-list pagination-md m-0 p-0">
              <li className="page-item">
                <a className="page-link" href="/#">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="/#">1</a></li>
              <li className="page-item"><a className="page-link" href="/#">2</a></li>
              <li className="page-item"><a className="page-link" href="/#">Next</a></li>
            </ul>
          </div>
        </div>        

      <div
        className="wrapper-table-product table-responsive my-3"
        style={{ overflow: "auto", height: "550px" }}
      >
        <table className="table table-bordered table-hover table-light mb-0">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center" style={{ width: "5%" }}>#</th>
              <th scope="col" className="text-center">Judul</th>              
              <th scope="col" className="text-center" style={{ width: "10%" }}>Nama Kelompok</th>              
              <th scope="col" className="text-center" style={{ width: "10%" }}>Kategori</th>
              <th scope="col" className="text-center" style={{ width: "10%" }}>Jenis</th>
              <th scope="col" className="text-center" style={{ width: "10%" }}>Status</th>
              <th scope="col" className="text-center" style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody className="table-body" id="table-body"></tbody>
        </table>
      </div>

      </React.Fragment>
    )
  }
}

export default Navbar