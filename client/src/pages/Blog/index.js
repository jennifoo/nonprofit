import React from "react";
import Banner from '../../components/Banner'
import Container from 'react-bootstrap/Container'
import Blog_Snippet from '../../components/Blog_Snippet';

function Blog() {
return (
        <>
        <main id="blog">
        <Container fluid>
            <Banner h1="Blog" />
            <Blog_Snippet />
        </Container>
        </main>
        </>
)
}

export default Blog;