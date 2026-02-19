import SectionTitle from '../components/SectionTitle';

function About() {
  const stack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Git',
  ];
  return (
    <>
      <div>
        <SectionTitle
          sectionName="01. À propos"
          contenu="Qui suis-je."
        ></SectionTitle>
        <p>
          Passionnée par le développement web, je suis en reconversion
          professionnelle dans le domaine du web. Mon objectif : créer des
          interfaces modernes, accessibles et performantes. <br />
          Curieuse et autodidacte, j'aime explorer les nouvelles technologies et
          appliquer les bonnes pratiques pour livrer des projets de qualité. Je
          cherche actuellement une opportunité pour consolider mes compétences
          dans un environnement professionnel stimulant.
        </p>
      </div>
      <div>
        <ul>Stack technique</ul>
        {stack.map((techno, index) => (
          <li key={index}>
            <button>{techno}</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default About;
