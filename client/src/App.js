import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Nav_Enewsletter from './components/Nav_Enewsletter';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Blog_Editor from './pages/Blog_Editor';
import Blog_Post from './pages/Blog_Post';
import Footer from './components/Footer'
import { StoreProvider } from "./utils/GlobalState";


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
      <Route exact path="/api/post/:id">
        <Blog_Post />
        <Footer />
      </Route>
    </Switch>
    </StoreProvider>
    </Router>
    </>
  );
}

export default App;




