import { useState } from 'react';

function Nav() {
  const [open, setOpen] = useState(false);
  const lienNav = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projet', id: 'project' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];
  return (
    <nav className="justify-between p-5 border-b border-gray-900/20 backdrop-blur-md bg-gray-950/70  font--jet  z-1 item-center fixed bg-gray-950 flex flex-rowp-5 w-full">
      <div className="md:hidden flex gap-5 flex-col">
        <div onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400"></div>
        </div>
        {open && (
          <ul className="md:hidden gap-5 text-sm flex flex-col gap-5 text-sm md:text-base md:gap-10 text-slate-400">
            {lienNav.map((contenu, index) => (
              <li key={index}>
                <a
                  onClick={() => setOpen(false)}
                  href={`#${contenu.id}`}
                  className="text-slate-400 hover:bg-gradient-to-r 
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

      <p className="opacity-80 text-xl bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
        Porfolio
      </p>

      <ul className="hidden md:flex text-sm lg:text-base gap-8 lg:gap-10 flex-row text-slate-400">
        {lienNav.map((contenu, index) => (
          <li key={index}>
            <a
              href={`#${contenu.id}`}
              className="text-slate-400 hover:bg-gradient-to-r 
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
