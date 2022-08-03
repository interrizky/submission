import React from 'react'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import { Download } from 'react-feather'
import { saveAs } from 'file-saver'
import Navbar from './Navbar'

const cookies = new Cookies()

class FileDetails extends React.Component {
  state = {
    paper_code: localStorage.getItem('paper_code'),
    userid_code: localStorage.getItem('userid_code'),
    paper_type: localStorage.getItem('paper_type'),
    paper_filePath_1: localStorage.getItem('paper_filePath_1'),
    paper_fileName_1: localStorage.getItem('paper_fileName_1'),
    pernyataan_filePath_1: localStorage.getItem('pernyataan_filePath_1'),
    pernyataan_fileName_1: localStorage.getItem('pernyataan_fileName_1'),
    lampiran_filePath_1: localStorage.getItem('lampiran_filePath_1'),
    lampiran_fileName_1: localStorage.getItem('lampiran_fileName_1'),
    cv_filePath_1: localStorage.getItem('cv_filePath_1'),
    cv_fileName_1: localStorage.getItem('cv_fileName_1'),
    cv_filePath_2: localStorage.getItem('cv_filePath_2'),
    cv_fileName_2: localStorage.getItem('cv_fileName_2'),
    cv_filePath_3: localStorage.getItem('cv_filePath_3'),
    cv_fileName_3: localStorage.getItem('cv_fileName_3'),
  }

  handleDownload = (filePath, fileName) => (event) => {
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
      saveAs('https://submission-api.ejavec.org/'+filePath, fileName)
    }
  }  

  render() {
    return(
      <React.Fragment>
        { cookies.get('udatxu').role === 'peserta' ? <Navbar /> : null }
        
        <div className="card">
          <h5 className="card-header text-center">{ this.state.paper_code }</h5>
          <div className="card-body">
            <div className="row wrapper-isian">
              <div className="wrapper-kiri col-md-6">
                <div className="form-group mb-2">
                  <label className="col-md-6" htmlFor="files-1">File Paper Terupload</label>
                </div>
                <div className="form-group mb-2">
                  <button type="button" id="btnPaperDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.paper_filePath_1, this.state.paper_fileName_1) }>
                    Download File Paper &nbsp; <Download />
                  </button>
                </div>                       
                <div className="form-group mb-2">
                  <label className="col-md-6" htmlFor="files-3">File Pernyataan Terupload</label>
                </div>
                <div className="form-group mb-2">
                  <button type="button" id="btnPernyataanDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.pernyataan_filePath_1, this.state.pernyataan_fileName_1) }>
                    Download File Pernyataan &nbsp; <Download />
                  </button>
                </div>
                { this.state.paper_type === 'Regional Economic Modeling Paper' ? 
                  <React.Fragment>
                  <div className="form-group mb-2">
                    <label className="col-md-6" htmlFor="files-3">File Lampiran Terupload</label>
                  </div>
                  <div className="form-group mb-2">
                    <button type="button" id="btnLampiranDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.lampiran_filePath_1, this.state.lampiran_fileName_1) }>
                      Download File Lampiran &nbsp; <Download />
                    </button>
                  </div>    
                  </React.Fragment> : null        
                }  
              </div>
              <div className="wrapper-kanan col-md-6">
                <div className="form-group mb-2">
                  <label className="col-md-6" htmlFor="files-2">File CV Peserta-1 Terupload</label>
                </div>
                <div className="form-group mb-2">
                  <button type="button" id="btnCvDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.cv_filePath_1, this.state.cv_fileName_1) }>
                    Download File CV Peserta Pertama &nbsp; <Download />
                  </button>
                </div>                
                {
                  (this.state.cv_fileName_2 !== "undefined" && this.state.cv_filePath_2 !== "undefined") ?
                  <React.Fragment>
                    <div className="form-group mb-2">
                      <label htmlFor="files-2">File CV Peserta-2 Terupload</label>
                    </div>
                    <div className="form-group mb-2">
                      <button type="button" id="btnCv2Download" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.cv_filePath_2, this.state.cv_fileName_2) }>
                        Download File CV Peserta Kedua &nbsp; <Download />
                      </button>
                    </div>                  
                  </React.Fragment> : null
                }
                { 
                  ( (this.state.paper_type !== 'Java Sharia Business Model') && ((this.state.cv_fileName_3 !== "undefined" && this.state.cv_filePath_3 !== "undefined") || (this.state.cv_fileName_3 !== "-" && this.state.cv_filePath_3 !== "-")) ) ?
                  <React.Fragment>
                    <div className="form-group mb-2">
                      <label htmlFor="files-2">File CV Peserta-3 Terupload</label>
                    </div>
                    <div className="form-group mb-2">
                      <button type="button" id="btnCv3Download" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.cv_filePath_3, this.state.cv_fileName_3) }>
                        Download File CV Peserta Ketiga &nbsp; <Download />
                      </button>
                    </div>
                  </React.Fragment> : null
                }                            
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="input-group my-2" style={{ alignItems: "center" }}>
              <button type="button" id="btnCancel" className="btn-danger form-control" onClick={ this.clickBack }>
                CANCEL
              </button>        
            </div>            
          </div>
        </div>               
      </React.Fragment>
    )
  }

  clickBack = (event) => {
    event.preventDefault()

    localStorage.removeItem('paper_code')
    localStorage.removeItem('userid_code')
    localStorage.removeItem('paper_type')
    localStorage.removeItem('paper_filePath_1')
    localStorage.removeItem('paper_fileName_1')
    localStorage.removeItem('pernyataan_filePath_1')
    localStorage.removeItem('pernyataan_fileName_1')
    localStorage.removeItem('lampiran_filePath_1')
    localStorage.removeItem('lampiran_fileName_1')
    localStorage.removeItem('cv_filePath_1')
    localStorage.removeItem('cv_fileName_1')
    localStorage.removeItem('cv_filePath_2')
    localStorage.removeItem('cv_fileName_2')
    localStorage.removeItem('cv_filePath_3')
    localStorage.removeItem('cv_fileName_3')     
    
    if( cookies.get('udatxu').role === 'peserta' ) {
      window.location.href = '/home'
    } else {
      this.state.paper_type === 'Java Sharia Business Model' ? window.location.href = '/sharia' : window.location.href = '/fullpaper'
    }    
  }
}

export default FileDetails