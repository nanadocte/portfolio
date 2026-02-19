// Use state coeur ajout

import './App.css';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Competences from './sections/Competences';
import Projets from './sections/Projets';
import Parcours from './sections/Parcours';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Competences />
      <Projets />
      <Parcours />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
