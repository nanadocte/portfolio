import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function ProjetCard({ img, titre, description, stack, github, slug }) {
  return (
    <article className=" relative max-h-72 sm:max-h-80 md:max-h-96 bg-slate-800/20 overflow-hidden border border-white/10 rounded-2xl flex flex-col gap-2">
      <Link className="absolute z-10 inset-0" to={`/projet/${slug}`}></Link>
      <img
        loading="lazy"
        className="opacity-60  h-48 sm:h-50   w-full object-cover hover:scale-110 transition-all duration-300"
        src={img}
        alt={titre}
      ></img>

      <div className="p-3 flex flex-col  flex-1 h-full gap-1 md:gap-2 justify-between ">
        <div>
          <h3 className="text-slate-200 text-base md:text-lg font-semibold">
            {titre}
          </h3>
          <p className="text-slate-400 text-xs hidden md:flex">{description}</p>
        </div>

        <div className="flex flex-row gap-1 md:gap-2 justify-between items-center">
          <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
            {' '}
            {stack.map((stack) => (
              <li
                className="md:bg-indigo-900/30 flex items-center px-1 py-0 text-xs rounded-2xl md:px-3 md:py-2"
                key={stack}
              >
                {stack}
              </li>
            ))}
          </ul>
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
        </div>
      </div>
    </article>
  );
}

export default ProjetCard;
