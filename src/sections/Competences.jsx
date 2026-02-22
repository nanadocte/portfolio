import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import viteLogo from '/vite.svg';

function Competences() {
  const stack = [
    {
      logo: viteLogo,
      titre: 'Front-end',
      contenu: ['React', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
    {
      logo: viteLogo,
      titre: 'Back-end',
      contenu: ['React', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
    {
      logo: viteLogo,
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
    <div className="px-76">
      <SectionTitle
        sectionName="02. Compétences"
        contenu="Ce que je maîtrise."
      />
      {stack.map((stack) => (
        <SkillCard
          key={stack.titre}
          logo={stack.logo}
          titre={stack.titre}
          contenu={stack.contenu}
        ></SkillCard>
      ))}
      <div>
        <img src="#"></img>
        <h3>Soft Skills</h3>
      </div>
      <ul>
        {softSkills.map((skills) => (
          <li key={skills}>{skills}</li>
        ))}
      </ul>
    </div>
  );
}

export default Competences;
