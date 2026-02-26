import SectionTitle from '../../../components/SectionTitle';
import annephoto from '../../../assets/img/photo-anne222.png';

function About() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 px-5 bg-dark overflow-hidden "
    >
      <div className="max-w-4xl mx-auto px-8 xs:py-20 flex flex-col gap-12 justify-between">
        <div>
          <SectionTitle
            sectionName="01. À propos"
            contenu="Qui suis-je"
          ></SectionTitle>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <p className="flex-1">
            Attirée par la logique qui structure les systèmes, j’ai choisi de me
            reconvertir dans le développement web, un domaine qui correspond
            profondément à ma manière de réfléchir et de créer. J’aime
            comprendre comment un besoin concret peut prendre forme à travers
            une application, comment des contraintes humaines deviennent des
            solutions utiles et cohérentes.
            <br />
            <br />
            Curieuse et autodidacte, j’explore continuellement de nouvelles
            technologies et veille à appliquer des pratiques solides pour
            construire des projets clairs et durables. Fascinée par l'étendue
            des possibilités qu’offre le web, je souhaite aujourd’hui rejoindre
            un environnement professionnel stimulant pour continuer à progresser
            et contribuer activement à des projets concrets.
          </p>

          <div>
            <div className="relative flex items-center ">
              <div
                className=" absolute bg-linear-to-r from-indigo-400 to-purple-400 
          blur-2xl opacity-5 rounded-full
          w-30 h-20 sm:w-40 sm:h-28 md:w-50 md:h-50 pointer-events-none"
              ></div>
              <img
                alt="Photo de présentation"
                loading="lazy"
                className="z-1 xs:w-50 xs:h-50 w-30 h-30 object-cover rounded-full hover:scale-120 transition-all duration-800"
                src={annephoto}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
