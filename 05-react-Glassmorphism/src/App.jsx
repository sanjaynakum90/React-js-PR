import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => (
  <div className="container py-5">
    <Hero />
    {/* <About /> */}
    {/* <Projects /> */}
    <Contact />
  </div>
);

export default App;