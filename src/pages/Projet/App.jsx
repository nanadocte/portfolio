import Nav from '../Home/sections/Nav';

import Footer from '../Home/sections/Footer';
import projets from '../../data/projets.json';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const projet = projets.find((item) => slug === item.slug);
  if (!projet)
    return (
      <div className="flex flex-col min-h-screen bg-dark">
        <Nav />

        <div className="flex-1 flex flex-col justify-center items-center gap-10">
          <h1 className="font-mono text-center text-indigo-400 text-xl sm:text-8xl font-semibold tracking-wide">
            Une erreur s'est produite
          </h1>
          <p className="font-mono text-center text-indigo-200 text-md sm:text-xl">
            Ce projet est introuvable...
          </p>
          <Link className="font-mono text-slate-400" to={'/'}>
            <button>Revenir à la page principale</button>
          </Link>
        </div>

        <Footer />
      </div>
    );
  return (
    <>
      <Nav></Nav>

      <main>
        <section className="font-mono w-full py-20 px-10 bg-dark min-h-screen">
          <div className="w-full max-w-7xl p-10 mx-auto flex flex-col gap-8">
            <h1 className="text-center text-4xl md:text-5xl font-bold text-slate-200">
              {projet.titre}
            </h1>

            <img
              src={projet.img}
              alt={projet.titre}
              className="w-full rounded-2xl object-cover shadow-lg opacity-80 "
            />

            <p className="text-slate-400 text-lg">{projet.description}</p>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Contexte
              </h2>
              <p className="text-slate-400">{projet.contexte}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Objectifs
              </h2>
              <p className="text-slate-400">{projet.objectifs}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Stack technique
              </h2>
              <ul className="flex flex-wrap gap-2">
                {projet.stack.map((tech) => (
                  <li
                    key={tech}
                    className="md:bg-indigo-900/30 px-3 py-1 rounded-2xl text-xs md:text-sm text-slate-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Compétences développées
              </h2>
              <p className="text-slate-400">{projet.competences}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Résultats & impact
              </h2>
              <p className="text-slate-400">{projet.resultats}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Perspectives d'amélioration
              </h2>
              <p className="text-slate-400">{projet.ameliorations}</p>
            </div>

            <div className="flex gap-4 mt-4">
              {projet.github && (
                <a
                  href={projet.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-slate-800 rounded-2xl hover:bg-slate-700 transition"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-indigo-400"
                  />
                  GitHub
                </a>
              )}
              {projet.demo && (
                <a
                  href={projet.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-500 transition"
                >
                  Démo
                </a>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
