import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const cookies = new Cookies()

ChartJS.register(ArcElement, Tooltip, Legend);

class PieUser extends React.Component {
  state = {
    activeNumber: 0,
    nonActiveNumber: 0
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchUserStatus',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ activeNumber: response.data.activeNumber, nonActiveNumber: response.data.nonActiveNumber })
    })
  }

  render() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'User By Status Pie Chart',
        },
      },
    }

    const datax = {
      labels: ['Active', 'Non-Active'],
      datasets: [
        {
          label: '# of User(s)',
          data: [this.state.activeNumber, this.state.nonActiveNumber],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',            
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 2
        },
      ],
    }

    return( <Pie data={datax} options={options} /> )
  }
}

export default PieUser