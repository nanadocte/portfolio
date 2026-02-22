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
    <div className="bg-gray-950">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Competences />
      <Projets />
      <Parcours />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
