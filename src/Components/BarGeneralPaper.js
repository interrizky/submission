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
    arrMhs: [],
    arrNon: []
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
        arrMhs: response.data.angkaMhs,
        arrNon: response.data.angkaNon,
      })
    })
  }

  render() {
    const options = {
      responsive: true,
      maintainAspectRatio : false,
      // barThickness: 100,
      borderSkipped: 'start',
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Submitted General Paper By Sub Theme Divided By Category Type Bar Chart',
        },
      },
    }

    const data = {
      labels: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5'],
      datasets: [
        {
          label: "Mahasiswa",
          data: this.state.arrMhs,
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
        },
        {
          label: "Umum",
          data: this.state.arrNon,
          backgroundColor: 'rgba(255, 159, 64, 0.8)',
        }
      ]      
    }

    return <Bar options={options} data={data} />;
  }
}

export default BarGeneralPaper