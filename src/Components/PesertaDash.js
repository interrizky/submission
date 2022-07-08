import React from 'react'
import { Accordion } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import Navbar from './Navbar'
import ModalForm from './ModalForm'
import Swal from 'sweetalert2'
import { FilePlus, Search, XCircle, Edit3, Send, DownloadCloud } from 'react-feather'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import date from 'date-and-time';

const cookies = new Cookies()
const now = new Date()
const submission_deadline = new Date(2022, 4, 28, 6, 0, 0)
const sharia_deadline = new Date(2022, 6, 31, 23, 59, 59)

class PesertaDash extends React.Component {
  state = {
    isOpen: false,
    paperNumber: 0, //count paper number - place it on card
    entries: '',    
    dataMap: [],
    perPage: 5,
    offset: 0,      
    currentPage: 0    
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
        url: 'https://submission-api.ejavec.org/submitPaper',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + cookies.get('udatxu').token
        },
        data: JSON.stringify({
          data_papercode: paper_code,
          data_participationtype: participation_type,
          data_papertype: paper_type,
          data_email: cookies.get('udatxu').email
        })
      })

      if( datax.data.status === 'success' ) {
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
          text: datax.data.message + '. ' + paper_code + ' is Not Submitted. ',
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

  handleFilter = (event) => {
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
      Axios({
        url: 'https://submission-api.ejavec.org/fetchTable/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + cookies.get('udatxu').token        
        },
        data: JSON.stringify({ 
          data_fetch: 'search',
          data_userid: cookies.get('udatxu').userid_code,
          data_keyword: document.querySelector('#search').value
        })                      
      }).then(response => {
        const data = response.data.result
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map((result, index) => {
          return(
            <tr key={ this.state.offset+index+1 }>
              <td className="text-center">{ this.state.offset+index+1 }</td>
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
              { ( (result.paper_type !== 'Java Sharia Business Model' && date.format(now, 'YYYY/MM/DD HH:mm:ss') < date.format(submission_deadline, 'YYYY/MM/DD HH:mm:ss')) 
              || (result.paper_type === 'Java Sharia Business Model' && date.format(now, 'YYYY/MM/DD HH:mm:ss') < date.format(sharia_deadline, 'YYYY/MM/DD HH:mm:ss')) ) 
              && (result.submission_date === '-') && (result.submit_status === '-')  
              ? 
                <div className="form-group wrapper-action">
                  <div className="input-group my-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <button onClick={ this.editPaper(result.paper_code, result.paper_type, result.participation_type) } type="button" name="btnEdit" id="btnEdit" className="btn btn-md btn-warning" data-toggle="tooltip" data-placement="right" title="Edit Paper">
                      Edit &nbsp; <Edit3 />
                    </button>
                  </div>
                  <div className="input-group my-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <button onClick={ this.submitPaper(result.paper_code, result.paper_type, result.participation_type) }type="button" name="btnSend" id="btnSend" className="btn btn-md btn-danger" data-toggle="tooltip" data-placement="right" title="Submit Paper">
                      Submit &nbsp; <Send />
                    </button>                        
                  </div>
                </div> :
                <div className="form-group wrapper-action">
                  { (result.submission_date !== '-' && result.submit_status === 'submit') ? <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Paper Telah Tersubmit!</p> : <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Submission Telah Ditutup!</p> } 
                  { (result.submission_date !== '-' && result.submit_status === 'submit') ? <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: { result.submission_date }</p> : <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: -</p> }
                  { (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === '-') ? 
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Menunggu Pengumuman</p> : 
                    (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === 'lolos') ? 
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Lolos</p>  :
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Ditolak</p> 
                  }
                    <button type="button" id="btnPaperDownload" className="btn btn-md btn-success" onClick={ this.handleInfo(result.paper_code,result.userid_code,result.paper_type,result.paper_filePath_1,result.paper_fileName_1,result.pernyataan_filePath_1,result.pernyataan_fileName_1,result.lampiran_filePath_1,result.lampiran_fileName_1,result.cv_filePath_1,result.cv_fileName_1,result.cv_filePath_2,result.cv_fileName_2,result.cv_filePath_3,result.cv_fileName_3) }>
                      View Files &nbsp; <DownloadCloud />
                    </button>
                </div>
              }
              </td>
            </tr>             
          )                         
        })

        this.setState({
          paperNumber: response.data.number,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        })      
      })  
    } 
  }

  handleInfo = (paper_code, userid_code, paper_type, paper_filePath_1, paper_fileName_1, pernyataan_filePath_1, pernyataan_fileName_1, lampiran_filePath_1, lampiran_fileName_1, cv_filePath_1, cv_fileName_1, cv_filePath_2, cv_fileName_2, cv_filePath_3, cv_fileName_3) => (event) => {
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
      localStorage.setItem('paper_code', paper_code)      
      localStorage.setItem('userid_code', userid_code)
      localStorage.setItem('paper_type', paper_type)
      localStorage.setItem('paper_filePath_1', paper_filePath_1)
      localStorage.setItem('paper_fileName_1', paper_fileName_1)      
      localStorage.setItem('pernyataan_filePath_1', pernyataan_filePath_1)
      localStorage.setItem('pernyataan_fileName_1', pernyataan_fileName_1)            
      localStorage.setItem('lampiran_filePath_1', lampiran_filePath_1)
      localStorage.setItem('lampiran_fileName_1', lampiran_fileName_1)                  
      localStorage.setItem('cv_filePath_1', cv_filePath_1)
      localStorage.setItem('cv_fileName_1', cv_fileName_1)      
      localStorage.setItem('cv_filePath_2', cv_filePath_2)
      localStorage.setItem('cv_fileName_2', cv_fileName_2)            
      localStorage.setItem('cv_filePath_3', cv_filePath_3)
      localStorage.setItem('cv_fileName_3', cv_fileName_3)                  

      window.location.href = '/detailpaper/'+paper_code
    }
  }

  receivedData = () => {
    if( this.state.entries !== 'search' ) {
      Axios({
      url: 'https://submission-api.ejavec.org/fetchTable/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_userid: cookies.get('udatxu').userid_code
      })                   
      }).then(response => {
        const data = response.data.result
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map((result, index) => {
          return(
            <tr key={ this.state.offset+index+1 }>
              <td className="text-center">{ this.state.offset+index+1 }</td>
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
              { ( (result.paper_type !== 'Java Sharia Business Model' && date.format(now, 'YYYY/MM/DD HH:mm:ss') < date.format(submission_deadline, 'YYYY/MM/DD HH:mm:ss')) 
              || (result.paper_type === 'Java Sharia Business Model' && date.format(now, 'YYYY/MM/DD HH:mm:ss') < date.format(sharia_deadline, 'YYYY/MM/DD HH:mm:ss')) ) 
              && (result.submission_date === '-') && (result.submit_status === '-')  
              ? 
                <div className="form-group wrapper-action">
                  <div className="input-group my-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <button onClick={ this.editPaper(result.paper_code, result.paper_type, result.participation_type) } type="button" name="btnEdit" id="btnEdit" className="btn btn-md btn-warning" data-toggle="tooltip" data-placement="right" title="Edit Paper">
                      Edit &nbsp; <Edit3 />
                    </button>
                  </div>
                  <div className="input-group my-2" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <button onClick={ this.submitPaper(result.paper_code, result.paper_type, result.participation_type) }type="button" name="btnSend" id="btnSend" className="btn btn-md btn-danger" data-toggle="tooltip" data-placement="right" title="Submit Paper">
                      Submit &nbsp; <Send />
                    </button>                        
                  </div>
                </div> :
                <div className="form-group wrapper-action">
                  { (result.submission_date !== '-' && result.submit_status === 'submit') ? <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Paper Telah Tersubmit!</p> : <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Submission Telah Ditutup!</p> } 
                  { (result.submission_date !== '-' && result.submit_status === 'submit') ? <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: { result.submission_date }</p> : <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanggal Submission: -</p> }
                  { (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === '-') ? 
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Menunggu Pengumuman</p> : 
                    (result.submission_date !== '-' && result.submit_status === 'submit') && (result.paper_status === 'lolos') ? 
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Lolos</p>  :
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Status: Ditolak</p> 
                  }
                    <button type="button" id="btnPaperDownload" className="btn btn-md btn-success" onClick={ this.handleInfo(result.paper_code,result.userid_code,result.paper_type,result.paper_filePath_1,result.paper_fileName_1,result.pernyataan_filePath_1,result.pernyataan_fileName_1,result.lampiran_filePath_1,result.lampiran_fileName_1,result.cv_filePath_1,result.cv_fileName_1,result.cv_filePath_2,result.cv_fileName_2,result.cv_filePath_3,result.cv_fileName_3) }>
                      View Files &nbsp; <DownloadCloud />
                    </button>
                </div>
              }
              </td>
            </tr>             
          )                         
        })
        this.setState({
          paperNumber: response.data.number,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        })      
      })   
    }   
  }

  handlePageClick = (event) => {
    const selectedPage = event.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
        this.receivedData()
    })
  }    

  componentDidMount() {
    Swal.fire({
      icon: 'info',
      title: 'Perhatian!',
      html:
        'Klik Button \n' +
        '<button type="button" class="btn btn-md btn-outline-primary" title="Add Paper">Add Paper</button> \n' + 
        'Untuk Membuat Paper ' +      
        '<br />' +      
        'Klik Button \n' +
        '<button type="button" class="btn btn-md btn-warning" title="Edit Paper">Edit</button> \n' + 
        'Untuk Edit Paper ' +      
        '<br />' +
        'Klik Button \n' +
        '<button type="button" class="btn btn-md btn-danger" title="Submit Paper">Submit</button> \n' + 
        'Untuk Mengirimkan / Submit Paper',
      showConfirmButton: false,
      allowOutsideClick: true,
      backdrop: true,
      allowEscapeKey: true,      
      footer: '<i><p style="text-align: center; font-size: 16px; font-weight: bold;">Three Hours Too Soon Is Better Than A Minute Too Late - William Shakespeare</p></i>'
    })
    
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
      this.receivedData()
    }        
  }
    
  render() {    
    return(
      <React.Fragment>
        <Navbar />

        <div className="row wrapper-navigation d-flex my-3">
          <div className="navigation-add col-md-2">
            <form className="form-inline">
              <button type="button" name="btnAdd" id="btnAdd" className="btn btn-md btn-outline-primary mr-4" onClick={ this.openModal }>
                Add Paper &nbsp; <FilePlus />
              </button>
              { this.state.isOpen ? <ModalForm closeModal={ this.closeModal } isOpen={ this.state.isOpen } handleSubmit={ this.handleSubmit } /> : null }
            </form>
          </div>
          <div className="navigation-search col-md-10">
            <form className="form-inline justify-content-center">
              <div className="input-group">
                <input type="text" className="form-control search" id="search" name="search" placeholder="Search Judul Here.." />
                <div className="wrapper-button-navigation">
                  <button type="button" name="btnSearch" id="btnSearch" className="btn btn-md btn-secondary mx-2" onClick= {this.handleFilter}>
                    <Search />
                  </button>
                  <button type="button" name="btnReset" id="btnReset" className="btn btn-md btn-danger" onClick= {this.clearFilter}>
                    <XCircle />
                  </button>
                </div>
              </div>           
            </form>
          </div>
        </div>        

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>List Paper</Accordion.Header>
            <Accordion.Body>
              <div className="wrapper-table-product table-responsive my-3" style={{ overflow: "auto", height: "500px" }}>
                <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    pageCount={this.state.pageCount || 0}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}                
                  />
                  <br />                
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
                    { this.state.postData }
                  </tbody>
                </table>
              </div>      
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>      
      </React.Fragment>      
    )
  }

  clearFilter = (event) => {
    event.preventDefault()
    document.querySelector('#search').value = ''
    // window.location.reload()    
    this.receivedData()
  }
}

export default PesertaDash