// REQUIRE MODULES
import React from 'react';
import './App.css';
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navigation from './components/Navigation';
import NavEnewsletter from './components/NavEnewsletter';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogEditor from './pages/BlogEditor';
import BlogPost from './pages/BlogPost';
import Signup from './pages/Signup';
import Footer from './components/Footer'




function App() {
  return (
    <>
    <Router>
    <StoreProvider>
    <NavEnewsletter />
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
        <BlogEditor />
        <Footer />
      </Route>
      <Route exact path="/api/post/:id">
        <BlogPost />
        <Footer />
      </Route>
      <Route exact path="/signup">
        <Signup />
        <Footer />
      </Route>
    </Switch>
    </StoreProvider>
    </Router>
    </>
  );
}

export default App;




