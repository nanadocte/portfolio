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
    <section
      id="skills"
      className="w-full py-20 xs:py-32 px-10 flex flex-col gap-12 max-w-7xl mx-auto"
    >
      <SectionTitle
        sectionName="02. Compétences"
        contenu="Ce que je maîtrise"
      />
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
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
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Soft Skills
          </h3>
        </div>
        <ul className="flex-wrap text-xs xl:text-sm  flex gap-4 text-slate-400 justify-center sm:justify-start">
          {softSkills.map((skills) => (
            <li className="bg-indigo-900/30 rounded-2xl px-3 py-2" key={skills}>
              {skills}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Competences;
