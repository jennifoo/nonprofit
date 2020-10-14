import React from 'react';
import { Editor } from "@tinymce/tinymce-react";


class Blog_Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({content});
  }
  
  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <main className="blog-editor">
      <form onSubmit={this.handleSubmit}>
        <h2>Create a Blog Post</h2>
        <h3>Enter information below</h3>
        <Editor
         apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
         value={this.state.content}
        init={{
            height: 500,
            menubar: false
        }}
        onEditorChange={this.handleChange}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
      </main>
    );
  }
}

export default Blog_Editor;