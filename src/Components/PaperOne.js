import React from 'react'
import Axios from 'axios'
import Navbar from './Navbar'

let formData = new FormData()

class PaperOne extends React.Component {
  state = {
    jenis_paper: localStorage.getItem('jenis_paper_text'),
    kategori: localStorage.getItem('kategori'),
    keikutsertaan: localStorage.getItem('keikutsertaan'),
    sub_tema: localStorage.getItem('sub_tema_text'),
    judul: "",
  }

  onSubmit = (event) => {
    event.preventDefault()

    formData.append("jenis_paper_text", this.state.jenis_paper)
    formData.append('kategori', this.state.kategori)
    formData.append('keikutsertaan', this.state.keikutsertaan)
    formData.append('sub_tema_text', this.state.sub_tema)
    formData.append("judul", this.state.judul)    

    // for(let pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }

    Axios({
      url: 'http://localhost:2020/savethepaper',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,      
      onUploadProgress: function(progressEvent) {
        Math.round( (progressEvent.loaded * 100) / progressEvent.total )
      }
    })    
  }

  judul_change = (event) => {
    event.preventDefault()
    this.setState({ judul: event.target.value })
  }

  paper_file_change = (event) => {
    event.preventDefault()
    formData.append("paper_file", event.target.files[0])
  }

  cv_file_change = (event) => {
    event.preventDefault()
    formData.append("cv_file", event.target.files[0])
  }

  pernyataan_file_change = (event) => {
    event.preventDefault()
    formData.append("pernyataan_file", event.target.files[0])
  }

  lampiran_file_change = (event) => {
    event.preventDefault()
    formData.append("lampiran_file", event.target.files[0])    
  }

  render() {
    return(
      <React.Fragment>
        <Navbar />
        <form action="/post-individu" method="POST" encType="multipart/form-data">
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
              <textarea autoFocus type="text" className="form-control" id="judul" name="judul" value={this.state.value} onChange={this.judul_change} />
            </div>      
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
            { localStorage.getItem('jenis_paper_text') === 'Regional Economic Modeling Paper' ? 
              <React.Fragment>
                <div className="form-group mb-2">
                  <label htmlFor="select-files-3">File Lampiran (Max 8MB), format file .pdf, .doc atau .docx</label>
                </div>
                <div className="form-group mb-2">
                  <input className="form-control" type="file" name="lampiran_file" id="lampiran_file" onChange={this.lampiran_file_change} />
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