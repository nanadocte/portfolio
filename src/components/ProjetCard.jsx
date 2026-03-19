import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function ProjetCard({
  img,
  titre,
  description,
  stack,
  github,
  slug,
  onVisible,
  isVisible,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible();
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="group  overflow-hidden bg-slate-800/20 border border-white/10 rounded-2xl flex flex-col"
    >
      <div className="relative w-full h-60 overflow-hidden shrink-0">
        <img
          loading="lazy"
          className=" opacity-70 h-full w-full object-cover group-hover:opacity-50  transition-all duration-300"
          src={img}
          alt={titre}
        ></img>

        <div
          className={`bg-linear-to-r  from-indigo-600/90 to-purple-600/90 sm:opacity-0 sm:hover:opacity-100 absolute inset-0 p-3 flex flex-col  flex-1 h-full gap-1 md:gap-2 justify-between text-center
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        >
          <div>
            <h3 className="text-slate-100 text-base md:text-lg font-semibold ">
              {titre}
            </h3>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 justify-center items-center">
            <Link
              aria-label="Lien pour accéder au détail du projet"
              className="relative z-20 inset-0"
              to={`/projet/${slug}`}
            >
              <button className="bg-slate-200 text-slate-200 cursor-pointer transition-transform duration-300 hover:scale-110 ">
                Voir plus
              </button>
            </Link>

            {!stack ||
              (stack.length === 0 && (
                <p className=" text-slate-400 text-xs ">{description}</p>
              ))}
            <ul className="justify-center flex flex-wrap gap-2 text-xs text-slate-400">
              {' '}
              {stack?.map((tech) => (
                <li
                  className="text-slate-400 flex items-center px-0 py-0 text-xs rounded-2xl "
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
                  className="m-0 text-indigo-400 transition-transform duration-300 hover:scale-110"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      {/*  */}
    </article>
  );
}

export default ProjetCard;
