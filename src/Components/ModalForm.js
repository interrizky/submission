import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

let lookup = {
  'General': [
    { id: '1', text: 'Strategi dan inovasi pengembangan UMKM untuk masuk dalam Global Value Chain dalam upaya mendorong akselerasi ekspor di Jawa Timur.' },
    { id: '2', text: 'Peran digitalisasi dalam mendukung akselerasi pemulihan ekonomi Jawa Timur. Diharapkan paper dapat diaplikasikan dan direplikasi, misalnya dengan menghitung dampak digitalisasi (misalnya: dengan adanya digitalisasi, berapa potensi korupsi/ fraud yang hilang, benchmarking dampak digitalasi yang dapat dihitung secara kuantitatif/ kualitatif).' },
    { id: '3', text: 'Optimalisasi peran Jawa Timur sebagai hub perdagangan kawasan timur Indonesia dan produsen utama perdagangan antar daerah dalam upaya mendorong percepatan pemulihan ekonomi Jawa Timur.' },
    { id: '4', text: 'Strategi dan inovasi akselerasi daya saing ekspor luar negeri Jawa Timur menuju Lead Export Industri Manufaktur.' },
    { id: '5', text: 'Optimalisasi kinerja sektor pariwisata (hospitality) Jawa Timur di tengah pandemi COVID-19 dan strategi mendorong pemulihannya.' },
    { id: '6', text: 'Peningkatan daya saing investasi Jawa Timur di tengah kompetisi global dan potensi divestasi.' },
    { id: '7', text: 'Strategi mendorong peningkatan pangsa ekonomi syariah di Jawa Timur melalui sinergi para pelaku ekonomi syariah Jawa Timur dan optimalisasi kawasan industri halal.'},
    { id: '8', text: 'Evaluasi kinerja Industri Pengolahan Jawa Timur dan strategi akselerasi pemulihannya dengan mempertimbangkan konsep green economy.'},
  ],
  'Modeling': [
    { id: '9', text: 'Model proyeksi/forecasting pertumbuhan ekonomi Jawa Timur dan turunannya (Sisi Permintaan)' },
    { id: '10', text: 'Model proyeksi/forecasting pertumbuhan ekonomi Jawa Timur dan turunannya (Sisi Penawaran)' },
    { id: '11', text: 'Simulasi berbagai dampak isu strategis terhadap ketahanan perekonomian Jawa Timur' },
    { id: '12', text: 'Simulasi berbagai opsi kebijakan, baik kebijakan moneter, makroprudensial, mikroprudensial, fiskal, maupun kebijakan pemerintah pusat dan daerah, serta kebijakan negara lain terhadap perekonomian Jawa Timur.' },
    { id: '13', text: 'Fundamental pertumbuhan ekonomi Jawa Timur ke depan' }
  ],
  'Sharia': [

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
          window.location.href = '/submissiongrup'
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
              <select className="form-control" id="jenis_paper" onChange={ this.handleJenisPaperChange }>
                <option value="General">General Paper</option>
                <option value="Modeling">Regional Economic Modeling Paper</option>
                <option value="Sharia">Java Sharia Business Model</option>
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