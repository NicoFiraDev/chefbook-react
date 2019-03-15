import React, { Component } from 'react';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import perfil from '../perfil.png'
import NavDropdown from 'react-bootstrap/NavDropdown';




class Nav1 extends Component {
    render() {
        return (
        <div className="Nav">
          <>
<Navbar className="navbar-custom" bg="primary" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="148"
        height="45"
        className="d-inline-block align-top"
      />
      {' libro de recetas'}
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="login">
    ¿Ya tienes una cuenta? <a href="#login">Inicia sesión</a>
    </Navbar.Text>
    <Navbar.Text>
        { !this.props.name ? <Image className="perfil" src={perfil} roundedCircle /> : ""}
    </Navbar.Text>
    
    <Navbar.Text>
    <NavDropdown title="Tu perfil" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
</>;
        </div>
        );
    }
}

export default Nav1;