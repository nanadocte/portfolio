import SectionTitle from '../components/SectionTitle';
import ParcoursCard from '../components/ParcoursCard';

function Parcours() {
  const parcours = [
    {
      date: '2025',
      nom: 'Formation Développeur Web',
      info: 'OpenClassroom - Diplôme niveau 5',
      description:
        'Apprentissage front et back-end. Projets en React et Node.js.',
    },
    {
      date: '2024',
      nom: 'Début de la reconversion',
      info: 'Autodidacte',
      description:
        'Découverte de la programmation en autodidacte. HTML, CSS, JS, Odin Project.',
    },
    {
      date: '2023',
      nom: 'Diplôme de psychomotricité',
      info: 'Soft skills acquis',
      description:
        'Compétences relationnelles et organisationnelles pour le travail en équipe.',
    },
  ];

  return (
    <section className="max-w-5xl w-full m-auto py-20 px-5 flex flex-col gap-12">
      <SectionTitle sectionName="04. Parcours" contenu="Mon parcours" />

      <div className="md:pt-20 flex flex-col gap-8 border-l sm:border-0 pl-10 border-indigo-800/40 ">
        {parcours.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={item.nom} className="flex w-full">
              {isLeft && (
                <div className="w-full sm:w-1/2 flex justify-start">
                  <ParcoursCard {...item} align="left" />
                </div>
              )}
              {!isLeft && <div className="hidden sm:block sm:w-1/2" />}{' '}
              {!isLeft && (
                <div className="w-full sm:w-1/2 flex justify-start md:justify-end">
                  <ParcoursCard {...item} align="right" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Parcours;
