import React, { useRef, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feature from '../../components/Feature';
import fcopy from './feature.json';
import ReactHtmlParser from 'react-html-parser';
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";


function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

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
            <Link to="/about"><button className="bx">Learn More</button></Link>
            </Col>
        </Row>
        </section>

        {/* <div id="mission-image"></div> */}
        {/* <img src={require('../../images/'+ props.image)} */}
        <Parallax className="parallax" bgImage={require('../../images/free-the-captives-girls-banner-4.jpg')} strength={-250}>
            <div style={{ height: "575px"}}></div>
        </Parallax>
        
        <section id="awareness-section">
        <Row className="awareness-statement">
            <Col>
            <h2>Human Sex Trafficking in Houston</h2>
            <p>The average age of girls being trafficked is between the ages of 12 to 14 years old. We also engage and mobilize volunteers from the community while partnering with non-profits and government agencies in the fight against modern day slavery, you can join us in the fight against human slavery.</p>
            <Link to="/about"><button className="bx">Fight Slavery</button></Link>
            </Col>
        </Row>
        </section>
        
        
        {fcopy.map((elem) => (
          <FadeInSection key={elem.title}>
          <Feature 
          image={elem.image}
          title={elem.title}
          subtitle={elem.subtitle}
          snippet={ReactHtmlParser(elem.snippet)}
          link={elem.link}
          />
          </FadeInSection>
        ))
        
        }
        
        
        {/*         
        <Feature />
        <Feature />
        <Feature /> */}
        </Container>
        </main>
        </>
)
}

export default Home;