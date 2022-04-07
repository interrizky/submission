import React from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

/* import components */
import Navbar from './Navbar'
const cookies = new Cookies()

let formData = new FormData()

class PaperOne extends React.Component {
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
    lampiran_status: false
  }

  judul_change = (event) => {
    event.preventDefault()

    if( event.target.value !== null || event.target.value !== '' ) {
      this.setState({ judul: event.target.value })
      console.log(this.state.judul)
    }
  }

  paper_file_change = (event) => {
    event.preventDefault()

    console.log(event.target)

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      this.setState({ paper_status: true }, () => {
        console.log(this.state.paper_status)
      })      
      formData.append('paper_file', event.target.files[0])
    }
  }

  cv_file_change = (event) => {
    event.preventDefault()
    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('cv_file', event.target.files[0])
      this.setState({ cv_status: true }, () => {
        console.log(this.state.cv_status)
      })
    }

  }

  pernyataan_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('pernyataan_file', event.target.files[0])
      this.setState({ pernyataan_status: true }, () => {
        console.log(this.state.pernyataan_status)
      })
    }

  }

  lampiran_file_change = (event) => {
    event.preventDefault()

    if( event.target.files[0] !== null || event.target.files[0] !== ''  ) {
      formData.append('lampiran_file', event.target.files[0])
      this.setState({ lampiran_status: true }, () => {
        console.log(this.state.lampiran_status)        
      })
    }

  }

  onSubmit = async(event) => {
    event.preventDefault()

    formData.append("jenis_paper_text", this.state.jenis_paper)
    formData.append('sub_tema_text', this.state.sub_tema)
    formData.append('kategori', this.state.kategori)
    formData.append('keikutsertaan', this.state.keikutsertaan)    
    formData.append("judul", this.state.judul)

    console.log(this.state)

    if( this.state.jenis_paper_index === 'General' && this.state.lampiran_status === false && ( this.state.judul === '' || this.state.paper_status === false || this.state.cv_status === false || this.state.pernyataan_status === false ) ) {
      Swal.fire({
        title: 'Error!',
        text: 'Pastikan Kembali Pengisian Anda! Error1',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: 'Orange',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      }).then(result =>  {
        if(result.isConfirmed) {
          // console.log(this.state)
          // for(let pair of formData.entries()) {
          //   console.log(pair[0]+ ', ' + pair[1]); 
          // }
          localStorage.removeItem('jenis_paper_index');
          localStorage.removeItem('jenis_paper_text');
          localStorage.removeItem('sub_tema_index');
          localStorage.removeItem('sub_tema_text');
          localStorage.removeItem('kategori');
          localStorage.removeItem('keikutsertaan');
          window.location.href = '/home'
        }
      }) 
    } else if( this.state.jenis_paper_index === 'Modeling' && (this.state.judul === '' || this.state.paper_status === false || this.state.cv_status === false || this.state.pernyataan_status === false || this.state.lampiran_status === false) ) {
        Swal.fire({
          title: 'Error!',
          text: 'Pastikan Kembali Pengisian Anda! Error2',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: 'Orange',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false            
        }).then(result =>  {
          if(result.isConfirmed) {
            // console.log(this.state)
            // for(let pair of formData.entries()) {
            //   console.log(pair[0]+ ', ' + pair[1]); 
            // }
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
      /* send to the server */
      const datax = await Axios({
        url: 'http://localhost:2020/savethepaper',
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data",
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

  render() {
    return(
      <React.Fragment>
        <Navbar />
        {/* <form id="paperone" action="/post-individu" method="POST" encType="multipart/form-data"> */}
        <form id="paperone">
          <div className="wrapper-form">
            <div className="row row-satu mb-2">
              <div className="form-group col-lg-4 col-md-4 col-sm-4">
                <label htmlFor="jenis_paper">Jenis Paper</label>
                <input type="text" className="form-control" id="jenis_paper" name="jenis_paper" value={localStorage.getItem('jenis_paper_text')} disabled />
              </div>          
              <div className="form-group col-lg-4 col-md-4 col-sm-4">
                <label htmlFor="kategori">Kategori</label>
                <input type="text" className="form-control" id="kategori" name="kategori" value={localStorage.getItem('kategori')} disabled />
              </div>
              <div className="form-group col-lg-4 col-md-4 col-sm-4">
                <label htmlFor="keikutsertaan">Keikutsertaan</label>
                <input type="text" className="form-control" id="keikutsertaan" name="keikutsertaan" value={localStorage.getItem('keikutsertaan')} disabled />
              </div>  
            </div>
            <div className="form-group mb-2">
              <label htmlFor="sub_tema">Sub Tema</label>
              <textarea type="text" className="form-control" id="sub_tema" name="sub_tema" value={localStorage.getItem('sub_tema_text')} disabled />
            </div>            
            <div className="form-group mb-4">
              <label htmlFor="judul">Judul Paper</label>
              <textarea autoFocus type="text" className="form-control" id="judul" name="judul" value={this.state.judul} onChange={this.judul_change} required />
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
              <label htmlFor="select-files-2">File CV Pendaftar, format file .pdf, .doc atau .docx</label>
            </div>
            <div className="form-group mb-2">
              <input className="form-control" type="file" name="cv_file" id="cv_file" onChange={this.cv_file_change} required />
            </div>                  
            <div className="form-group mb-2">
              <label htmlFor="select-files-3">File Surat Pernyataan (Max 8MB), format file .pdf, .doc atau .docx</label>
            </div>
            <div className="form-group mb-2">
              <input className="form-control" type="file" name="pernyataan_file" id="pernyataan_file" onChange={this.pernyataan_file_change} required />
            </div> 
            { localStorage.getItem('jenis_paper_text') === 'Regional Economic Modeling Paper' ? 
              <React.Fragment>
                <div className="form-group mb-2">
                  <label htmlFor="select-files-3">File Lampiran (Max 8MB), format file .pdf, .doc atau .docx</label>
                </div>
                <div className="form-group mb-2">
                  <input className="form-control" type="file" name="lampiran_file" id="lampiran_file" onChange={this.lampiran_file_change} required />
                </div>            
              </React.Fragment> : null        
            }                            
          </div>

        </form>
        <div className="wrapper-button">
          <div className="input-group mt-4" style={{ alignItems: "center" }}>
            <button type="submit" id="btnLogin" className="btn-primary form-control" onClick={ this.onSubmit }>
              SAVE PAPER
            </button>        
          </div>
          <div className="input-group my-1" style={{ alignItems: "center" }}>
            <button type="button" id="btnRegister" className="btn-outline-secondary form-control" onClick={ this.clickBack }>
              CANCEL
            </button>        
          </div>     
        </div>        
      </React.Fragment>
    )    
  }

  clickBack = (event) => {
    event.preventDefault()

    localStorage.removeItem('jenis_paper_index');
    localStorage.removeItem('jenis_paper_text');
    localStorage.removeItem('sub_tema_index');
    localStorage.removeItem('sub_tema_text');
    localStorage.removeItem('kategori');
    localStorage.removeItem('keikutsertaan');
    window.location.href = '/home'
  }  
}

export default PaperOne