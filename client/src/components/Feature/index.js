import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Feature() {
  return(
    <>
    <h3>Buy a Candle, Save a Life</h3>
    <Row>
      <Col>
        <div className="feature-image"></div>
      </Col>
      <Col>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta fermentum ex. Nulla dignissim tristique rutrum. Suspendisse pulvinar imperdiet turpis ac cursus. Ut malesuada lacus dolor, ut imperdiet lorem porttitor sit amet. In mattis sapien lectus, eget fringilla nisi faucibus ac.
        </p>
        <button>Read More</button>
      </Col>
    </Row>

  </>
  )
}

export default Feature;