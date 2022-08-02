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

// let XLSX = require("xlsx")
const XLSX = require('sheetjs-style')
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
          
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 50 }, // C
            { wch: 50 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 25 }, // G
          ]       

          for( let i = 0; i <= this.state.tempObjOne.length; i++ ) {
            if( i === 0 ) {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }              
            } else {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }                 
            }
          }     

          XLSX.utils.book_append_sheet(workBook, ws1, "User Active")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)
          XLSX.utils.book_append_sheet(workBook, ws2, "User Inactive")   

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 50 }, // C
            { wch: 45 }, // D
            { wch: 25 }, // E
            { wch: 30 }, // F
            { wch: 25 }, // G
          ]      

          for( let i = 0; i <= this.state.tempObjTwo.length; i++ ) {
            if( i === 0 ) {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }              
            } else {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }                 
            }
          }     

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

          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                       
          ]          

          for( let i = 0; i <= this.state.tempObjOne.length; i++ ) {
            if( i === 0 ) {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }               

          XLSX.utils.book_append_sheet(workBook, ws1, "General Paper")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V   
          ]  

          for( let i = 0; i <= this.state.tempObjTwo.length; i++ ) {
            if( i === 0 ) {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }               

          XLSX.utils.book_append_sheet(workBook, ws2, "Regional Economic Modelling")       

          let ws3 = XLSX.utils.json_to_sheet(this.state.tempObjThree)

          ws3["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V   
          ]     
          
          for( let i = 0; i <= this.state.tempObjThree.length; i++ ) {
            if( i === 0 ) {
              ws3["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws3["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws3["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws3["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws3["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws3["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws3["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws3["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws3["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws3["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws3["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws3["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws3["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws3["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }               
                    
          XLSX.utils.book_append_sheet(workBook, ws3, "Java Sharia") 
            
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

          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                         
          ];

          for( let i = 0; i <= this.state.tempObjOne.length; i++ ) {
            if( i === 0 ) {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }               

          XLSX.utils.book_append_sheet(workBook, ws1, "General Paper (submitted)")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V   
          ]     
          
          for( let i = 0; i <= this.state.tempObjTwo.length; i++ ) {
            if( i === 0 ) {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }              

          XLSX.utils.book_append_sheet(workBook, ws2, "General Paper (not)")      

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

          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                         
          ];       
          
          for( let i = 0; i <= this.state.tempObjOne.length; i++ ) {
            if( i === 0 ) {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }             

          XLSX.utils.book_append_sheet(workBook, ws1, "REMP (submitted)")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                                                
          ];      
          
          for( let i = 0; i <= this.state.tempObjTwo.length; i++ ) {
            if( i === 0 ) {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }              

          XLSX.utils.book_append_sheet(workBook, ws2, "REMP (not)")        

          XLSX.writeFile(workBook, "Regional Economic MP Recap By Submission Status.xlsx")
        }
      } else if( params === 'statusSharia' || params === 'subthemeSharia' ) {
        const datax = await Axios({
          url: 'https://submission-api.ejavec.org/fetchShariaStatus',
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
          this.setState({ tempObjOne: datax.data.listSubmitSharia, tempObjTwo: datax.data.listNotSubmitSharia })

          let workBook = XLSX.utils.book_new()

          let ws1 = XLSX.utils.json_to_sheet(this.state.tempObjOne)

          /* calculate column width */
          ws1["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                         
          ];       
          
          for( let i = 0; i <= this.state.tempObjOne.length; i++ ) {
            if( i === 0 ) {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws1["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws1["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws1["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws1["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws1["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws1["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws1["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws1["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }    

          XLSX.utils.book_append_sheet(workBook, ws1, "Sharia (submitted)")

          let ws2 = XLSX.utils.json_to_sheet(this.state.tempObjTwo)

          ws2["!cols"] = [ 
            { wch: 10 }, // A
            { wch: 20 }, // B
            { wch: 20 }, // C
            { wch: 100 }, // D
            { wch: 25 }, // E
            { wch: 25 }, // F
            { wch: 20 }, // G
            { wch: 30 }, // H
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
            { wch: 25 }, // U
            { wch: 25 }, // V                                                
          ];      
          
          for( let i = 0; i <= this.state.tempObjTwo.length; i++ ) {
            if( i === 0 ) {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }       
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 16,
                  bold: true,
                  italic: true
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }             
            } else {
              ws2["A"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }

              ws2["B"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["C"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "center",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["D"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["E"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["F"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["G"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }     
              
              ws2["H"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["I"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["J"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["K"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["L"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["M"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["N"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["O"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["P"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["Q"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }   
              
              ws2["R"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }  
              
              ws2["S"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
              
              ws2["T"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }    
          
              ws2["U"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              } 
          
              ws2["V"+(i+1)].s = {
                font: {
                  sz: 12,
                },
                alignment: {
                  vertical: "center",
                  horizontal: "left",
                  wrapText: true
                },
                border: {
                  top: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                  right: { style: "thin" }
                }
              }           
            }
          }              

          XLSX.utils.book_append_sheet(workBook, ws2, "Sharia (not)")        

          XLSX.writeFile(workBook, "Java Sharia BM Recap By Submission Status.xlsx")
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
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("statusSharia") }>
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
                  <Accordion.Header>Java Sharia Business Model by Sub Tema</Accordion.Header>
                  <Accordion.Body>
                      <div className="card-body" style={{ height: '350px' }}>
                        <BarSharia style={{ height:'100%' }}/>
                      </div>
                      <div className="input-group" style={{ alignItems: "center" }}>
                        <button type="button" id="btnReport" className="btn-outline-success form-control" onClick={ this.clickReport("subthemeSharia") }>
                          SAVE AS XLSX &nbsp; <DownloadCloud />
                        </button>        
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