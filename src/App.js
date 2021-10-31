import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

function App(){
  return(
    <div className="App">
      <Navbar bg="myRed" variant="dark">
        <Navbar.Brand>
          <img src={"./images/plants.jpg"}/>About
        
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="Events">Events </Nav.Link>
          <Nav.Link href="Volunteers">Volunteers </Nav.Link>
          <Nav.Link href="Donations">Donations </Nav.Link>
          <Nav.Link className="Sign in">
            Login/Register
          </Nav.Link>

          </Nav>
        </Navbar>
      </div>
  )
}
export default App;

