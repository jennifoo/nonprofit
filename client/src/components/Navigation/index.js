import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return(
    <Navbar id="nav" expand="lg">
      <Navbar.Brand>
            <Link to="/" className="navbar-brand">
            <img src={require("../../images/brand/free-the-captives-logo.png")} alt="logotype - free the captives logo" height="57px" />
            </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav-group">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/our-work">Our Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/take-action">Take Action</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">Contact Us</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/blog-editor">Edit</Nav.Link>
            </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;