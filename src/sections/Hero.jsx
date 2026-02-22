import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section className="relative group px-76  h-screen w-full pt-30 ">
      <div className="group/bienvenue flex flex-col justify-center items-center gap-12">
        <p
          className="text-9xl
  relative
  opacity-0
  group-hover/bienvenue:opacity-100
  right-128 top-48
  rotate-[270deg]
  transition-opacity duration-500  transition-opacity duration-500
    text-yellow-300/70"
        >
          Bienvenue
        </p>
        <p className="text-indigo-900 text-3xl">Développeuse web junior</p>
        <div>
          <h1 className="text-slate-200 text-8xl text-center">
            Moi c'est{' '}
            <strong
              className="bg-gradient-to-r 
              from-yellow-300 
              via-pink-500 
              to-purple-600
              bg-clip-text 
              text-transparent"
            >
              Anne Goulamougaidine
            </strong>
          </h1>
        </div>
        <p className="text-slate-400 text-xl text-center">
          Je conçois et développe des expériences web modernes, performantes et
          centrées sur l'utilisateur
        </p>
        <button
          className="bg-indigo-900
    text-slate-200
    py-2 px-6
    rounded-lg
    opacity-0
    group-hover:opacity-100
    transition-all duration-300
    hover:scale-105"
        >
          <a href="#">Voir mes projets</a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
