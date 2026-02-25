// Use state coeur ajout

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
      <main className="bg-gray-950">
        <Hero></Hero>
        <About></About>
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
