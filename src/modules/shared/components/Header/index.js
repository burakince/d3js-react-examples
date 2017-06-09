import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import logo from './logo.png';
import profilePhoto from './profile-photo.png';
import './Header.css';

class PageHeader extends Component {
  render() {
    return (
      <Navbar id="navigation-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="index.html" id='logo'>
              <Image src={logo} circle />
              <span>React Bootstrap</span>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown id="profile-dropdown" title={
              <div>
                <Image src={profilePhoto} circle /><span>Scarlett Johansson<br />Satis Sorumlusu</span>
              </div>
            }>  
                <MenuItem>Settings</MenuItem>
                <MenuItem divider />
                <MenuItem>Log Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
}
export default PageHeader;