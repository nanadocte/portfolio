import SectionTitle from '../components/SectionTitle';
import projets from '../data/projets.json';
import ProjetCard from '../components/ProjetCard';

function Projets() {
  const uniqueStack = [...new Set(projets.flatMap((projet) => projet.stack))];
  console.log(uniqueStack);
  return (
    <section className="px-76 p-32 bg-[#020617] flex flex-col gap-3">
      <SectionTitle sectionName="03. Projets" contenu="Mes réalisations" />
      <ul className="flex gap-5 text-sm mb-6">
        <li className="hover:bg-gradient-to-r hover:from-indigo-800  hover:to-purple-600  bg-slate-800 py-1 px-3 rounded-2xl text-slate-400">
          Tous
        </li>
        {uniqueStack.map((projet) => (
          <li
            className="hover:bg-gradient-to-r hover:from-indigo-800  hover:to-purple-600 bg-slate-800 py-1 px-3 rounded-2xl text-slate-400"
            key={projet}
          >
            <button>{projet}</button>
          </li>
        ))}
      </ul>
      <div className="flex gap-12 justify-center">
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
      </div>
    </section>
  );
}

export default Projets;
