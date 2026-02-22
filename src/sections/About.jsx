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
    <section className="px-76 p-32 bg-[#020617]  w-full flex flex-col gap-12 justify-between">
      <div className="">
        <SectionTitle
          sectionName="01. À propos"
          contenu="Qui suis-je"
        ></SectionTitle>
      </div>
      <div className="flex flex-row justify-between gap-12">
        <p className="text-slate-400 flex-1">
          Passionnée par le développement web, je suis en reconversion
          professionnelle dans le domaine du web. Mon objectif : créer des
          interfaces modernes, accessibles et performantes. <br />
          Curieuse et autodidacte, j'aime explorer les nouvelles technologies et
          appliquer les bonnes pratiques pour livrer des projets de qualité. Je
          cherche actuellement une opportunité pour consolider mes compétences
          dans un environnement professionnel stimulant.
        </p>
        <div className="w-50 flex flex-col">
          <p className="pb-5 text-slate-200 mb-2 font-bold">Stack technique</p>
          <ul className="flex flex-row gap-5 flex-wrap">
            {stack.map((techno, index) => (
              <li
                className="bg-slate-800 py-1 px-2 rounded-2xl text-xs text-slate-400"
                key={index}
              >
                <button>{techno}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
