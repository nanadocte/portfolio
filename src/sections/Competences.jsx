import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

function Competences() {
  const stack = [
    {
      logo: 'fa-solid fa-code text-yellow-300',
      titre: 'Front-end',
      contenu: ['React', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
    {
      logo: 'fa-solid fa-database text-pink-500',
      titre: 'Back-end',
      contenu: ['React', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
    {
      logo: 'fa-solid fa-screwdriver-wrench text-purple-600',
      titre: 'Outils',
      contenu: ['React', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
  ];

  const softSkills = [
    'Curiosité technique',
    "Esprit d'équipe",
    'Autonomie',
    'Résolution de problèmes',
    'Communication',
    'Adaptabilité',
  ];
  return (
    <section className="px-76 p-32 flex flex-col gap-16">
      <SectionTitle
        sectionName="02. Compétences"
        contenu="Ce que je maîtrise"
      />
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {stack.map((stack) => (
          <SkillCard
            key={stack.titre}
            logo={stack.logo}
            titre={stack.titre}
            contenu={stack.contenu}
          ></SkillCard>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <i className="fa-solid fa-layer-group text-indigo-400"></i>
          <h3>Soft Skills</h3>
        </div>
        <ul className="flex-wrap text-xs flex gap-4 text-slate-400 ">
          {softSkills.map((skills) => (
            <li
              className="w-fill bg-indigo-900/30 rounded-2xl px-3 py-2"
              key={skills}
            >
              {skills}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Competences;
