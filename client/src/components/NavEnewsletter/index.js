import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function NavEnewsletter() {
  return(
    <Row className="enewsletter-bar">
      <Col>
      <div className="enewsletter-group">
      <h6>Get The Latest Updates</h6>
      <input placeholder="First Name"></input>
      <input placeholder="Last Name"></input>
      <input placeholder="Email Address"></input>
      <button>Sign Up</button>
      </div>
      <Link to="/signup"><button className="button-login">Portal</button></Link>
      </Col>
    </Row>
  )
}

export default NavEnewsletter;