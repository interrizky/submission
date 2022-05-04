import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

/* Components & Layout */
import Login from './Components/Login'
import Register from './Components/Register'
import Forgot from './Components/Forgot'
import PesertaDash from './Components/PesertaDash'
import Verification from './Components/Verification'
import Code from './Components/Code'
import PaperOne from './Components/PaperOne'
import PaperGroup from './Components/PaperGroup'
import ShariaGroup from './Components/ShariaGroup'
import EditPaperOne from './Components/EditPaperOne'
import EditPaperGroup from './Components/EditPaperGroup'
import EditShariaGroup from './Components/EditShariaGroup'
import NavbarAdmin from './Components/NavbarAdmin'
import AdminDash from './Components/AdminDash'
import PaperFull from './Components/PaperFull'
import Sharia from './Components/Sharia'
import FileDetails from './Components/FileDetails'

/* Custom CSS */
import '../src/Assets/CSS/Login.css'

const cookies = new Cookies()

class Routers extends React.Component {
  render() {
    if( !cookies.get('udatxu') ) {
      return(
        <BrowserRouter>
          <Container fluid id="login-bg">
            <Routes>
              <Route path="/" element= { <Login /> } />
              <Route path="/register" element= { <Register /> } />
              <Route path="/forgot" element= { <Forgot /> } />
              <Route path="/verification" element= { <Verification /> } />
              <Route path="/code" element= { <Code /> } />
              <Route path="*" element= { <Navigate to={'/'} /> } />
            </Routes> 
          </Container> 
        </BrowserRouter>  
      )
    } else { 
      if( cookies.get('udatxu').role === 'peserta' && cookies.get('udatxu').user_status === 'active' ) {
        return(
          <BrowserRouter>
            <Container fluid id="user-main-bg">
              <Routes>
                <Route exact path="/home" element= { <PesertaDash /> } />
                <Route exact path="/submissionone" element= { <PaperOne /> } />
                <Route exact path="/submissiongrup" element= { <PaperGroup /> } />
                <Route exact path="/submissiongrupsharia" element= { <ShariaGroup /> } />
                <Route exact path="/editone/:paper_code" element= { <EditPaperOne /> } />
                <Route exact path="/editgroup/:paper_code" element= { <EditPaperGroup /> } />
                <Route exact path="/editgroupsharia/:paper_code" element= { <EditShariaGroup /> } />
                <Route path="*" element= { <Navigate to={'/home'} /> } />
              </Routes>
            </Container> 
          </BrowserRouter>
        )
      } else {
        return(
          <BrowserRouter>
            <Container fluid id="admin-main-bg" style={{ padding: 0, margin: 0 }}>
              <NavbarAdmin />
              <Routes>
                <Route exact path="/dashboard" element= { <AdminDash /> } />
                <Route exact path="/fullpaper" element= { <PaperFull /> } />
                <Route exact path="/sharia" element= { <Sharia /> } />
                <Route exact path="/report" element= { <Login /> } />
                <Route exact path="/details/:paper_code" element= { <FileDetails /> } />
                <Route path="*" element= { <Navigate to={'/dashboard'} /> } />
              </Routes>
            </Container>
          </BrowserRouter>
        )
      }
    }
  }
}

export default Routers;