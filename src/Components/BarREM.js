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

// let lookup = {
//   'General': [
//     { id: '1', text: 'Strategi dan inovasi pengembangan UMKM untuk masuk dalam Global Value Chain dalam upaya mendorong akselerasi ekspor di Jawa Timur.' },
//     { id: '2', text: 'Peran digitalisasi dalam mendukung akselerasi pemulihan ekonomi Jawa Timur. Diharapkan paper dapat diaplikasikan dan direplikasi, misalnya dengan menghitung dampak digitalisasi (misalnya: dengan adanya digitalisasi, berapa potensi korupsi/ fraud yang hilang, benchmarking dampak digitalasi yang dapat dihitung secara kuantitatif/ kualitatif).' },
//     { id: '3', text: 'Optimalisasi peran Jawa Timur sebagai hub perdagangan kawasan timur Indonesia dan produsen utama perdagangan antar daerah dalam upaya mendorong percepatan pemulihan ekonomi Jawa Timur.' },
//     { id: '4', text: 'Strategi dan inovasi akselerasi daya saing ekspor luar negeri Jawa Timur menuju Lead Export Industri Manufaktur.' },
//     { id: '5', text: 'Optimalisasi kinerja sektor pariwisata (hospitality) Jawa Timur di tengah pandemi COVID-19 dan strategi mendorong pemulihannya.' },
//     { id: '6', text: 'Peningkatan daya saing investasi Jawa Timur di tengah kompetisi global dan potensi divestasi.' },
//     { id: '7', text: 'Strategi mendorong peningkatan pangsa ekonomi syariah di Jawa Timur melalui sinergi para pelaku ekonomi syariah Jawa Timur dan optimalisasi kawasan industri halal.'},
//     { id: '8', text: 'Evaluasi kinerja Industri Pengolahan Jawa Timur dan strategi akselerasi pemulihannya dengan mempertimbangkan konsep green economy.'},
//   ],
//   'Modeling': [
//     { id: '9', text: 'Model proyeksi/forecasting pertumbuhan ekonomi Jawa Timur dan turunannya (Sisi Permintaan)' },
//     { id: '10', text: 'Model proyeksi/forecasting pertumbuhan ekonomi Jawa Timur dan turunannya (Sisi Penawaran)' },
//     { id: '11', text: 'Simulasi berbagai dampak isu strategis terhadap ketahanan perekonomian Jawa Timur' },
//     { id: '12', text: 'Simulasi berbagai opsi kebijakan, baik kebijakan moneter, makroprudensial, mikroprudensial, fiskal, maupun kebijakan pemerintah pusat dan daerah, serta kebijakan negara lain terhadap perekonomian Jawa Timur.' },
//     { id: '13', text: 'Fundamental pertumbuhan ekonomi Jawa Timur ke depan' }
//   ],
//   'Sharia': [
//     { id: '14', text: 'Food' },
//     { id: '15', text: 'Fashion'},
//     { id: '16', text: 'Finance (meliputi juga instrumen keuangan syariah)'},
//     { id: '17', text: 'Integrated Farming'},
//     { id: '18', text: 'Renewable Energy'},
//     { id: '19', text: 'Fundutainment (industri kreatif meliputi aplikasi, games, film, musik, arsitektur, desain dan seni pertunjukan)'},
//     { id: '20', text: 'Funtrepreneur (jasa/properti/socialpreneur/travel dll)'}
//   ],
// }

class BarREM extends React.Component {
  state = {
    tema1: 0,
    tema2: 0,
    tema3: 0,
    tema4: 0,
    tema5: 0
  }

  componentDidMount() {
    Axios({
      url: 'https://submission-api.ejavec.org/fetchREMByTheme',
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
        tema5: response.data.angkaTema5
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
          text: 'Submitted Regional Economic Modeling Paper By Sub Theme Type Bar Chart',
        },
      },
    }

    const labels = ['Regional Economic Modeling Paper']

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
        }                    
      ],
    }

    return <Bar options={options} data={data} />;
  }
}

export default BarREM