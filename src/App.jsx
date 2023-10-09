import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main/>
        <Work/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
