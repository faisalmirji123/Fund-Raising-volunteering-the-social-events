import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

function App(){
  return(
    <div className="App">HI
      <Navbar bg="orange" variant="dark">
        <Navbar.Brand>
          <img src="./images/photos.jpg" alt=""/>
        </Navbar.Brand>
        </Navbar>
      </div>
  )
}
export default App;

