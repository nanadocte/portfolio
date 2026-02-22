function Nav() {
  const lienNav = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projet', id: 'project' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];
  return (
    <nav className="fixed bg-gray-950 flex flex-row justify-between pr-10 pl-10 pt-10 w-full">
      <p>Porfolio</p>
      <ul className="flex flex-row gap-5">
        {lienNav.map((contenu, index) => (
          <li key={index}>
            <a href={`#${contenu.id}`}> {contenu.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
