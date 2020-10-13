import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Nav_Enewsletter() {
  return(
    <Row className="enewsletter-bar">
      <Col>
      <h6>Get The Latest Updates</h6>
      <input placholder="First Name"></input>
      <input placeholder="Last Name"></input>
      <input placeholder="Email Address"></input>
      </Col>
    </Row>
  )
}

export default Nav_Enewsletter;