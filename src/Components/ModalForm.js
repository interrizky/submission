import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

let lookup = {
  'General': [
    { id: '1', text: 'Industri Pengolahan' },
    { id: '2', text: 'Agrikultur' },
    { id: '3', text: 'Pariwisata' },
    { id: '4', text: 'Perdagangan Domestik dan/atau Internasional' },
    { id: '5', text: 'Pergudangan dan Transportasi (Logistik)' },
    { id: '6', text: 'Inflasi dan Stabilitas Harga' }
  ],
  'Modeling': [
    // { id: '6', text: 'Model Proyeksi/Forecasting/Determinan Pertumbuhan Ekonomi Jawa Timur Dan Turunannya (Sisi Permintaan).' },
    // { id: '7', text: 'Model Proyeksi/Forecasting/Determinan Pertumbuhan Ekonomi Jawa Timur Dan Turunannya (Sisi Penawaran).' },
    // { id: '8', text: 'Simulasi Berbagai Dampak Isu Strategis Terhadap Ketahanan Perekonomian Jawa Timur.' },
    // { id: '9', text: 'Simulasi Berbagai Opsi Kebijakan, Baik Kebijakan Moneter, Makroprudensial, Mikroprudensial, Fiskal, Maupun Kebijakan Pemerintah Pusat Dan Daerah, Serta Kebijakan Negara Lain Terhadap Perekonomian Jawa Timur.' },
    // { id: '10', text: 'Fundamental Pertumbuhan Ekonomi Jawa Timur Saat Ini dan Ke Depan.' }
  ],
  'Sharia': [
    // { id: '11', text: 'Food' },
    // { id: '12', text: 'Fashion'},
    // { id: '13', text: 'Finance (meliputi juga instrumen keuangan syariah)'},
    // { id: '14', text: 'Integrated Farming'},
    // { id: '15', text: 'Renewable Energy'},
    // { id: '16', text: 'Fundutainment (industri kreatif meliputi aplikasi, games, film, musik, arsitektur, desain dan seni pertunjukan)'},
    // { id: '17', text: 'Funtrepreneur (jasa/properti/socialpreneur/travel dll)'}
  ],
}

class ModalForm extends React.Component {
  state = {
    dataValue: 'General',
  };

  handleJenisPaperChange = ({ target: { value } }) => {
    this.setState({ dataValue: value }); 
  }

  handleSubmit = (event) => {
    event.preventDefault();

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
      if( document.querySelector('#jenis_paper').value !== '' || document.querySelector('#sub_tema').value !== '' || document.querySelector('#kategori').value !== '' || document.querySelector('#keikutsertaan').value !== '' ) {
        localStorage.setItem('jenis_paper_index', document.querySelector('#jenis_paper').value);
        localStorage.setItem('jenis_paper_text', document.querySelector('#jenis_paper').options[document.querySelector('#jenis_paper').selectedIndex].text);
        localStorage.setItem('sub_tema_index', document.querySelector('#sub_tema').value);
        localStorage.setItem('sub_tema_text', document.querySelector('#sub_tema').options[document.querySelector('#sub_tema').selectedIndex].text);
        localStorage.setItem('keikutsertaan', document.querySelector('#keikutsertaan').value);

        this.state.dataValue === 'General' ? localStorage.setItem('kategori', document.querySelector('#kategori').value) : localStorage.setItem('kategori', 'Umum');

        if( document.querySelector('#keikutsertaan').value === 'Individu' ) {
          window.location.href = '/submissionone'
        } else {
          if( this.state.dataValue === 'Sharia' ) {
            window.location.href = '/submissiongrupsharia'
          } else {
            window.location.href = '/submissiongrup'
          }
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Recheck Your Input And Repeat The Process',
          icon: 'error',
          confirmButtonText: 'OKAY',
          confirmButtonColor: 'orange',            
        })
      }
    }
  }

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];

    return(
      <Modal show={this.props.isOpen} onHide={this.props.closeModal} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Paper atau Full Proposal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.state.dataValue === 'General' || this.state.dataValue === 'Modeling' ? 
          <div className="wrapper-tema">
            Tema Umum: <p className="tema-text" style={{ fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Optimalisasi Sektor Ekonomi Unggulan dan Stabilitas Harga untuk Memperkuat Ketahanan dan Akselerasi Pertumbuhan Ekonomi Jawa Timur.
            </p>
            Lingkup Penelitian:
            <p className="lingkup-text" style={{ fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Jawa Timur
            </p>            
          </div>
          : <div className="wrapper-tema">
            Tema Umum: <p className="tema-text" style={{ fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Memperkuat Peran Ekonomi Syariah Yang Inklusif Dan Berkelanjutan Dalam Mendukung Ketahanan Ekonomi Jawa Timur.
            </p> 
            </div>
          }
          <div className="wrapper-dropdown">
            <div className="form-group mb-2">
              <label htmlFor="select1">Jenis Paper</label>
              <select className="form-control" id="jenis_paper" onChange={ this.handleJenisPaperChange }>
                <option value="General">General Paper</option>
                {/* <option value="Modeling">Regional Economic Modeling Paper</option> */}
                {/* <option value="Sharia">Java Sharia Business Model</option> */}
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="select2">Sub Tema</label>
              <select className="form-control" id="sub_tema">
                <option value="" disabled>-- Pilih Sub Tema --</option>
                { options !== null ? options.map(nilaiVal => <option key={nilaiVal.id} value={nilaiVal.id}>{nilaiVal.text}</option>) : console.log("maps null") }
              </select>
            </div>
            { this.state.dataValue === 'General' ? 
              <div className="form-group mb-2">
                <label htmlFor="select3">Kategori</label>
                <select className="form-control" id="kategori">
                  <option value="" disabled>-- Pilih Kategori --</option>
                  <option value="Mahasiswa">Mahasiswa</option>
                  <option value="Umum">Umum (Non-Mahasiswa)</option>
                </select>
              </div> : null 
            }

            <div className="form-group mb-2">
              <label htmlFor="select4">Keikutsertaan</label>
              <select className="form-control" id="keikutsertaan">
                <option value="" disabled>-- Pilih Keikutsertaan --</option>
                <option value="Individu">Individu</option>
                <option value="Group">Tim atau Grup</option>
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