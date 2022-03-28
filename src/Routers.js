import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

/* Components & Layout */
import Login from './Components/Login'
import Register from './Components/Register'
import Forgot from './Components/Forgot'
import Navbar from './Components/Navbar'
import Verification from './Components/Verification'
import Code from './Components/Code'

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
      return(
        <BrowserRouter>
          <Container fluid id="user-main-bg">
            <Navbar />
            {/* Routes */}
            <Routes>
              <Route exact path="/home" element= { <Navbar /> } />
              <Route path="*" element= { <Navigate to={'/home'} /> } />
            </Routes>
            {/* Routes */}
          </Container> 
        </BrowserRouter>                    
      )
    }
  }
}

export default Routers;