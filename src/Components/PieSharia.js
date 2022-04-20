import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const cookies = new Cookies()

ChartJS.register(ArcElement, Tooltip, Legend);

class PieSharia extends React.Component {
  state = {
    submitNumber: 0,
    nonSubmitNumber: 0
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchShariaStatus',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ submitNumber: response.data.angkaShariaSubmit, nonSubmitNumber: response.data.angkaShariaNon })
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
          text: 'Java Sharia Business Model By Status Pie Chart',
        },
      },
    }

    const datax = {
      labels: ['Done Submitted', 'Not Yet Submitted'],
      datasets: [
        {
          label: '# of Java Sharia Business Model Number',
          data: [this.state.submitNumber, this.state.nonSubmitNumber],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 2
        },
      ],
    }

    return( <Pie data={datax} options={options} /> )
  }
}

export default PieSharia