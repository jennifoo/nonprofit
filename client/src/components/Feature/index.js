import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Link } from "react-router-dom";



function Feature(props) {
  return(
    <>
    <Row className="feature-section">
      <Col>
      <div className="feature-image"><img src={require('../../images/'+ props.image)} /></div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.snippet}</p>
        <Link to={props.link}><button class="bx">Read More</button></Link>
      </Col>
    </Row>
  </>
  )
}
{/* <img src={require('../../images/'+ props.image)} /> */}
export default Feature;