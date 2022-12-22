
import Intro from './components/intro';
import Timeline from './components/timeline';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div className="App">
     <Intro />
     <Portfolio />
     <Timeline />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
