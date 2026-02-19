import SectionTitle from '../components/SectionTitle';
import projets from '../data/projets.json';
import ProjetCard from '../components/ProjetCard';

function Projets() {
  const stackList = ['blabla', 'blabla'];
  return (
    <>
      <SectionTitle sectionName="03. Projets" contenu="Mes réalisations." />
      <ul>
        <li>Tous</li>
        {stackList.map((stack) => (
          <li key={stack}>
            <button>{stack}</button>
          </li>
        ))}
      </ul>
      {projets.map((projet) => (
        <ProjetCard
          key={projet.id}
          img={projet.img}
          titre={projet.titre}
          description={projet.description}
          stack={projet.stack}
          github={projet.github}
        />
      ))}
    </>
  );
}

export default Projets;
