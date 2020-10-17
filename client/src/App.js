// REQUIRE MODULES
import React from 'react';
import './App.css';
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navigation from './components/Navigation';
import Nav_Enewsletter from './components/Nav_Enewsletter';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Blog_Editor from './pages/Blog_Editor';
import Blog_Post from './pages/Blog_Post';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer'




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
      <Route exact path="/signup">
        <Signup />
        <Footer />
      </Route>
      <Route exact path="/login">
        <Login />
        <Footer />
      </Route>
    </Switch>
    </StoreProvider>
    </Router>
    </>
  );
}

export default App;




