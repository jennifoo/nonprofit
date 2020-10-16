import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Feature() {
  return(
    <>
    <Row className="feature-section">
      <Col>
      <div className="feature-image"><img src={require('../../images/Conference-in-color-Skyline-IG-2020.png')} /></div>
        <h3>Get Educated on the Core Issues of Human Trafficking</h3>
        <h4>Houston Human Trafficking Conference</h4>
        <p>
        Do you want the latest information and updates on human trafficking in Houston? Come to Free the Captives’ 10th Annual Houston Human Trafficking Conference! This is a fantastic opportunity to learn about human trafficking from the experts and how you can get involved in fighting this horrific crime.
        </p>
        <button class="bx">Read More</button>
      </Col>
    </Row>
  </>
  )
}

export default Feature;