import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

/* Components & Layout */
import Login from './Components/Login'
import Register from './Components/Register'
import Forgot from './Components/Forgot'

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
              <Route path="*" element= { <Navigate to={'/'} /> } />
            </Routes> 
          </Container> 
        </BrowserRouter>  
      )
    } else { 
      // kode login user
    }
  }
}

export default Routers;