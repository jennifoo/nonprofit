import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Banner(props) {
  return(
    <>
    <Row className="banner-image">
      <Col>
        <h1>{props.h1}</h1>
      </Col>
    </Row>
  </>
  )
}

export default Banner;