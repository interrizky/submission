import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const cookies = new Cookies()

class BarPaperAll extends React.Component {
  state = {
    angkaGP: 0,
    angkaREM: 0,
    angkaSharia: 0
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchAllPaperByType',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ angkaGP: response.data.angkaGP, angkaREM: response.data.angkaREM, angkaSharia: response.data.angkaSharia })
    })
  }

  render() {
    const options = {
      // responsive: true,
      maintainAspectRatio : false,
      barThickness: 100,
      borderSkipped: 'start',
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'All Paper By Paper Type Bar Chart',
        },
      },
    }

    const labels = ['Full Paper & Sharia']

    const data = {
      labels,
      datasets: [
        {
          label: 'General Paper',
          data: [this.state.angkaGP],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Regional Economic Modeling Paper',
          data: [this.state.angkaREM],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',          
        },
        {
          label: 'Java Sharia Business Model',
          data: [this.state.angkaSharia],
          backgroundColor: 'rgba(105, 223, 118, 0.8)',
        },
      ],
    }

    return <Bar options={options} data={data} />;
  }
}

export default BarPaperAll