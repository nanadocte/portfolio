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
    <div className="px-76 w-full flex flex-col gap-12 justify-between">
      <div className="">
        <SectionTitle
          sectionName="01. À propos"
          contenu="Qui suis-je."
        ></SectionTitle>
      </div>
      <div className="flex flex-row justify-between gap-12">
        <p className="flex-1">
          Passionnée par le développement web, je suis en reconversion
          professionnelle dans le domaine du web. Mon objectif : créer des
          interfaces modernes, accessibles et performantes. <br />
          Curieuse et autodidacte, j'aime explorer les nouvelles technologies et
          appliquer les bonnes pratiques pour livrer des projets de qualité. Je
          cherche actuellement une opportunité pour consolider mes compétences
          dans un environnement professionnel stimulant.
        </p>
        <div className="w-50 flex flex-col">
          <p className="mb-2 font-bold">Stack technique</p>
          <ul className="flex flex-row gap-5 flex-wrap">
            {stack.map((techno, index) => (
              <li key={index}>
                <button>{techno}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
