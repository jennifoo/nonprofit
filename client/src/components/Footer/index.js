import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return(
    <Row id="footer">
      <Col>
        <h4>About Us</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu cursus diam, sed ullamcorper enim. Phasellus congue facilisis congue. Donec et euismod quam. Sed et ligula in lectus vulputate consequat. Nulla congue lacus elit, sed imperdiet ipsum fringilla posuere. Phasellus vel pharetra.
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