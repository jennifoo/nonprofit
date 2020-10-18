import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Link } from "react-router-dom";



function Feature(props) {
  return(
    <>
    <Row className="feature-section">
      <Col>
      <div className="feature-image"><img src={require('../../images/'+ props.image)} alt="ways you can help stop human trafficking" /></div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <div>{props.snippet}</div>
        <Link to={props.link}><button className="bx">Read More</button></Link>
      </Col>
    </Row>
  </>
  )
}
export default Feature;