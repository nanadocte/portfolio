function SkillCard({ logo, titre, contenu }) {
  return (
    <>
      <img src={logo}></img>
      <h3>{titre}</h3>
      <ul>
        {contenu.map((contain, index) => (
          <li key={index}>{contain}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillCard;
