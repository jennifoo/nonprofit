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
            <h1>Mission Statement</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo varius dolor, id malesuada est volutpat a.</p>
            </Col>
        </Row>
        </section>

        <div id="mission-image"></div>
        
        <section id="promote-section">
            <h2>We Need Your Help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo varius dolor, id malesuada est volutpat a. Nullam et pharetra enim. Integer felis libero, mollis et tincidunt a, hendrerit vitae velit. Proin venenatis metus ex, eu eleifend elit dapibus sed. Aenean volutpat consequat tempus. Suspendisse nibh lacus, placerat ut est quis, scelerisque faucibus nisi.</p>
        </section>

        <Feature />
        </Container>
        </main>
        </>
)
}

export default Home;