import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import { Download } from 'react-feather'
import { saveAs } from "file-saver"

const cookies = new Cookies()

class Sharia extends React.Component {
  state = {
    dataMap: [],
    shariaNumber: 0,
  }

  handleDownload = (file_path_to_download, file_name_to_download) => (event) => {
    event.preventDefault()

    saveAs('https://submission-api.ejavec.org/'+file_path_to_download, file_name_to_download)
  }  

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchShariaTable',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ dataMap: response.data.result, shariaNumber: response.data.number })
    })    
  }

  render() {
    return(
      <React.Fragment>
        <div className="table-title text-center mt-3">
          <h3>List Sharia Tersubmit</h3>
        </div>
        <div className="table-sub-title" style={{ marginLeft: '10px' }}>
          <h5>Jumlah : { this.state.shariaNumber } Paper(s)</h5>
        </div>        
        <div className="wrapper-table-full-paper table-responsive" style={{ overflow: "auto", height: "500px" }}>
          <table className="table table-bordered table-hover table-light mb-0">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="text-center" style={{ width: "4%" }}>#</th>
                <th scope="col" className="text-center" style={{ width: "11%" }}>Kode Paper</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>Nama</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>Email</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>Jenis Paper</th>
                <th scope="col" className="text-center" style={{ width: "20%" }}>Sub Tema</th>                
                <th scope="col" className="text-center" style={{ width: "25%" }}>Judul</th>                          
                <th scope="col" className="text-center" style={{ width: "5%" }}>Kategori/Partisipasi</th>
                <th scope="col" className="text-center" style={{ width: "5%" }}>Tanggal Submit</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>File Paper</th>                  
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
                    <td className="text-left">{ result.name_1 }</td> 
                    <td className="text-left">{ result.email_1 }</td> 
                    <td className="text-left">{ result.paper_type }</td>
                    <td className="text-left">{ result.sub_theme }</td>                                      
                    <td className="text-left" style={{ fontStyle: 'italic' }}>{ result.title }</td>
                    <td className="text-center">{ result.category + " / " + result.participation_type }</td>
                    <td className="text-center">{ result.submission_date }</td>
                    <td className="text-center">
                      <button type="button" id="btnPaperDownload" className="btn-outline-success form-control" onClick={ this.handleDownload(result.paper_filePath_1, result.paper_fileName_1) }>
                        <Download />
                      </button>
                    </td>
                  </tr>                  
                )
              }) : null
            }
            </tbody>
          </table>
        </div>      
      </React.Fragment>

    )
  }
}

export default Sharia