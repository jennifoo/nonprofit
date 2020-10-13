import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return(
    <Row>
      <Col>
        <h4>About Free the Captives</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt risus in pellentesque posuere. Cras iaculis ornare facilisis. Ut arcu ante, mattis sed arcu ut, volutpat volutpat sapien.
        </p>
      </Col>
      <Col>
        <h4>Quick Links</h4>
        <ul>
          <li>
          Consectetur Adipiscing Elit
          </li>
          <li>
          Lorem Ipsum Dolor
          </li>
          <li>
          Mattis Sed Arcu
          </li>
          <li>
          Risus Pellentesque Posuere
          </li>
        </ul>
      </Col>
      <Col>
        <h4>Social Feed</h4>
      </Col>
    </Row>
  )
}

export default Footer;