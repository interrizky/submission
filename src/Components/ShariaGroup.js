import React from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import ScaleLoader from "react-spinners/ScaleLoader"

/* import components */
import Navbar from './Navbar'
const cookies = new Cookies()

/* style for spinners */
const override = {
  position: "fixed", 
  top: "50%", 
  left: "50%", 
  transform: "translate(-50%, -50%)" 
}

let formData = new FormData()

class ShariaGroup extends React.Component {
  state = {
    jenis_paper: localStorage.getItem('jenis_paper_text'),
    jenis_paper_index: localStorage.getItem('jenis_paper_index'),
    sub_tema: localStorage.getItem('sub_tema_text'),
    sub_tema_index: localStorage.getItem('sub_tema_index'),
    kategori: localStorage.getItem('kategori'),
    keikutsertaan: localStorage.getItem('keikutsertaan'),
    judul: '',
    paper_status: false,
    cv_status: false,
    pernyataan_status: false,
    lampiran_status: false,
    nama_2: '',
    instansi_2: '',
    phone_2: '',
    cv_2_status: false,
    loader_status: false,
  }

  judul_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' ) {
      this.setState({ judul: event.target.value })
    }
  }

  paper_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('paper_file', event.target.files[0])
      this.setState({ paper_status: true })      
    }
  }

  cv_file_change = (event) => {
    event.preventDefault()
    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('cv_file', event.target.files[0])
      this.setState({ cv_status: true })
    }
  }

  pernyataan_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('pernyataan_file', event.target.files[0])
      this.setState({ pernyataan_status: true })
    }
  }

  lampiran_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('lampiran_file', event.target.files[0])
      this.setState({ lampiran_status: true })
    }
  }

  nama_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' ) {
      this.setState({ nama_2: event.target.value })
    }
  }

  instansi_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' ) {
      this.setState({ instansi_2: event.target.value })
    }
  }

  phone_2_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' ) {
      this.setState({ phone_2: event.target.value })
    }
  }  
  
  cv_2_file_change = (event) => {
    event.preventDefault()
    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('cv_2_file', event.target.files[0])
      this.setState({ cv_2_status: true })
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
      if( this.state.nama_2 === '' || this.state.instansi_2 === '' || this.state.phone_2 === '' || this.state.cv_2_status === false ) {
          Swal.fire({
            title: 'Error!',
            text: 'Pastikan Kembali Pengisian Anda! Error3',
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
      } else {
        /* set loader to active */
        this.setState({ loader_status: true })
        /* send to the server */
        formData.append("jenis_paper_text", this.state.jenis_paper)
        formData.append('sub_tema_text', this.state.sub_tema)
        formData.append('kategori', this.state.kategori)
        formData.append('keikutsertaan', this.state.keikutsertaan)    
        formData.append("judul", this.state.judul)
        formData.append("nama_2", this.state.nama_2.toUpperCase())
        formData.append("instansi_2", this.state.instansi_2)
        formData.append("phone_2", this.state.phone_2)

        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/savePaperGroup',
          method: 'POST',
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": 'Bearer ' + cookies.get('udatxu').token
          },
          data: formData,
          params: {
            userid_code: this.useridInput.value,
            name: this.nameInput.value,
            phone: this.phoneInput.value,
            organization: this.organizationInput.value
          }
        })

        /* response from the server */
        if( datax.data.status === 'success' ) {
          this.setState({ loader_status: false })
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
              localStorage.removeItem('jenis_paper_index');
              localStorage.removeItem('jenis_paper_text');
              localStorage.removeItem('sub_tema_index');
              localStorage.removeItem('sub_tema_text');
              localStorage.removeItem('kategori');
              localStorage.removeItem('keikutsertaan');
              window.location.href = '/home'
            }
          })
        } else {
          this.setState({ loader_status: false })
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
              localStorage.removeItem('jenis_paper_index');
              localStorage.removeItem('jenis_paper_text');
              localStorage.removeItem('sub_tema_index');
              localStorage.removeItem('sub_tema_text');
              localStorage.removeItem('kategori');
              localStorage.removeItem('keikutsertaan');
              window.location.href = '/home'
            }
          })
        }      
      }

      /* reset form input */
      document.querySelector('#paperone').reset()
    }
  }  

  render() {
    localStorage.removeItem('jenis_paper_index')
    localStorage.removeItem('jenis_paper_text')
    localStorage.removeItem('sub_tema_index')
    localStorage.removeItem('sub_tema_text')
    localStorage.removeItem('kategori')
    localStorage.removeItem('keikutsertaan')

    return(
      <React.Fragment>
        <Navbar />
          { (this.state.loader_status) ? 
              <ScaleLoader color="green" loading="true" height="50" width="50" cssOverride={ override } aria-label="Loading Spinner" data-testid="loader" speedMultiplier={ 1 } />
            :    
            <div className="card">
              <h5 className="card-header text-center">Paper Form Peserta Group</h5>
              <div className="card-body">
                <form id="paperone">
                  <div className="wrapper-form">
                    <div className="row row-satu mb-2">
                      <div className="form-group col-lg-4 col-md-4 col-sm-4">
                        <label htmlFor="jenis_paper">Jenis Paper</label>
                        <input type="text" className="form-control" id="jenis_paper" name="jenis_paper" defaultValue={this.state.jenis_paper} disabled />
                      </div>          
                      <div className="form-group col-lg-4 col-md-4 col-sm-4">
                        <label htmlFor="kategori">Kategori</label>
                        <input type="text" className="form-control" id="kategori" name="kategori" defaultValue={this.state.kategori} disabled />
                      </div>
                      <div className="form-group col-lg-4 col-md-4 col-sm-4">
                        <label htmlFor="keikutsertaan">Keikutsertaan</label>
                        <input type="text" className="form-control" id="keikutsertaan" name="keikutsertaan" defaultValue={this.state.keikutsertaan} disabled />
                      </div>  
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="sub_tema">Sub Tema</label>
                      <textarea type="text" className="form-control" id="sub_tema" name="sub_tema" defaultValue={this.state.sub_tema} disabled />
                    </div>            
                    <div className="form-group mb-4">
                      <label htmlFor="judul">Judul Paper</label>
                      <textarea autoFocus required type="text" className="form-control" id="judul" name="judul" value={this.state.judul} onChange={this.judul_change} />
                      <input type="hidden" name="userid" id="userid" value={cookies.get('udatxu').userid_code} ref={(input) => { this.useridInput = input }} />
                      <input type="hidden" name="name" id="name" value={cookies.get('udatxu').name} ref={(input) => { this.nameInput = input }} />
                      <input type="hidden" name="phone" id="phone" value={cookies.get('udatxu').phone} ref={(input) => { this.phoneInput = input }} />
                      <input type="hidden" name="organization" id="organization" value={cookies.get('udatxu').organization} ref={(input) => { this.organizationInput = input }} />
                    </div> 
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-1">File Paper (Max 8MB), format file .pdf., .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="paper_file" id="paper_file" onChange={this.paper_file_change} required />
                    </div>            
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-2">File Curriculum Vitae (CV) Pendaftar, format file .pdf, .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="cv_file" id="cv_file" onChange={this.cv_file_change} required />
                    </div>                  
                    <div className="form-group mb-2">
                      <label htmlFor="select-files-3">File Surat Pernyataan / Statement Letter (Max 8MB), format file .pdf, .doc atau .docx</label>
                    </div>
                    <div className="form-group mb-2">
                      <input className="form-control" type="file" name="pernyataan_file" id="pernyataan_file" onChange={this.pernyataan_file_change} required />
                    </div> 
                    <div id="row-alert" className="alert alert-info show my-4" role="alert">
                      Field Peserta Kedua <i><b>Wajib</b></i> Diisi
                    </div>                
                    <div className="wrapper-peserta-2">
                      <h4 className="header-peserta-2" style={{ textAlign: "center" }}> Peserta Kedua </h4>
                      <div className="form-group mb-2">
                        <label htmlFor="nama_2">Nama Peserta Kedua</label>
                        <input required type="text" className="form-control" id="nama_2" name="nama_2" value={this.state.nama_2} onChange={this.nama_2_change} />
                      </div>                  
                      <div className="form-group mb-2">
                        <label htmlFor="instansi_2">Nama Instansi Peserta Kedua</label>
                        <input required type="text" className="form-control" id="instansi_2" name="instansi_2" value={this.state.instansi_2} onChange={this.instansi_2_change} />
                      </div>                                         
                      <div className="form-group mb-2">
                        <label htmlFor="phone_2">Nomor Handphone Aktif Peserta Kedua</label>
                        <input required type="text" className="form-control" id="phone_2" name="phone_2" value={this.state.phone_2} onChange={this.phone_2_change} />
                      </div>                                                             
                      <div className="form-group mb-2">
                        <label htmlFor="select-cv-files-2">File CV Peserta Kedua, format file .pdf, .doc atau .docx</label>
                      </div>
                      <div className="form-group mb-2">
                        <input required className="form-control" type="file" name="cv_2_file" id="cv_2_file" onChange={this.cv_2_file_change} />
                      </div>                       
                    </div>            
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="wrapper-button">
                  <div className="input-group mt-2" style={{ alignItems: "center" }}>
                    <button type="submit" id="btnLogin" className="btn-success form-control" onClick={ this.onSubmit }>
                      SAVE PAPER
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
          }
      </React.Fragment>
    )    
  }

  clickBack = (event) => {
    event.preventDefault()
    
    window.location.href = '/home'
  }  
}

export default ShariaGroup