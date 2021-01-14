import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
        <Link to="/app">
      <Nav.Link href="#home">Welcome!</Nav.Link></Link>
      <Link to="/about">
      <Nav.Link href="#about">About</Nav.Link></Link>
      <Link to="rocky">
      <Nav.Link href="#rocky">Rocky</Nav.Link></Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
}

export default NavBar;