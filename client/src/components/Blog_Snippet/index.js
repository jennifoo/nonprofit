import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Blog_Snippet() {
  return(
    <>
    <Row className="blog-snippet">
      <Col>
        <h2>Blog Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat lobortis lobortis. Integer dui mi, sagittis at mattis et, convallis vitae erat. Proin condimentum velit eget arcu euismod, et efficitur mi pulvinar.</p>
        <button>Read More</button>
      </Col>
    </Row>
  </>
  )
}

export default Blog_Snippet;