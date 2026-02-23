import SectionTitle from '../components/SectionTitle';
import projets from '../data/projets.json';
import ProjetCard from '../components/ProjetCard';
import { useState } from 'react';

function Projets() {
  const [buttonActif, setButtonActif] = useState('Tous');
  const uniqueStack = [...new Set(projets.flatMap((projet) => projet.stack))];
  return (
    <section id="project" className=" w-full p-32 bg-[#020617] ">
      <div className=" w-full max-w-5xl m-auto flex flex-col gap-3">
        <SectionTitle sectionName="03. Projets" contenu="Mes réalisations" />
        <ul className="flex flex-wrap gap-5 text-sm mb-6">
          <li
            className={`md:text-base text-sm hover:bg-gradient-to-r hover:from-indigo-800  hover:to-purple-600  bg-slate-800 
        py-1 px-3 rounded-2xl text-slate-400
        ${buttonActif === 'Tous' ? 'bg-gradient-to-r from-indigo-800 to-purple-600' : 'bg-slate-800'}`}
            onClick={() => setButtonActif('Tous')}
          >
            Tous
          </li>
          {uniqueStack.map((projet) => (
            <li
              className={`md:text-base text-sm hover:bg-gradient-to-r hover:from-indigo-800  hover:to-purple-600 bg-slate-800 
            py-1 px-3 rounded-2xl text-slate-400
            ${buttonActif === projet ? 'bg-gradient-to-r from-indigo-800 to-purple-600' : 'bg-slate-800'}
            `}
              onClick={() => setButtonActif(projet)}
              key={projet}
            >
              {projet}
            </li>
          ))}
        </ul>
        <div className="justify-center gap-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {projets
            .filter(
              (projet) =>
                buttonActif === 'Tous' || projet.stack.includes(buttonActif)
            )
            .map((projet) => (
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
      </div>
    </section>
  );
}

export default Projets;
