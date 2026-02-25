import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const lienNav = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projet', id: 'project' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-20 p-5 backdrop-blur-md font-mono transition-all duration-300
    ${scroll ? 'border-b border-gray-900/30' : 'border-b border-transparent'}
    bg-gray-950 md:bg-gray-950/60`}
    >
      {/* Mobile: flex-col */}
      <div className="flex flex-row-reverse md:flex-row justify-between items-start md:items-center">
        {/* Logo */}
        <Link to={`/`} className="mb-4 md:mb-0">
          <p className="opacity-80 text-xl bg-linear-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </p>
        </Link>

        {/* Burger + menu mobile */}
        <div className="md:hidden flex flex-col gap-5">
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
            <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
            <div className="w-6 h-0.5 bg-slate-400"></div>
          </div>

          {open && (
            <ul className="flex flex-col gap-5 text-sm text-slate-400">
              {lienNav.map((contenu, index) => (
                <li key={index}>
                  {location.pathname === '/' ? (
                    <a
                      href={`#${contenu.id}`}
                      className="hover:bg-linear-to-r hover:from-indigo-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer transition-colors duration-500"
                    >
                      {contenu.label}
                    </a>
                  ) : (
                    <Link
                      to={`/#${contenu.id}`}
                      className="hover:bg-linear-to-r hover:from-indigo-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer transition-colors duration-500"
                    >
                      {contenu.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex text-sm lg:text-base gap-8 lg:gap-10 flex-row text-slate-400">
          {lienNav.map((contenu, index) => (
            <li key={index}>
              {location.pathname.startsWith('/projet') ? (
                <Link
                  to={`/#${contenu.id}`}
                  className="hover:bg-linear-to-r hover:from-indigo-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer transition-colors duration-500"
                >
                  {contenu.label}
                </Link>
              ) : (
                <a
                  href={`#${contenu.id}`}
                  className="hover:bg-linear-to-r hover:from-indigo-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer transition-colors duration-500"
                >
                  {contenu.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
