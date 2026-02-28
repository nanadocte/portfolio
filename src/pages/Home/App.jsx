// Use state coeur ajout

import Nav from '../../components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Competences from './sections/Competences';
import Projets from './sections/Projets';
import Parcours from './sections/Parcours';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Competences />
      <Projets />
      <Parcours />
      <Contact />
    </>
  );
}

export default App;
