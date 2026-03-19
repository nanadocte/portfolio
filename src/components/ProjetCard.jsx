import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function ProjetCard({ img, titre, description, stack, github, slug }) {
  return (
    <article className="group relative overflow-hidden bg-slate-800/20 border border-white/10 rounded-2xl flex flex-col">
      <Link
        aria-label="Lien pour accéder au détail du projet"
        className="absolute z-10 inset-0"
        to={`/projet/${slug}`}
      ></Link>
      <div className="w-full h-48 overflow-hidden shrink-0">
        <img
          loading="lazy"
          className="opacity-60 h-full w-full object-cover group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
          src={img}
          alt={titre}
        ></img>
      </div>

      <div className="p-3 flex flex-col  flex-1 h-full gap-1 md:gap-2 justify-between">
        <div>
          <h3 className="text-slate-200 text-base md:text-lg font-semibold ">
            {titre}
          </h3>
          <p className=" text-slate-400 text-xs hidden md:flex">
            {description}
          </p>
        </div>

        <div className="flex flex-row gap-1 md:gap-2 justify-between items-center">
          <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
            {' '}
            {stack?.map((tech) => (
              <li
                className="md:bg-indigo-900/30 flex items-center px-0 py-0 text-xs rounded-2xl  md:px-3 md:py-2"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
          {github && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers le repository du projet"
              className="z-20"
              href={github}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="mt-3 text-indigo-400 transition-transform duration-300 hover:scale-110"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjetCard;
