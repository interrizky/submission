import React from 'react'
import PieUser from './PieUser'
import BarPaperAll from './BarPaperAll'
import UserRegisteredTable from './UserRegisteredTable'
import PieGeneralPaper from './PieGeneralPaper'
import PieREM from './PieREM'
import PieSharia from './PieSharia'

class DashAdmin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="row d-flex wrapper-baris-pertama mx-3 my-2">
          <div className="pie-satu col-md-6"> 
            <div className="card">
              <div className="card-header">
                User By Status
              </div>
              <div className="card-body" style={{ height: '350px' }}>
                <PieUser />
              </div>
            </div>            
          </div>
          <div className="bar-satu col-md-6"> 
            <div className="card">
              <div className="card-header">
                All Paper By Paper Type
              </div>
              <div className="card-body" style={{ height: '350px' }}>
                <BarPaperAll style={{ height:'100%' }}/>
              </div>
            </div>            
          </div>
        </div>

      <div className="wrapper-baris-kedua mx-3 my-2">
        <div className="table-ten-latest col-md-12">
          <div className="card">
            <div className="card-header">
              10 Data Registrasi User Terkini
            </div>
            <div className="card-body">
              <UserRegisteredTable />
            </div>
          </div>               
        </div>  
      </div>

      <div className="row wrapper-baris-ketiga mx-3 my-2">
        <div className="pie-satu col-md-4"> 
          <div className="card">
            <div className="card-header">
              General Paper By Status
            </div>
            <div className="card-body" style={{ height: '350px' }}>
              <PieGeneralPaper />
            </div>
          </div>            
        </div>
        <div className="pie-dua col-md-4"> 
          <div className="card">
            <div className="card-header">
              Regional Economic Modeling Paper By Status
            </div>
            <div className="card-body" style={{ height: '350px' }}>
              <PieREM />
            </div>
          </div>            
        </div>
        <div className="pie-tiga col-md-4"> 
          <div className="card">
            <div className="card-header">
              Java Sharia Business Model By Status
            </div>
            <div className="card-body" style={{ height: '350px' }}>
              <PieSharia />
            </div>
          </div>            
        </div>                
      </div>
      </React.Fragment>
    )
  }
}

export default DashAdmin