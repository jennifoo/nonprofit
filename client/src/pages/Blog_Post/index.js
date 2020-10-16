import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useStoreContext } from "../../utils/GlobalState";
import { SET_CURRENT_POST } from "../../utils/actions";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

function Blog_Post() {

const [state, dispatch] = useStoreContext();

const {id} = useParams()
useEffect(() => {
  API.getPost(id)
    .then(result => {
      // Returns the document that was requested by Id
      console.log(result.data)
      dispatch({
        type: SET_CURRENT_POST,
        currentPst: result.data
      })
    })
})

return (
        <>
        <main id="blog-post">
        <Container fluid>
            <h1>Post Title</h1>
            <p>Post Body Copy</p>
            <Link to="/blog">Back to Archives</Link>
        </Container>
        </main>
        </>
)
}

export default Blog_Post;