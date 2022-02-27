import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioPuffin from './components/portfolio/PortfolioPuffin';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <>
        <Header/>
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        </>
        }/>
        
        <Route path="/puffin" element={<PortfolioPuffin />}/>

      </Routes>
    </div>
  );
}

export default App;
