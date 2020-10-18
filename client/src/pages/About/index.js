import React from "react";
import Banner from '../../components/Banner'
import Container from 'react-bootstrap/Container'
import Blog_Snippet from '../../components/Blog_Snippet';

function About() {
return (
        <>
        <Banner h1="About" />
        <main id="about" class="page-padded">
        <Container fluid>
            <h2>Mission</h2>
            <p>Free the Captives is a faith-based anti-human trafficking 501(c)(3) non-profit that fights the exploitation and trafficking of Houston’s youth. We engage and mobilize the Christian community while partnering with non-profits, law enforcement, and government agencies in the fight against modern day slavery.</p>
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


        </Container>
        </main>
        </>
)
}

export default About;