import React from 'react'
import { Accordion } from 'react-bootstrap'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import { Download, CheckSquare, XSquare, Search, XCircle} from 'react-feather'

const cookies = new Cookies()

class PaperFull extends React.Component {
  state = {
    dataMap: [],
    paperNumber: 0
  }

  handleInfo = (paper_code,userid_code,paper_type,paper_filePath_1,paper_fileName_1,pernyataan_filePath_1,pernyataan_fileName_1,lampiran_filePath_1,lampiran_fileName_1,cv_filePath_1,cv_fileName_1,cv_filePath_2,cv_fileName_2,cv_filePath_3,cv_fileName_3) => (event) => {
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

      window.location.href = '/details/'+paper_code
    }
  }

  handleSuccess = (name_1, email_1, title, sub_theme, paper_code) => async(event) => {
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
        url: 'https://submission-api.ejavec.org/successNotification',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + cookies.get('udatxu').token
        },
        data: JSON.stringify({ 
          data_name: name_1,
          data_title: title,
          data_subtheme: sub_theme,
          data_papercode: paper_code,
          data_email: email_1
        })
      })

      if( datax !== null || datax !== undefined ) {
        Swal.fire({
          title: 'Success!',
          text: paper_code + ' is Successfully Emailed',
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
          text: paper_code + ' is Not Emailed',
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

  handleFailed = (name_1, email_1, title, sub_theme, paper_code) => async(event) => {
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
        url: 'https://submission-api.ejavec.org/failedNotification',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + cookies.get('udatxu').token
        },
        data: JSON.stringify({
          data_name: name_1,
          data_title: title,
          data_subtheme: sub_theme,
          data_papercode: paper_code,
          data_email: email_1
        })
      })

      if( datax !== null || datax !== undefined ) {
        Swal.fire({
          title: 'Success!',
          text: paper_code + ' is Successfully Emailed',
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
          text: paper_code + ' is Not Emailed',
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
        url: 'https://submission-api.ejavec.org/fetchPaperTable',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + cookies.get('udatxu').token        
        },
        data: JSON.stringify({
          data_fetch: 'search', 
          data_role: cookies.get('udatxu').role,
          data_filter: document.querySelector('#filter').value,
          data_keyword: document.querySelector('#keyword').value
        })                   
      }).then(response => {
        this.setState({ dataMap: response.data.result, paperNumber: response.data.number })
      }) 
    }       
  }
  
  handleClearFilter = (event) => {
    event.preventDefault()

    window.location.reload()
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchPaperTable',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ dataMap: response.data.result, paperNumber: response.data.number })
    })
  }

  render() {
    return(
      <React.Fragment>
        <div className="wrapper-filter mx-2 my-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Search & Filter</Accordion.Header>
              <Accordion.Body>
                <div className="row searching d-flex">
                  <div className="form-inline justify-content-center">
                    <div className="input-group">
                      <select className="form-control dropdown mx-2" id="filter" defaultValue={""}>
                        <option value="" defaultValue="" disabled>-- Pilih Filter Pencarian --</option>
                        <option value="kodepaper">Kode Paper</option>
                        <option value="nama">Nama</option>
                        <option value="judul">Judul</option>
                      </select>                      
                      <input type="text" className="form-control keyword mx-2" id="keyword" name="keyword" placeholder="Keyword Here.." />
                      <div className="wrapper-button-navigation">
                        <button type="button" name="btnSearch" id="btnSearch" className="btn btn-md btn-secondary mx-2" onClick= {this.handleFilter}>
                          <Search />
                        </button>
                        <button type="button" name="btnReset" id="btnReset" className="btn btn-md btn-danger mx-2" onClick= {this.handleClearFilter}>
                          <XCircle />
                        </button>
                      </div>                 
                    </div>           
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>          
        </div>

        <div className="wrapper-table mx-2 my-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><i>Jumlah Full Paper : { this.state.paperNumber } Paper(s)</i></Accordion.Header>
              <Accordion.Body>
                <div className="wrapper-table-full-paper table-responsive m-2" style={{ overflow: "auto", height: "500px" }}>
                  <table className="table table-bordered table-hover table-light mb-0">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-center" style={{ width: "4%" }}>#</th>
                        <th scope="col" className="text-center" style={{ width: "11%" }}>Kode Paper</th>
                        <th scope="col" className="text-center" style={{ width: "10%" }}>Nama & Email</th>
                        <th scope="col" className="text-center" style={{ width: "30%" }}>Judul & Sub Tema</th>
                        <th scope="col" className="text-center" style={{ width: "5%" }}>Paper Files</th>                    
                        <th scope="col" className="text-center" style={{ width: "10%" }}>Jenis Paper</th>                        
                        <th scope="col" className="text-center" style={{ width: "5%" }}>Kategori & Partisipasi</th>
                        <th scope="col" className="text-center" style={{ width: "10%" }}>Tanggal Submit</th>
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
                            <td className="text-left">
                              { result.name_1 } 
                              <br/>
                              { '(' + result.email_1 + ')' }
                            </td> 
                            <td className="text-left">
                              <div className="wrapper-judul" style={{ fontStyle: 'italic' }}> { result.title } </div>
                              <hr/>
                              <b>Sub Tema : </b> { result.sub_theme }                      
                            </td>
                            <td className="text-center">
                              <button type="button" id="btnPaperDownload" className="btn-success form-control" onClick={ this.handleInfo(result.paper_code,result.userid_code,result.paper_type,result.paper_filePath_1,result.paper_fileName_1,result.pernyataan_filePath_1,result.pernyataan_fileName_1,result.lampiran_filePath_1,result.lampiran_fileName_1,result.cv_filePath_1,result.cv_fileName_1,result.cv_filePath_2,result.cv_fileName_2,result.cv_filePath_3,result.cv_fileName_3) }>
                                <Download />
                              </button>                      
                            </td>                    
                            <td className="text-left">{ result.paper_type }</td>                                                                  
                            <td className="text-center">
                              { result.category }
                              <hr/>
                              { result.participation_type }                      
                            </td>
                            <td className="text-center">{ result.submission_date }</td>
                            <td className="text-center">
                              {
                                (result.paper_status === '-') ? 
                                <React.Fragment>
                                  <button type="button" id="btnLolos" className="btn-warning form-control" onClick={ this.handleSuccess(result.name_1, result.email_1, result.title, result.sub_theme, result.paper_code) }>
                                    Lolos? <CheckSquare />
                                  </button>
                                  <hr/>    
                                  <button type="button" id="btnTidakLolos" className="btn-outline-danger form-control" onClick={ this.handleFailed(result.name_1, result.email_1, result.title, result.sub_theme, result.paper_code) }>
                                    Tidak? <XSquare />
                                  </button>   
                                </React.Fragment> : 
                                <React.Fragment>
                                  Status Paper : { result.paper_status === 'lolos' ? "LOLOS" : "TIDAK LOLOS" }
                                </React.Fragment>                        
                              }
                            </td>
                          </tr>                  
                        )
                      }) : null
                    }
                    </tbody>
                  </table>
                </div>    
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>            
        </div>

  
      </React.Fragment>

    )
  }
}

export default PaperFull