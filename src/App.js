import React from 'react';

import './App.css';
import { About } from './componnents/About/About';
import { Contact } from './componnents/Contact/Contact';
import { Experience } from './componnents/Experience/Experience';
import Footer from './componnents/Footer/Footer';
import { Header } from './componnents/Header/Header';
import { Nav } from './componnents/Nav/Nav';
import { Portfolio } from './componnents/Portfolio/Portfolio';
import { Services } from './componnents/Servicess/Services';
import { Textimonials } from './componnents/Textimonials/Textimonials';


function App() {
  return (
   <>
  <Header />
  <Nav />
  <About />
 <Experience />
 <Services />
 <Portfolio />
 <Textimonials />
 <Contact />
 <Footer />
   </>
  );
}

export default App;
