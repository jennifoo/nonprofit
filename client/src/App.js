import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Nav_Enewsletter from './components/Nav_Enewsletter';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer'

function App() {
  return (
      <>
      <Router>
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
      </Switch>
      </Router>
      </>
  );
}

export default App;
