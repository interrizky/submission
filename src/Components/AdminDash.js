import React from 'react'
import { Accordion } from 'react-bootstrap'
// import { DownloadCloud } from 'react-feather'
import PieUser from './PieUser'
import BarPaperAll from './BarPaperAll'
import UserRegisteredTable from './UserRegisteredTable'
import PieGeneralPaper from './PieGeneralPaper'
import PieREM from './PieREM'
import PieSharia from './PieSharia'
import BarGeneralPaper from './BarGeneralPaper'
import BarREM from './BarREM'
import BarSharia from './BarSharia'

class AdminDash extends React.Component {
  render() {
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

export default AdminDash