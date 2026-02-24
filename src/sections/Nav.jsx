import { useState, useEffect } from 'react';

function Nav() {
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
      className={` justify-between p-5 backdrop-blur-md 
      font-mono  z-2 items-center fixed bg-gray-950/70 flex flex-rowp-5 w-full
    transition-all duration-300
    ${scroll ? 'border-b border-gray-900/30' : 'border-b border-transparent'}`}
    >
      <div className="md:hidden flex gap-5 flex-col">
        <div onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400"></div>
        </div>
        {open && (
          <ul className="md:hidden  flex flex-col gap-5 text-sm md:text-base md:gap-10 text-slate-400">
            {lienNav.map((contenu, index) => (
              <li key={index}>
                <a
                  onClick={() => setOpen(false)}
                  href={`#${contenu.id}`}
                  className="text-slate-400 hover:bg-linear-to-r 
                  hover:from-indigo-400 
                  hover:to-purple-600
                  hover:bg-clip-text 
                  hover:text-transparent cursor-pointer transition-colors duration-500"
                >
                  {' '}
                  {contenu.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="opacity-80 text-xl bg-linear-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
        Porfolio
      </p>

      <ul className="hidden md:flex text-sm lg:text-base gap-8 lg:gap-10 flex-row text-slate-400">
        {lienNav.map((contenu, index) => (
          <li key={index}>
            <a
              href={`#${contenu.id}`}
              className="text-slate-400 hover:bg-linear-to-r 
              hover:from-indigo-400 
              hover:to-purple-600
              hover:bg-clip-text 
              hover:text-transparent cursor-pointer transition-colors duration-500"
            >
              {' '}
              {contenu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
