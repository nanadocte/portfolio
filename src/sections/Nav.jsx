function Nav() {
  const lienNav = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projet', id: 'project' },
    { label: 'Parcours', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];
  return (
    <nav>
      <p>Porfolio</p>
      <ul>
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
