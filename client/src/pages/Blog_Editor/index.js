/* NEXT STEPS
- Database seeded with seed file ***DONE***
- Mongoose Schema setup ***DONE***
- Get all to display all post to page ***DONE***
- User login and authentication
- Hide API keys and other sensitive info
- Get HTML parser ***DONE***
- Packages to add: Editor and HTML Parser ***DONE***
- Format Blog Editor Page
- Update Blog Listing Page
- Individual Blog Pages
*/

import React, { useRef, useEffect } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useStoreContext } from "../../utils/GlobalState";
import { STORE_RESULTS, ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function Blog_Editor() {
  const titleRef = useRef();

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

  // EVENT: SUBMIT --> ADD SINGLE POST TO DATABASE AND APPEND TO POSTS ARRAY
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    var content = event.target[1].value;
    // console.log(content);

    API.savePost({
      title: titleRef.current.value,
      post: content
    })
    .then(result => {
      // console.log("result", result); // NOTE: res.json returns back the object that was created, not the entire table.
      dispatch({
        type: ADD_POST,
        post: result.data
      });
    })
    .catch(err => console.log(err));

  }

  // console.log(state);

  let html = function(){
    return state.posts.map((elem) => (
    <div key={elem._id} className="result-div">
      <h2>{elem.title}</h2>
      <p>{ReactHtmlParser(elem.post.substring(0,1000))} [...]</p> 
    </div>
  ))
  }

  return (
      <main className="blog-editor">
      {html()}
      <form>
        <hr></hr>
        <h2>Create a Blog Post</h2>
        <h3>Enter information below</h3>
        <input name="Title" placeholder="Title" ref={titleRef}></input>
        <Editor
         apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
         init={{
            height: 500,
            menubar: false
        }} 
        onSubmit={handleSubmit} />

        <br />
        <input type="submit" value="Submit" />
      </form>
      </main>
  )
}



export default Blog_Editor;