import SectionTitle from '../components/SectionTitle';
import annephoto from '/photo-anne222.png';

function About() {
  return (
    <section id="about" className="w-full p-32 bg-[#020617] ">
      <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col gap-12 justify-between">
        <div>
          <SectionTitle
            sectionName="01. À propos"
            contenu="Qui suis-je"
          ></SectionTitle>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <p className="text-slate-400 flex-1">
            Passionnée par le développement web, je suis en reconversion
            professionnelle dans le domaine du web. Mon objectif : créer des
            interfaces modernes, accessibles et performantes. <br />
            Curieuse et autodidacte, j'aime explorer les nouvelles technologies
            et appliquer les bonnes pratiques pour livrer des projets de
            qualité. Je cherche actuellement une opportunité pour consolider mes
            compétences dans un environnement professionnel stimulant.
          </p>

          <div>
            <img
              className="w-50 h-50 object-cover rounded-full hover:scale-120 transition-all duration-800"
              src={annephoto}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
