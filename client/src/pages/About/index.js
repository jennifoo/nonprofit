import React from "react";
import Banner from '../../components/Banner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
return (
        <>
        <Banner h1="About" />
        <main id="about" className="page-padded">
        <Container fluid>
          <Row>
            <Col>
            <h2>Mission</h2>
            <p>Free the Captives is a faith-based anti-human trafficking 501(c)(3) non-profit that fights the exploitation and trafficking of Houston’s youth. We engage and mobilize the Christian community while partnering with non-profits, law enforcement, and government agencies in the fight against modern day slavery.</p>
            </Col>
          </Row>
            <Row>
            <Col md={4}>
              <img className="image-max" style={{width: "100%"}}src={require('../../images/the-mission-of-FTC1.png')} />
            </Col>
            <Col md={8}>
            <h4>Free the Captives works to:</h4>
            <ul>
              <li><strong>RESCUE</strong> trafficked teenagers by working closely with law enforcement,</li>
              <li><strong>RESTORE</strong> victims by providing direct services such as mentoring, tutoring, shelter, & material assistance,</li>
              <li><strong>EMPLOY</strong> victims in our job program and provide much needed income and life skills</li>
              <li><strong>PREVENT</strong> trafficking through programming for at-risk teenaged girls and providing education in schools,</li>
              <li><strong>DETER</strong> and reduce the demand by focusing on the buyers/Johns through our “Buy Sex? Bye, bye Freedom!” billboard, radio and TV campaign,</li>
              <li><strong>CONDUCT RESEARCH</strong> to provide much needed data and to shape public policy, and</li>
              <li><strong>EDUCATE</strong> thousands of people each year through our annual conference and trainings.</li>
            </ul>
            </Col>
            <Row><Col style={{marginBottom: "25px"}}>Get involved! Volunteer today and make a difference.</Col></Row>
            
            </Row>
            <Row>
              <Col>
                <h2>Sex Trafficking</h2>
                <p>
                Houston is a hub for both international and domestic sex trafficking. International human trafficking is prevalent in Houston because this city is located near the border, has a port, an international airport, and is ethnically diverse. International women and girls are being trafficked in Houston’s massage parlors and cantinas.</p>
                <p>
                Additionally, Houston has a huge problem with the sex trafficking of American minors, which is Free the Captives’ predominant focus. While we have had the privilege to serve international victims, the majority of our girls are US citizens. Many people assume that the majority of trafficking victims are from other countries, in actuality, there is a very significant number of girls trafficked in Houston that were born and raised here. Human trafficking is happening in our neighborhoods and communities. We have served girls from all over greater Houston including Alief, Baytown, Greenspoint, Third Ward, Fifth Ward, Cypress, Katy, and The Woodlands. Human trafficking does not discriminate and affects girls from all socioeconomic backgrounds.</p>
                <p>
                Typically, the minors we serve are teenaged girls, but there are also boys being trafficked in Houston as well. The children most at risk for trafficking are runaways, throwaways, and homeless. The girls that we work with typically come from a background that includes sexual abuse, broken homes, low self-esteem, fatherlessness, and juvenile delinquency. These factors make them greatly vulnerable to sex traffickers. American girls are being sold over the Internet and trafficked through local Houston motels or private residences.</p>
                <p>
                Trafficking victims are referred to us by law enforcement, nonprofits, and victims’ families. To learn more about our services and programs for trafficking victims, click here.</p>
                <h4>Learn more about human trafficking and what it&nbsp;involves:</h4>
                <div style={{padding:"60% 0 0 0", position:"relative", maxWidth: "75%"}}><iframe src="https://player.vimeo.com/video/10410137?title=0&byline=0&portrait=0" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </Col>
            </Row>

        </Container>
        </main>
        </>
)
}

export default About;