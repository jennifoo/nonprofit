import React, { useRef, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useStoreContext } from "../../utils/GlobalState";
import { STORE_RESULTS, ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Blog_Snippet() {

  const [state, dispatch] = useStoreContext();

  useEffect(
    () => {
    // AUTOMATICALLY GRAB DB DATA AND STORE INTO STATE
    API.getDbPost()
      .then(results => {
        dispatch({
          type: STORE_RESULTS,
          postsDb: results.data
        })
        // console.log(results.data);  // Array of objects containing keys: id, author, title, post
      }).catch(err => console.log(err));
    },
    []
  );

  let html = function(){
    return state.posts.map((elem) => (
    <div key={elem._id} className="result-div">
      <h2>{elem.title}</h2>
      <p>{ReactHtmlParser(elem.post.substring(0,1000))} [...]</p>
      <Link to={"/api/post/" + elem._id}><button>Read More</button></Link>
    </div>
  ))
  }

  return(
    <>
    <Row className="blog-snippet">
      <Col>
        {html()}
      </Col>
    </Row>
  </>
  )
}

export default Blog_Snippet;