import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBar = ({ history }) => (
  <>

    <Navbar bg="light" expand="lg">
      <img src="https://www.tuya.com.co/sites/all/themes/tuya/assets/images/pre-home/logo_tuya.svg" className="img-responsive logo-top-bat" alt="img 1" />
      <Navbar.Brand href="#home"> Bonos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">
              <li><span>Home</span></li>
            </Link>
          </Nav.Link>
          <Nav.Link href="#home">
            <Link to="/todoform">
              <span>Add</span>
            </Link>
          </Nav.Link>

          <Nav.Link href="#link">
            <Link to="/login">
              <span>Registrarme</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/list">
              <li><span>Lista</span></li>
            </Link>
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  </>
);

export default TopBar;
