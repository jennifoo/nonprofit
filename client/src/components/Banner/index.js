import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog_Snippet from '../../components/Blog_Snippet'
;

function Banner() {
  return(
    <>
    <Row className="banner-image">
      <Col>
        <h1>Blog</h1>
      </Col>
    </Row>

    <Blog_Snippet />
  </>
  )
}

export default Banner;