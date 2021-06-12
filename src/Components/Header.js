import React from 'react'
import {Navbar, Button, Nav, Form, FormControl} from 'react-bootstrap';
import {BrowserView} from 'react-device-detect';
import {Link} from "react-router-dom";

export default function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link className="text-decoration-none text-dark" to="/">Todo Lists</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link className="text-decoration-none text-secondary" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className="text-decoration-none text-secondary" to="/about">About</Link></Nav.Link>
        </Nav>
        <BrowserView>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </BrowserView>
      </Navbar.Collapse>
    </Navbar>
  )
}
