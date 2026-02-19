function ProjetCard({ img, titre, description, stack, github }) {
  return (
    <div>
      <img src={img}></img>
      <h4>{titre}</h4>
      <p>{description}</p>
      <ul>
        {' '}
        {stack.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
      <a href={github}>
        <img></img>
      </a>
    </div>
  );
}

export default ProjetCard;
