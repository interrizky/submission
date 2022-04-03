import React from 'react'
import Axios from 'axios'
import Navbar from './Navbar'

class PaperOne extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <form>
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
              <textarea autoFocus type="text" className="form-control" id="judul" name="judul" />
            </div>      

            <div className="form-group mb-2">
              <label htmlFor="select-files-1">File Paper (Max 8MB), format file .pdf., .doc atau .docx</label>
            </div>
            <div className="form-group mb-2">
              <input className="form-control" type="file" name="paper_file" id="paper_file" required/>
            </div>            
            <div className="form-group mb-2">
              <label htmlFor="select-files-2">File CV Pendaftar, format file .pdf, .doc atau .docx</label>
            </div>
            <div className="form-group mb-2">
              <input className="form-control" type="file" name="cv_file" id="cv_file" required/>
            </div>                  
            <div className="form-group mb-2">
              <label htmlFor="select-files-3">File Surat Pernyataan (Max 8MB), format file .pdf, .doc atau .docx</label>
            </div>
            <div className="form-group mb-4">
              <input className="form-control" type="file" name="pernyataan_file" id="pernyataan_file" required/>
            </div> 
            { localStorage.getItem('jenis_paper_text') === 'Regional Economic Modeling Paper' ? 
              <React.Fragment>
                <div className="form-group mb-2">
                  <label htmlFor="select-files-3">File Lampiran (Max 8MB), format file .pdf, .doc atau .docx</label>
                </div>
                <div className="form-group mb-4">
                  <input className="form-control" type="file" name="lampiran_file" id="lampiran_file" required/>
                </div>            
              </React.Fragment> : null        
            }                            
          </div>

        </form>
        <div className="wrapper-button">
          <div className="input-group mb-1" style={{ alignItems: "center" }}>
            <button type="submit" id="btnLogin" className="btn-primary form-control" onClick={ this.onSubmit }>
              SAVE PAPER
            </button>        
          </div>
          <div className="input-group mb-1" style={{ alignItems: "center" }}>
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