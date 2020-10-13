import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feature from '../../components/Feature';


function Home() {
return (
        <>
        <main id="homepage">
        <Container fluid>
        
        <section id="mission-section">
        <Row className="mission-statement">
            <Col>
            <h1>— Free The Captives Mission —</h1>
            <p>We rescue and restore teenaged sex trafficking victims by working with law enforcement and providing rescued victims with support groups, mentoring, jobs, material assistance, and other direct services.</p>
            <button>Learn More</button>
            </Col>
        </Row>
        </section>

        <div id="mission-image"></div>
        
        <section id="promote-section">
            <h2>Human Sex Trafficking in Houston</h2>
            <p>The average age of girls being trafficked is between the ages of 12 to 14 years old. We also engage and mobilize volunteers from the community while partnering with non-profits and government agencies in the fight against modern day slavery, you can join us in the fight against human slavery.</p>
            <button>Fight Slavery</button>
        </section>

        <Feature />
        </Container>
        </main>
        </>
)
}

export default Home;