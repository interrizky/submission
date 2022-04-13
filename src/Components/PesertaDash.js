import React from 'react'
import Navbar from './Navbar'
import ModalForm from './ModalForm'
import Swal from 'sweetalert2'
import { FilePlus, Search, XCircle, Edit3, Send } from 'react-feather'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import date from 'date-and-time';

const cookies = new Cookies()
const now = new Date()
const submission_deadline = new Date(2022, 4, 2, 0, 0, 1)
const sharia_deadline = new Date(2022, 7, 9, 0, 0, 1)

class PesertaDash extends React.Component {
  state = {
    isOpen: false,
    dataMap: []
  }

  openModal = () => {
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
      this.setState({ isOpen: true });      
    }
  }
  
  closeModal = () => this.setState({ isOpen: false });

  handleSubmit = (event) => {
    event.preventDefault()
  }

  editPaper = (paper_code, paper_type, participation_type) => (event) => {
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
      localStorage.setItem('userid_code', paper_code)      
      localStorage.setItem('participation_type', participation_type)      
      if( participation_type === 'Individu' ){
        window.location.href = '/editone/'+paper_code
      } else {
        if( paper_type === 'Java Sharia Business Model' ) {
          window.location.href = '/editgroupsharia/'+paper_code 
        } else {
          window.location.href = '/editgroup/'+paper_code 
        }

      }
    }
  }  

  submitPaper = (paper_code, paper_type, participation_type) => async(event) => {
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
      const datax = await Axios({
        url: 'http://localhost:8080/submitPaper',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookies.get('udatxu').token
        },
        data: JSON.stringify({
          data_papercode: paper_code,
          data_participationtype: participation_type,
          data_papertype: paper_type,
          data_email: cookies.get('udatxu').email
        })
      })

      if( datax !== null || datax !== undefined ) {
        Swal.fire({
          title: 'Success!',
          text: paper_code + ' is Successfully Submitted',
          icon: 'success',
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
        Swal.fire({
          title: 'Error!',
          text: paper_code + ' is Not Submitted',
          icon: 'error',
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
      }
    }
  }   

  componentDidMount() {
    Axios({
      url: 'http://localhost:8080/fetchTable/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_userid: cookies.get('udatxu').userid_code
      })                   
    }).then(response => {
      this.setState({ dataMap: response.data.result })
    })
  }
    
  render() {
    return(
      <React.Fragment>
        <Navbar />

        <div className="wrapper-navigation d-flex my-3">
          <div className="navigation-add p-0 col-xs-2 col-sm-2 col-md-4 col-lg-4">
            <form className="form-inline">
              <button type="button" name="btnAdd" id="btnAdd" className="btn btn-md btn-outline-primary mr-4" onClick={ this.openModal }>
                Add Paper &nbsp; <FilePlus />
              </button>
              { this.state.isOpen ? <ModalForm closeModal={ this.closeModal } isOpen={ this.state.isOpen } handleSubmit={ this.handleSubmit } /> : null }
            </form>
          </div>

          <div className="navigation-search p-0 cols-xs-8 col-sm-8 col-md-4 col-lg-4">
            <form className="form-inline justify-content-center">
              <div className="input-group">
                <input type="text" className="form-control search" id="search" name="search" placeholder="Search Paper Here.." />
                <div className="wrapper-button-navigation">
                  <button type="button" name="btnSearch" id="btnSearch" className="btn btn-md btn-secondary mx-2">
                    <Search />
                  </button>
                  <button type="button" name="btnReset" id="btnReset" className="btn btn-md btn-danger" onClick= {this.clearFilter}>
                    <XCircle />
                  </button>
                </div>                 
              </div>           
            </form>
          </div>

          <div className="pagination justify-content-end p-0 col-xs-2 col-sm-2 col-md-4 col-lg-4">
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

        <div className="wrapper-table-product table-responsive my-3" style={{ overflow: "auto", height: "500px" }}>
          <table className="table table-bordered table-hover table-light mb-0">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="text-center" style={{ width: "4%" }}>#</th>
                <th scope="col" className="text-center" style={{ width: "11%" }}>Kode Paper</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>Jenis Paper</th>
                <th scope="col" className="text-center" style={{ width: "15%" }}>Sub Tema</th>                
                <th scope="col" className="text-center" style={{ width: "20%" }}>Judul</th>              
                <th scope="col" className="text-center" style={{ width: "15%" }}>Nama Peserta</th>              
                <th scope="col" className="text-center" style={{ width: "10%" }}>Kategori</th>
                <th scope="col" className="text-center" style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody className="table-body" id="table-body">
            {
              this.state.dataMap.length > 0 ? 
              this.state.dataMap.map((result, index) => {
                return(
                  <tr key={ index }>
                    <td className="text-center">{ index+1 }</td>
                    <td className="text-center">{ result.paper_code }</td> 
                    <td className="text-left">{ result.paper_type }</td>
                    <td className="text-left">{ result.sub_theme }</td>                                        
                    <td className="text-left" style={{ fontStyle: 'italic' }}>{ result.title }</td>
                    {
                      ( !result.name_2 && !result.name_3 ) ? 
                      <td className="text-center">{ result.name_1 }</td> : 
                      <td className="text-left">
                          <ol className="text-left">
                            <li className="text-left">{ result.name_1 + " (" + result.organization_1 + ")" } </li>
                            { ( result.name_2 ) ? <li className="text-left">{ result.name_2 + " (" + result.organization_2 + ")" }</li> : null }
                            { ( result.name_3 !== '-' ) ? <li className="text-left">{ result.name_3 + " (" + result.organization_3 + ")" }</li> : null }
                          </ol>
                      </td>
                    }
                    <td className="text-center">{ result.category }</td>
                    <td className="text-center">
                    { ( (result.paper_type !== 'Java Sharia Business Model' && date.format(now, 'DD/MM/YYYY HH:mm:ss') > date.format(submission_deadline, 'DD/MM/YYYY HH:mm:ss')) 
                    || (result.paper_type === 'Java Sharia Business Model' && date.format(now, 'DD/MM/YYYY HH:mm:ss') > date.format(sharia_deadline, 'DD/MM/YYYY HH:mm:ss')) ) 
                    && (result.submission_date === '-') 
                    && (result.submit_status === '-')  ? 
                      <div className="form-group wrapper-action">
                        <div className="input-group mb-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                          <button onClick={ this.editPaper(result.paper_code, result.paper_type, result.participation_type) } type="button" name="btnEdit" id="btnEdit" className="btn btn-md btn-warning" data-toggle="tooltip" data-placement="right" title="Edit Paper">
                            Edit &nbsp; <Edit3 />
                          </button>
                        </div>
                        <div className="input-group mb-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                          <button onClick={ this.submitPaper(result.paper_code, result.paper_type, result.participation_type) }type="button" name="btnSend" id="btnSend" className="btn btn-md btn-danger" data-toggle="tooltip" data-placement="right" title="Submit Paper">
                            Submit &nbsp; <Send />
                          </button>                        
                        </div>
                      </div> :
                      <div className="form-group wrapper-action">
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Submission Telah Selesai!</p>
                        { (result.submission_date !== '-' && result.submit_status === 'submit') ? <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: { result.submission_date }</p> : <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: -</p> }
                        { (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === '-') ? 
                          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Menunggu Pengumuman</p> : 
                          (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === 'lolos') ? 
                          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Lolos</p>  :
                          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Tidak Lolos</p> 
                        }
                      </div>
                    }
                    </td>
                  </tr>                  
                )
              }) : 
              <tr>

              </tr>
            }
            </tbody>
          </table>
        </div>            
      </React.Fragment>      
    )
  }

  clearFilter = (event) => {
    event.preventDefault()
    document.querySelector('#search').value = ''
    window.location.reload()    
  }
}

export default PesertaDash