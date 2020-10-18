import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useStoreContext } from "../../utils/GlobalState";
import { STORE_RESULTS } from "../../utils/actions";
import API from "../../utils/API";
import ReactHtmlParser from 'react-html-parser';
import { BrowserRouter as Link } from "react-router-dom";


function BlogSnippet() {

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

  // let html = function(){
  //   return state.posts.map((elem) => (
  //   <div key={elem._id} className="result-div">
  //     <h2>{elem.title}</h2>
  //     <div>{ReactHtmlParser(elem.post.substring(0,500))} [...]</div>
  //     <Link to={"/api/post/" + elem._id}><button className="bx">Read More</button></Link>
  //   </div>
  // ))
  // }

  return(
    <>
    
    <Row className="blog-snippet page-padded">
      <Col>
        {state.posts.map((elem) => (
            <div key={elem._id} className="result-div">
              <h2>{elem.title}</h2>
              <div>{ReactHtmlParser(elem.post.substring(0,500))} [...]</div>
              <a className="bx" href={"/api/post/" + elem._id}>Read More</a>
            </div>
        ))}
      </Col>
    </Row>
  </>
  )
}

export default BlogSnippet;