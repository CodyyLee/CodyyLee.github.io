import React from 'react';
import { Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";

function App() {
  
  return (
    <div className="app">
      <Route path="/" render={(props) => {
        return <Navigation {...props}/>
      }}/>

      <Route path="/" exact render={(props) => {
        return <Home {...props}/>
      }} />

      <Route path="/overview" render={() => {
        return <About />
      }}/>

      <Route path="/projects" render={() => {
        return <Projects />
      }} />

      <Route path="/contact" render={() => {
        return <Contact />
      }} />
    </div>
  );
}

export default App;
