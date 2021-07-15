import React from 'react';
import './App.scss';

import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import WorkExperience from './components/workexp/work-experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
