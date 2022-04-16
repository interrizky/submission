import React from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import { saveAs } from "file-saver"
import { Download } from 'react-feather'
import Navbar from './Navbar'

let formData = new FormData()
const cookies = new Cookies()

class EditShariaGroup extends React.Component {
  state = {
    userid_code: localStorage.getItem('userid_code'),
    participation_type: localStorage.getItem('participation_type'),
    paper_code: '',
    title: '',
    paper_type: '',
    sub_theme: '',
    category: '',
    upload_date: '',
    name_1: '',
    phone_1: '',
    organization_1: '',
    cv_fileName_1: '',
    cv_filePath_1: '',
    cv_fileType_1: '',
    cv_fileSize_1: '',
    paper_fileName_1: '',
    paper_filePath_1: '',
    paper_fileType_1: '',
    paper_fileSize_1: '',
    pernyataan_fileName_1: '',
    pernyataan_filePath_1: '',
    pernyataan_fileType_1: '',
    pernyataan_fileSize_1: '',
    lampiran_fileName_1: '',
    lampiran_filePath_1: '',
    lampiran_fileType_1: '',
    lampiran_fileSize_1: '',
    name_2: '',
    phone_2: '',
    organization_2: '',
    cv_fileName_2: '',
    cv_filePath_2: '',
    cv_fileType_2: '',
    cv_fileSize_2: '',
    temp_judul: '',
    temp_name_2: '',   
    temp_phone_2: '',
    temp_organization_2: '',          

  }

  judul_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' || this.state.judul !==  event.target.value ) {
      this.setState({ temp_judul: event.target.value })
    }    
  }

  paper_file_change = (event) => {
    event.preventDefault()

    if( !event.target.files[0] || event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('paper_file', event.target.files[0])   
    }
  }

  cv_file_change = (event) => {
    event.preventDefault()
    if( !event.target.files[0] || event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('cv_file', event.target.files[0])
    }
  }

  pernyataan_file_change = (event) => {
    event.preventDefault()

    if( !event.target.files[0] || event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('pernyataan_file', event.target.files[0])
    }
  }

  lampiran_file_change = (event) => {
    event.preventDefault()

    if( !event.target.files[0] || event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('lampiran_file', event.target.files[0])
    }
  }
  
  name_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' || this.state.name_2 !==  event.target.value ) {
      this.setState({ temp_nama_2: event.target.value })
    }
  }

  organization_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' || this.state.organization_2 !==  event.target.value ) {
      this.setState({ temp_organization_2: event.target.value })
    }
  }

  phone_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' || this.state.phone_2 !==  event.target.value ) {
      this.setState({ temp_phone_2: event.target.value })
    }
  }  
  
  cv_2_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('cv_2_file', event.target.files[0])
    }
  }

  onSubmit = async(event) => {
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
      if( this.state.temp_judul !== this.state.title && this.state.temp_judul !== '' && this.state.temp_judul !== null ) {      
        formData.append('temp_title', this.state.temp_judul)
      }

      if( this.state.temp_name_2 !== this.state.name_2 && this.state.temp_name_2 !== '' && this.state.temp_name_2 !== null ) {      
        formData.append('temp_name_2', this.state.temp_name_2)
      }

      if( this.state.temp_organization_2 !== this.state.organization_2 && this.state.temp_organization_2 !== '' && this.state.temp_organization_2 !== null ) {      
        formData.append('temp_organization_2', this.state.temp_organization_2)
      }

      if( this.state.temp_phone_2 !== this.state.phone_2 && this.state.temp_phone_2 !== '' && this.state.temp_phone_2 !== null ) {      
        formData.append('temp_phone_2', this.state.temp_phone_2)
      }

      formData.append('userid_code', this.state.userid_code)
      formData.append('paper_code', this.state.paper_code)
      formData.append('paper_type', this.state.paper_type)

      /* cek isi formData - console log aja */
      let res = Array.from(formData.entries(), ([key, prop]) => (
        { [key]: { "ContentLength": typeof prop === "string" ? prop.length : prop.size }}
      ))
      
      // console.log(res)
      // console.log(res.length)

      if( res.length === 3 ) {
        Swal.fire({
          title: 'Info!',
          text: 'Tidak Ada Perubahan Data',
          icon: 'info',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then(result =>  {
          if(result.isConfirmed) {
            window.location.href = '/home'
          }
        })
      } else {
        const datax = await Axios({
          url: 'http://localhost:8000/updatePaperGroup',
          method: 'POST',
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + cookies.get('udatxu').token
          },
          data: formData
        })

        if( datax.data.status === 'success' ) {
          Swal.fire({
            title: 'Success!',
            text: datax.data.message,
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor: 'Orange',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
          }).then(result =>  {
            if(result.isConfirmed) {
              window.location.href = '/home'
            }
          })        
        } else {
          Swal.fire({
            title: 'Error!',
            text: datax.data.message,
            icon: 'error',
            confirmButtonText: 'Okay',
            confirmButtonColor: 'Orange',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
          }).then(result =>  {
            if(result.isConfirmed) {
              window.location.href = '/home'
            }
          })        
        }
      }
    }    
  }

  handleDownload = (file_path_to_download, file_name_to_download) => (event) => {
    event.preventDefault()

    saveAs('http://localhost:8000/'+file_path_to_download, file_name_to_download)
  }

  componentDidMount() {
    localStorage.removeItem('userid_code')
    localStorage.removeItem('participation_type')

    Axios({
      url: 'http://localhost:8000/fetchPaper',
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({
        data_userid_code: this.state.userid_code,
        data_participation_type: this.state.participation_type
      })
    }).then(resp => {
      this.setState({
        paper_code: this.state.userid_code,
        participation_type: this.state.participation_type,
        title: resp.data.result.title,
        paper_type: resp.data.result.paper_type,
        sub_theme: resp.data.result.sub_theme,
        category: resp.data.result.category,
        upload_date: resp.data.result.upload_date,
        name_1: resp.data.result.name_1,
        phone_1: resp.data.result.phone_1,
        organization_1: resp.data.result.organization_1,
        cv_fileName_1: resp.data.result.cv_fileName_1,
        cv_filePath_1: resp.data.result.cv_filePath_1,
        cv_fileType_1: resp.data.result.cv_fileType_1,
        cv_fileSize_1: resp.data.result.cv_fileSize_1,
        paper_fileName_1: resp.data.result.paper_fileName_1,
        paper_filePath_1: resp.data.result.paper_filePath_1,
        paper_fileType_1: resp.data.result.paper_fileType_1,
        paper_fileSize_1: resp.data.result.paper_fileSize_1,
        pernyataan_fileName_1: resp.data.result.pernyataan_fileName_1,
        pernyataan_filePath_1: resp.data.result.pernyataan_filePath_1,
        pernyataan_fileType_1: resp.data.result.pernyataan_fileType_1,
        pernyataan_fileSize_1: resp.data.result.pernyataan_fileSize_1,
        lampiran_fileName_1: resp.data.result.lampiran_fileName_1,
        lampiran_filePath_1: resp.data.result.lampiran_filePath_1,
        lampiran_fileType_1: resp.data.result.lampiran_fileType_1,
        lampiran_fileSize_1: resp.data.result.lampiran_fileSize_1,
        name_2: resp.data.result.name_2,
        phone_2: resp.data.result.phone_2,
        organization_2: resp.data.result.organization_2,
        cv_fileName_2: resp.data.result.cv_fileName_2,
        cv_filePath_2: resp.data.result.cv_filePath_2,
        cv_fileType_2: resp.data.result.cv_fileType_2,
        cv_fileSize_2: resp.data.result.cv_fileSize_2     
      })   
    })
  }  

  render() {
    return(
      <React.Fragment>
        <Navbar />
        <div className="card">
          <h5 className="card-header text-center">Paper Form Peserta Tim / Group - Edit</h5>
          <div className="card-body">                      
            <form id="paperone-edit">
              <div className="wrapper-form">
                <div className="row row-satu mb-2">
                  <div className="form-group col-lg-4 col-md-4 col-sm-4">
                    <label htmlFor="jenis_paper">Jenis Paper</label>
                    <input type="text" className="form-control" id="jenis_paper" name="jenis_paper" defaultValue={this.state.paper_type} disabled />
                  </div>          
                  <div className="form-group col-lg-4 col-md-4 col-sm-4">
                    <label htmlFor="kategori">Kategori</label>
                    <input type="text" className="form-control" id="kategori" name="kategori" defaultValue={this.state.category} disabled />
                  </div>
                  <div className="form-group col-lg-4 col-md-4 col-sm-4">
                    <label htmlFor="keikutsertaan">Keikutsertaan</label>
                    <input type="text" className="form-control" id="keikutsertaan" name="keikutsertaan" defaultValue={this.state.participation_type} disabled />
                  </div>  
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="sub_tema">Sub Tema</label>
                  <textarea type="text" className="form-control" id="sub_tema" name="sub_tema" defaultValue={this.state.sub_theme} disabled />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="judul">Judul Paper</label>
                  <textarea autoFocus type="text" className="form-control" id="judul" name="judul" defaultValue={this.state.title} onChange={this.judul_change} />
                  <input type="hidden" name="userid" id="userid" defaultValue={this.state.userid_code} ref={(input) => { this.useridInput = input }} />
                  <input type="hidden" name="name" id="name" defaultValue={this.state.name_1} ref={(input) => { this.nameInput = input }} />
                  <input type="hidden" name="phone" id="phone" defaultValue={this.state.phone} ref={(input) => { this.phoneInput = input }} />
                  <input type="hidden" name="organization" id="organization" defaultValue={this.state.organization_1} ref={(input) => { this.organizationInput = input }} />
                </div>

                <div className="row row-dua mb-2">
                  <div className="wrapper-existing col-md-6">
                    <div className="form-group mb-2">
                      <label className="col-md-6" htmlFor="files-1">File Paper Terupload</label>
                    </div>
                    <div className="form-group mb-2">
                      <button type="button" id="btnPaperDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.paper_filePath_1, this.state.paper_fileName_1) }>
                        Download File Paper &nbsp; <Download />
                      </button>
                    </div>                       
                    <div className="form-group mb-2">
                      <label className="col-md-6" htmlFor="files-2">File CV Terupload</label>
                    </div>
                    <div className="form-group mb-2">
                      <button type="button" id="btnCvDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.cv_filePath_1, this.state.cv_fileName_1) }>
                        Download File CV &nbsp; <Download />
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
                  <div className="wrapper-new col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-1">File Paper (Max 8MB), format file .pdf., .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="paper_file" id="paper_file" onChange={this.paper_file_change} />
                    </div>            
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-2">File CV Pendaftar, format file .pdf, .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="cv_file" id="cv_file" onChange={this.cv_file_change} />
                    </div>                  
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-3">File Surat Pernyataan (Max 8MB), format file .pdf, .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="pernyataan_file" id="pernyataan_file" onChange={this.pernyataan_file_change} />
                    </div> 
                  </div>
                </div>

                <div className="wrapper-peserta-kedua">
                  <div className="header-peserta-kedua">
                    <h4 style={{ textAlign: 'center' }}>Peserta Kedua</h4>
                  </div>
                  <div className="row wrapper-form-kedua">
                      <div className="form-group mb-2">
                        <label htmlFor="nama_2">Nama Peserta Kedua</label>
                        <input required type="text" className="form-control" id="name_2" name="name_2" defaultValue={this.state.name_2} onChange={this.name_2_change} />
                      </div>                    
                      <div className="form-group mb-2">
                        <label htmlFor="instansi_2">Nama Instansi Peserta Kedua</label>
                        <input required type="text" className="form-control" id="organization_2" name="organization_2" defaultValue={this.state.organization_2} onChange={this.organization_2_change} />
                      </div>                                         
                      <div className="form-group mb-2">
                        <label htmlFor="phone_2">Nomor Handphone Aktif Peserta Kedua</label>
                        <input required type="text" className="form-control" id="phone_2" name="phone_2" defaultValue={this.state.phone_2} onChange={this.phone_2_change} />
                      </div>                        
                    <div className="row wrapper-file-kedua">
                      <div className="wrapper-terupload col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="files-2">File CV Peserta Kedua Terupload</label>
                        </div>
                        <div className="form-group mb-4">
                          <button type="button" id="btnCv2Download" className="btn-outline-success form-control" onClick={ this.handleDownload(this.state.cv_filePath_2, this.state.cv_fileName_2) }>
                            Download File CV Peserta Kedua &nbsp; <Download />
                          </button>
                        </div>                                    
                      </div>
                      <div className="wrapper-new-upload col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="select-cv-files-2">Edit File CV Peserta Kedua, format file .pdf, .doc atau .docx</label>
                        </div>
                        <div className="form-group mb-2">
                          <input required className="form-control" type="file" name="cv_2_file" id="cv_2_file" onChange={this.cv_2_file_change} />
                        </div> 
                      </div>
                    </div>             
                  </div>  
                </div>

              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="wrapper-button">
              <div className="input-group mt-2" style={{ alignItems: "center" }}>
                <button type="submit" id="btnLogin" className="btn-success form-control" onClick={ this.onSubmit }>
                  UPDATE PAPER
                </button>        
              </div>
              <div className="input-group my-2" style={{ alignItems: "center" }}>
                <button type="button" id="btnRegister" className="btn-outline-success form-control" onClick={ this.clickBack }>
                  CANCEL
                </button>        
              </div>     
            </div>      
          </div>          
        </div>          
      </React.Fragment>
    )    
  }

  clickBack = (event) => {
    event.preventDefault()

    window.location.href = '/home'
  }
}

export default EditShariaGroup