import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Nav_Enewsletter from './components/Nav_Enewsletter';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Blog_Editor from './pages/Blog_Editor';
import Footer from './components/Footer'

import { StoreProvider } from "./utils/GlobalState";


import { Editor } from "@tinymce/tinymce-react";


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { content: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(content, editor) {
//     this.setState({content});
//   }
  
//   handleSubmit(event) {
//     alert("Text was submitted: " + this.state.content);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>Introduction to Software Engineering</h2>
//         <h3>Provide a course overview</h3>
//         <Editor
//          apiKey="26mjhd3w4g3zkyxeqxkvveljjgkxgo6e91u6g96ira550mw1"
//          value={this.state.content}
//         init={{
//             height: 500,
//             menubar: false
//         }}
//         onEditorChange={this.handleChange}
//         />

//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

function App() {
  return (
    <>
    <Router>
    <StoreProvider>
    <Nav_Enewsletter />
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route exact path="/about">
        <About />
        <Footer />
      </Route>
      <Route exact path="/blog">
        <Blog />
        <Footer />
      </Route>
      <Route exact path="/blog-editor">
        <Blog_Editor />
        <Footer />
      </Route>
    </Switch>
    </StoreProvider>
    </Router>
    </>
  );
}

export default App;




