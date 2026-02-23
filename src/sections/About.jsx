import SectionTitle from '../components/SectionTitle';
import annephoto from '/photo-anne222.png';

function About() {
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

        <div>
          <img
            className="w-50 h-50 object-cover rounded-full hover:scale-120 transition-all duration-800"
            src={annephoto}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
