import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return(
    <Row id="footer">
      <Col md={4} className="column">
        <h4>About Us</h4>
        <p>
        Free the Captives is a faith-based anti-human trafficking 501(c)(3) non-profit that fights the exploitation and trafficking of Houston’s youth. We engage and mobilize the Christian community while partnering with non-profits, law enforcement, and government agencies in the fight against modern day slavery.
        </p>
      </Col>
      <Col md={4} className="column">
        <h4>Quick Links</h4>
        <ul>
          <Link to="/about">
          <li>Mission</li>
          </Link>
          <Link to="/blog">
          <li>Blog</li>
          </Link>
          <Link to="/signup">
          <li>Portal</li>
          </Link>
        </ul>
        <p className="emphasis">Follow us on Social Media:</p>
        <Link to="https://www.facebook.com/FreetheCaptivesHouston"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
        <Link to="https://twitter.com/freethecaptives?lang=en"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
      </Col>
      <Col md={4} className="column">
        <h4>Social Feed</h4>
        <div className="fb-page" data-href="https://www.facebook.com/FreetheCaptivesHouston" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/FreetheCaptivesHouston" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/FreetheCaptivesHouston">Free the Captives</a></blockquote></div>
      </Col>
    </Row>
  )
}

export default Footer;