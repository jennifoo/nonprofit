/* NEXT STEPS
- Database seeded with seed file
- Mongoose Schema setup
- Get all to display all post to page
- Login to get access to login page
- Hide API keys and other sensitive info
*/

import React, { useRef } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useStoreContext } from "../../utils/GlobalState";
import { SHOW_POSTS } from "../../utils/actions";
import API from "../../utils/API";

function Blog_Editor() {
  const titleRef = useRef();

  const [state, dispatch] = useStoreContext();

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
      console.log("result", result);
    })
    .catch(err => console.log(err));
  }

  function handleChange(value, editor) {
    // console.log("HC content", value);
    // console.log("HC editor", editor);
  }

  return (
      <main className="blog-editor">
      <form>
        <h2>Create a Blog Post</h2>
        <h3>Enter information below</h3>
        <input name="Title" placeholder="Title" ref={titleRef}></input>
        <Editor
         apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
         init={{
            height: 500,
            menubar: false
        }} 
        onEditorChange={handleChange}
        onSubmit={handleSubmit} />

        <br />
        <input type="submit" value="Submit" />
      </form>
      </main>
  )
}


// class Blog_Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { content: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleChange(content, editor) {
//   //   this.setState({content});
//   // }
  
//   // handleSubmit(event) {
//   //   alert("Text was submitted: " + this.state.content);
//   //   event.preventDefault();
//   // }

//   render() {
//     return (
//       // <main className="blog-editor">
//       // <form onSubmit={this.handleSubmit}>
//       //   <h2>Create a Blog Post</h2>
//       //   <h3>Enter information below</h3>
//       //   <Editor
//       //    apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
//       //    value={this.state.content}
//       //   init={{
//       //       height: 500,
//       //       menubar: false
//       //   }}
//       //   onEditorChange={this.handleChange}
//       //   />

//       //   <br />
//       //   <input type="submit" value="Submit" />
//       // </form>
//       // </main>
//     );
//   }
// }

export default Blog_Editor;