function Nav() {
  const lienNav = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projet', id: 'project' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];
  return (
    <nav className="border-b border-gray-900/20 backdrop-blur-md bg-gray-950/70  font--jet  z-1 item-center fixed bg-gray-950 flex flex-row justify-between p-5 w-full">
      <p className="opacity-80 text-xl bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
        Porfolio
      </p>
      <ul className="flex flex-row gap-10 text-slate-400">
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
