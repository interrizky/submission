import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

/* Components & Layout */
import Login from './Components/Login';

class Routers extends React.Component {
  render() {
    const cookies = new Cookies()

    if( !cookies.get('udatxu') ) {
      return(
        <BrowserRouter>
          <Container fluid id="login-bg">
            <Routes>
              <Route exact path="/" element= { <Login /> } />
              {/* <Route exact path="/forgot" element= { <Forgot /> } /> */}
              {/* <Route exact path="/chgpwd" element= { <ChgPwd /> } /> */}
              <Route path="*" element={<Navigate to={'/'} />} />
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