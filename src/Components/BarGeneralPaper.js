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

class BarGeneralPaper extends React.Component {
  state = {
    tema1: 0,
    tema2: 0,
    tema3: 0,
    tema4: 0,
    tema5: 0,
    tema6: 0,    
    tema7: 0,
    tema8: 0
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchGeneralPaperByTheme',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + cookies.get('udatxu').token        
      },
      data: JSON.stringify({ 
        data_role: cookies.get('udatxu').role
      })                   
    }).then(response => {
      this.setState({ 
        tema1: response.data.angkaTema1,
        tema2: response.data.angkaTema2,
        tema3: response.data.angkaTema3,
        tema4: response.data.angkaTema4,
        tema5: response.data.angkaTema5,
        tema6: response.data.angkaTema6,    
        tema7: response.data.angkaTema7,
        tema8: response.data.angkaTema8
      })
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
          text: 'General Paper By Sub Theme Type Bar Chart',
        },
      },
    }

    const labels = ['General Paper']

    const data = {
      labels,
      datasets: [
        {
          label: 'Tema 1',
          data: [this.state.tema1],
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
        },
        {
          label: 'Tema 2',
          data: [this.state.tema2],
          backgroundColor: 'rgba(255, 159, 64, 0.8)',
        },
        {
          label: 'Tema 3',
          data: [this.state.tema3],
          backgroundColor: 'rgba(255, 205, 86, 0.8)',
        },
        {
          label: 'Tema 4',
          data: [this.state.tema4],
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
        },   
        {
          label: 'Tema 5',
          data: [this.state.tema5],
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        },
        {
          label: 'Tema 6',
          data: [this.state.tema6],
          backgroundColor: 'rgba(153, 102, 255, 0.8)',
        },
        {
          label: 'Tema 7',
          data: [this.state.tema7],
          backgroundColor: 'rgba(201, 203, 207, 0.8)'
        },
        {
          label: 'Tema 8',
          data: [this.state.tema8],
          backgroundColor: 'rgba(202, 54, 107, 0.8)',
        },                     
      ],
    }

    return <Bar options={options} data={data} />;
  }
}

export default BarGeneralPaper