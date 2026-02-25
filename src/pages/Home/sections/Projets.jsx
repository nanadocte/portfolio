import SectionTitle from '../../../components/SectionTitle';
import projets from '../../../data/projets.json';
import ProjetCard from '../../../components/ProjetCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Projets() {
  const [buttonActif, setButtonActif] = useState('Tous');
  const uniqueStack = [...new Set(projets.flatMap((projet) => projet.stack))];
  return (
    <section id="project" className=" w-full py-20 xs:py-32 px-10 bg-dark ">
      <div className=" w-full max-w-4xl m-auto flex flex-col gap-3">
        <SectionTitle sectionName="03. Projets" contenu="Mes réalisations" />
        <ul className="flex flex-wrap gap-5 text-sm mb-6">
          <li
            className={`cursor-pointer md:text-base text-sm hover:bg-linear-to-r hover:from-indigo-800  hover:to-purple-600  bg-slate-800 
        py-1 px-3 rounded-2xl text-slate-400
        ${buttonActif === 'Tous' ? 'bg-linear-to-r from-indigo-800 to-purple-600' : 'bg-slate-800'}`}
            onClick={() => setButtonActif('Tous')}
          >
            Tous
          </li>
          {uniqueStack.map((projet) => (
            <li
              className={`cursor-pointer md:text-base text-sm hover:bg-linear-to-r hover:from-indigo-800  hover:to-purple-600 bg-slate-800 
            py-1 px-3 rounded-2xl text-slate-400
            ${buttonActif === projet ? 'bg-linear-to-r from-indigo-800 to-purple-600' : 'bg-slate-800'}
            `}
              onClick={() => setButtonActif(projet)}
              key={projet}
            >
              {projet}
            </li>
          ))}
        </ul>
        <div className="justify-center gap-8 grid grid-cols-[repeat(auto-fit,minmax(320px,2fr))]">
          {projets
            .filter(
              (projet) =>
                buttonActif === 'Tous' || projet.stack.includes(buttonActif)
            )
            .map((projet) => (
              <Link key={projet.id} to={`/projet/${projet.slug}`}>
                <ProjetCard
                  img={projet.img}
                  titre={projet.titre}
                  description={projet.description}
                  stack={projet.stack}
                  github={projet.github}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
