import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="myRed" variant="dark">
        <Navbar.Brand>
          <img src={'./images/plants.jpg'} />
            
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="About">About</Nav.Link>
          <Nav.Link className="Events">Events </Nav.Link>
          <Nav.Link className="Volunteers">Volunteers </Nav.Link>
          <Nav.Link className="Donations">Donations </Nav.Link>
          <Nav.Link className="Sign "><h2>Login/Register</h2></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default App;
