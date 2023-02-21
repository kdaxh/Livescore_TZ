import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import Results from './components/Results/Results';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Results/>
        
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
