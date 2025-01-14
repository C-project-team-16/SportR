import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Home from "./components/Home"
import About from "./components/About"
import Register from "./components/Register"
import Login from "./components/Login"
import Rent from "./components/Rent"
import Add from "./components/Add"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.css'


function App() {
  const [login, setLogin] = useState(false)

  return (
    <Router >
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/about" className="nav-link">About</Link></Nav.Link>
                  <Nav.Link>
                    {
                      login?<Link to="/rent" className="nav-link">Rent</Link>:<Link to="/login" className="nav-link">Login</Link>
                    }
                  </Nav.Link>
                  <Nav.Link>
                    {
                      login?<Link to="/additem" className="nav-link">Add</Link>:<></>
                    }
                  </Nav.Link>
                  <Nav.Link>
                    {
                      login?<Link onClick={()=>setLogin(false)} className="nav-link">Logout</Link>:<></>
                    }
                  </Nav.Link>
                </Nav>  
              </Navbar.Collapse>
            </Container>
          </Navbar>         
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login onUpdate={setLogin}/>}/>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/register" element={<Register/>}/>  
          <Route path="/additem" element={<Add/>}/>    
        </Routes>
    </Router>
      
  )
}

export default App
