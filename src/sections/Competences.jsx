import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faScrewdriverWrench,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

function Competences() {
  const stack = [
    {
      logo: faCode,
      color: 'text-yellow-300',
      titre: 'Front-end',
      contenu: ['HTML/CSS', 'Javascript', 'Tailwind CSS', 'React'],
    },
    {
      logo: faDatabase,
      color: 'text-pink-500',
      titre: 'Back-end',
      contenu: ['Node.js', 'Express', 'NoSql'],
    },
    {
      logo: faScrewdriverWrench,
      color: 'text-purple-600',
      titre: 'Outils',
      contenu: ['Git', 'Linux system'],
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
      className="w-full py-20 md:py-32 px-10 flex flex-col gap-12 max-w-7xl mx-auto"
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
            color={stack.color}
            contenu={stack.contenu}
          ></SkillCard>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className=" gap-2 flex items-center">
          <FontAwesomeIcon icon={faLayerGroup} className="text-indigo-400" />
          <h3 className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Soft Skills
          </h3>
        </div>
        <ul className="flex-wrap text-xs xl:text-sm  flex gap-4 text-slate-400 justify-center sm:justify-start">
          {softSkills.map((skills) => (
            <li
              className="  bg-indigo-900/30 rounded-2xl px-3 py-2"
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
