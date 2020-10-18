import React from "react";
import Banner from '../../components/Banner'
import Container from 'react-bootstrap/Container'
import BlogSnippet from '../../components/BlogSnippet';

function Blog() {
return (
        <>
        <main id="blog">
        <Container fluid>
            <Banner h1="Blog" />
            <BlogSnippet />
        </Container>
        </main>
        </>
)
}

export default Blog;