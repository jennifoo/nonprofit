import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';


function Navigation() {
  return(
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/portfolio" className="navbar-brand"><img src={require("../../images/brand/free-the-captives-logo.png")} alt="logotype - free the captives logo" height="57px" /></Link>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;