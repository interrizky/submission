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

/* Custom CSS */
import '../src/Assets/CSS/Login.css'

class Routers extends React.Component {
  render() {
    const cookies = new Cookies()

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
              {/* Routes */}
              <Routes>
                <Route exact path="/home" element= { <PesertaDash /> } />
                <Route exact path="/submissionone" element= { <PaperOne /> } />
                <Route exact path="/submissiongrup" element= { <PaperGroup /> } />
                <Route path="*" element= { <Navigate to={'/home'} /> } />
              </Routes>
              {/* Routes */}
            </Container> 
          </BrowserRouter>
        )
      } else {

      }
    }
  }
}

export default Routers;