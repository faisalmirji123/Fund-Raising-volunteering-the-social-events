import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={'./images/plants.jpg'} />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="About">
            <h2>About</h2>
          </Nav.Link>
          <Nav.Link className="Events">
            <h2>Events</h2>{' '}
          </Nav.Link>
          <Nav.Link className="Volunteers">
            <h2>Volunteers</h2>{' '}
          </Nav.Link>
          <Nav.Link className="Donations">
            <h2>Donations</h2>{' '}
          </Nav.Link>
          <Nav.Link className="Sign ">
            <h2>Login/Register</h2>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default App;
