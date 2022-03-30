import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'


class ModalForm extends React.Component {
  render() {
    return(
      <Modal show={this.props.isOpen} onHide={this.props.closeModal} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Paper atau Full Proposal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper-tema">
            Tema Umum: <p className="tema-text" style={{ fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Akselerasi Pemulihan Ekonomi dan Sosial Jawa Timur Pada Era Normal Baru              
            </p>
            Lingkup Penelitian:
            <p className="lingkup-text" style={{ fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Jawa Timur dan Ketekaitannya dengan Provinsi Lain.
            </p>            
          </div>
          <div className="wrapper-dropdown">
            <div className="form-group mb-2">
              <label htmlFor="select1">Jenis Paper</label>
              <select className="form-control" id="jenis_paper">
                <option value="" disabled>-- Select Inquiry --</option>
                <option value="general">General Paper</option>
                <option value="modeling">Regional Economic Modeling Paper</option>
                <option value="sharia">Java Sharia Business Model</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="select2">Sub Tema</label>
              <select className="form-control" id="sub_tema">
                <option value="" disabled>-- Select Inquiry --</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="select3">Kategori</label>
              <select className="form-control" id="kategori">
                <option value="" disabled>-- Select Inquiry --</option>
                <option value="mahasiswa">Mahasiswa</option>
                <option value="umum">Umum (Non-Mahasiswa)</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="select4">Keikutsertaan</label>
              <select className="form-control" id="keikutsertaan">
                <option value="" disabled>-- Select Inquiry --</option>
                <option value="individu">Individu</option>
                <option value="group">Tim atau Grup</option>
              </select>
            </div>            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ this.handleSubmit }>
            Submit 
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalForm