import React from 'react'
import { Accordion } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { DownloadCloud } from 'react-feather'
import PieUser from './PieUser'
import BarPaperAll from './BarPaperAll'
import UserRegisteredTable from './UserRegisteredTable'
import PieGeneralPaper from './PieGeneralPaper'
import PieREM from './PieREM'
import PieSharia from './PieSharia'
import BarGeneralPaper from './BarGeneralPaper'
import BarREM from './BarREM'
import BarSharia from './BarSharia'

let XLSX = require("xlsx")
const cookies = new Cookies()

class AdminDash extends React.Component {
  state = {
    tempObjOne: null,
    tempObjTwo: null,
    tempObjThree: null
  }

  clickReport = (params) => async(event) => {
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
      if( params === 'userStatus' ) {
        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/fetchUserStatus',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + cookies.get('udatxu').token        
          },
          data: JSON.stringify({ 
            data_role: cookies.get('udatxu').role
          })                   
        })

        if( datax !== null ) {
          this.setState({ tempObjOne: datax.data.resultActive, tempObjTwo: datax.data.resultInactive })

          let workBook = XLSX.utils.book_new()

          let ws1 = XLSX.utils.json_to_sheet(this.state.tempObjOne)         
          XLSX.utils.book_append_sheet(workBook, ws1, "User Active")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)
          XLSX.utils.book_append_sheet(workBook, ws2, "User Inactive")   
          
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 50 }, // C
            { wch: 50 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 25 }, // G
          ]       

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 50 }, // C
            { wch: 50 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 25 }, // G
          ]                            

          XLSX.writeFile(workBook, "User Recap.xlsx")
        }
      } else if( params === 'paperAll' ) {
        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/fetchAllPaperByType',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + cookies.get('udatxu').token        
          },
          data: JSON.stringify({ 
            data_role: cookies.get('udatxu').role
          })                   
        })

        if( datax !== null ) {
          this.setState({ tempObjOne: datax.data.listGP, tempObjTwo: datax.data.listREM, tempObjThree: datax.data.listSharia})

          let workBook = XLSX.utils.book_new()

          let ws1 = XLSX.utils.json_to_sheet(this.state.tempObjOne)
          XLSX.utils.book_append_sheet(workBook, ws1, "General Paper")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)
          XLSX.utils.book_append_sheet(workBook, ws2, "Regional Economic Modelling")       

          let ws3 = XLSX.utils.json_to_sheet(this.state.tempObjThree)
          XLSX.utils.book_append_sheet(workBook, ws3, "Java Sharia") 
          
          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T                        
          ];

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T  
          ]  
          
          ws3["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T  
          ]          

          XLSX.writeFile(workBook, "All Paper Recap.xlsx")
        }
      } else if( params === 'statusGP' || params === 'subthemeGP' ) {
        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/fetchGeneralPaperStatus',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + cookies.get('udatxu').token        
          },
          data: JSON.stringify({ 
            data_role: cookies.get('udatxu').role
          })                   
        })

        if( datax !== null ) {
          this.setState({ tempObjOne: datax.data.listSubmitGP, tempObjTwo: datax.data.listNotSubmitGP })

          let workBook = XLSX.utils.book_new()

          let ws1 = XLSX.utils.json_to_sheet(this.state.tempObjOne)
          XLSX.utils.book_append_sheet(workBook, ws1, "General Paper (submitted)")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)
          XLSX.utils.book_append_sheet(workBook, ws2, "General Paper (not)")
          
          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T                        
          ];

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T  
          ]          

          XLSX.writeFile(workBook, "General Paper Recap By Submission Status.xlsx")
        }
      } else if( params === 'statusREM' || params === 'subthemeREM' ) {
        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/fetchREMStatus',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + cookies.get('udatxu').token        
          },
          data: JSON.stringify({ 
            data_role: cookies.get('udatxu').role
          })                   
        })

        if( datax !== null ) {
          this.setState({ tempObjOne: datax.data.listSubmitREM, tempObjTwo: datax.data.listNotSubmitREM })

          let workBook = XLSX.utils.book_new()

          let ws1 = XLSX.utils.json_to_sheet(this.state.tempObjOne)
          XLSX.utils.book_append_sheet(workBook, ws1, "REMP (submitted)")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)
          XLSX.utils.book_append_sheet(workBook, ws2, "REMP (not)")
          
          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T                        
          ];

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 15 }, // B
            { wch: 15 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 10 }, // G
            { wch: 10 }, // H
            { wch: 25 }, // I
            { wch: 25 }, // J
            { wch: 25 }, // K
            { wch: 25 }, // L            
            { wch: 25 }, // M
            { wch: 25 }, // N
            { wch: 25 }, // O
            { wch: 25 }, // P
            { wch: 25 }, // Q
            { wch: 25 }, // R
            { wch: 25 }, // S
            { wch: 25 }, // T                                               
          ];
          // const max_width = this.state.tempObjOne.reduce((w, r) => Math.max(w, r.title.length), 10);
          // ws1["!cols"] = [ { wch: max_width } ];    

          XLSX.writeFile(workBook, "Regional Economic MP Recap By Submission Status.xlsx")
        }
      }
    }    
  }

  render() {
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
      return(
        <React.Fragment>
          <div className="row d-flex wrapper-baris-pertama mx-3 my-2">
            <div className="pie-satu col-md-4">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>User By Status</Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body" style={{ height: '350px' }}>
                      <PieUser />
                    </div>
                    <div className="input-group" style={{ alignItems: "center" }}>
                      <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("userStatus") }>
                        SAVE AS XLSX &nbsp; <DownloadCloud />
                      </button>        
                    </div>             
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>                         
            </div>
            <div className="bar-satu col-md-8"> 
              <div className="card">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>All Paper By Paper Type</Accordion.Header>
                    <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <BarPaperAll style={{ height:'100%' }}/>
                      </div>
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("paperAll") }>
                          SAVE AS XLSX &nbsp; <DownloadCloud />
                        </button>        
                      </div>                          
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>               
              </div>            
            </div>
          </div>

          <div className="wrapper-baris-kedua mx-3 my-2">
            <div className="table-ten-latest col-md-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>10 Data Registrasi User Terkini</Accordion.Header>
                  <Accordion.Body>
                    <UserRegisteredTable />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          </div>

          <div className="row d-flex wrapper-baris-keempat mx-3 my-2">
            <div className="pie-satu col-md-4"> 
              <div className="card">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>General Paper By Status</Accordion.Header>
                    <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <PieGeneralPaper />
                      </div>
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("statusGP") }>
                          SAVE AS XLSX &nbsp; <DownloadCloud />
                        </button>        
                      </div>                          
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>                           
              </div>            
            </div>          
            <div className="bar-general-paper-sub-theme col-md-8">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>General Paper by Sub Tema</Accordion.Header>
                  <Accordion.Body>
                    <div className="card-body" style={{ height: '350px' }}>
                      <BarGeneralPaper style={{ height:'100%' }}/>
                    </div>         
                    <div className="input-group" style={{ alignItems: "center" }}>
                      <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("subthemeGP") }>
                        SAVE AS XLSX &nbsp; <DownloadCloud />
                      </button>        
                    </div>                               
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          </div>   

          <div className="row d-flex wrapper-baris-kelima mx-3 my-2">
            <div className="pie-dua col-md-4"> 
              <div className="card">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Regional Economic Modeling Paper By Status</Accordion.Header>
                    <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <PieREM />
                      </div>
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("statusREM") }>
                          SAVE AS XLSX &nbsp; <DownloadCloud />
                        </button>        
                      </div>                      
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>                    
              </div>               
            </div>         
            <div className="bar-general-paper-sub-theme col-md-8">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Regional Economic Modeling Paper by Sub Tema</Accordion.Header>
                  <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <BarREM style={{ height:'100%' }}/>
                      </div>
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("subthemeREM") }>
                          SAVE AS XLSX &nbsp; <DownloadCloud />
                        </button>        
                      </div>                      
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          </div>  

          <div className="row d-flex wrapper-baris-keenam mx-3 my-2">
            <div className="pie-tiga col-md-4"> 
              <div className="card">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Java Sharia Business Model By Status</Accordion.Header>
                    <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <PieSharia />
                      </div>                 
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>                    
              </div>            
            </div>          
            <div className="bar-general-paper-sub-theme col-md-8">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Java Sharia Business Model by Sub Tema</Accordion.Header>
                  <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <BarSharia style={{ height:'100%' }}/>
                      </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          </div>                        
        </React.Fragment>
      )
    }    
  } 
}

export default AdminDash