import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return(
    <Row id="footer">
      <Col>
        <h4>About Us</h4>
        <p>
        Free the Captives is a faith-based anti-human trafficking 501(c)(3) non-profit that fights the exploitation and trafficking of Houston’s youth. We engage and mobilize the Christian community while partnering with non-profits, law enforcement, and government agencies in the fight against modern day slavery.
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
        <div className="fb-page" data-href="https://www.facebook.com/FreetheCaptivesHouston" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/FreetheCaptivesHouston" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/FreetheCaptivesHouston">Free the Captives</a></blockquote></div>
      </Col>
    </Row>
  )
}

export default Footer;