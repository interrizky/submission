import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class UserRegisteredTable extends React.Component {
  state = {
    dataMap: []
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchTenUserLatest',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ dataMap: response.data.result })
    })
  }

  render() {
    return(
      <div className="wrapper-table-product table-responsive" style={{ overflow: "auto", height: "250px" }}>
        <table className="table table-bordered table-hover table-light mb-0">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center" style={{ width: "5%" }}>#</th>
              <th scope="col" className="text-center" style={{ width: "25%" }}>Nama</th>
              <th scope="col" className="text-center" style={{ width: "10%" }}>Email</th>              
              <th scope="col" className="text-center" style={{ width: "30%" }}>Instansi</th>
              <th scope="col" className="text-center" style={{ width: "10%" }}>Nomer Telepon</th>
              <th scope="col" className="text-center" style={{ width: "20%" }}>Tanggal Registrasi</th>
            </tr>
          </thead>
          <tbody className="table-body" id="table-body">
          {
            this.state.dataMap.length > 0 ? 
            this.state.dataMap.map((result, index) => {
              return(
                <tr key={ index }>
                  <td className="text-center">{ index+1 }</td>
                  <td className="text-left">{ result.name }</td>
                  <td className="text-left">{ result.email }</td>
                  <td className="text-left">{ result.organization }</td>
                  <td className="text-center">{ result.phone }</td>
                  <td className="text-center">{ result.registration_date }</td>
                </tr>                  
              )
            }) : 
            <tr>
              
            </tr>
          }
          </tbody>
        </table>
      </div>        
    )
  }
}

export default UserRegisteredTable