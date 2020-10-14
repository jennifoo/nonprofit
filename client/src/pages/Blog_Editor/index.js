import React, { useRef } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useStoreContext } from "../../utils/GlobalState";
import { SHOW_POSTS } from "../../utils/actions";

function Blog_Editor() {
  const inputRef = useRef();

  const [state, dispatch] = useStoreContext();

  function handleSubmit(event, editor) {
    event.preventDefault();
    // let value1 = inputRef.current.value;
    // let value2 = event.target.value;
    // console.log(event);
    // console.log(value1); // undefined
    // console.log(value2); // undefined

    // console.log("event", event)
    // console.log("editor", editor)
    var value = event.target[0].value;
    console.log(value);
    
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