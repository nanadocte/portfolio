import { useState } from 'react';

function Hero() {
  const [showButton, setShowButton] = useState(false);
  return (
    <section
      className="px-48 h-screen pt-32 flex justify-center"
      onMouseEnter={() => setShowButton(true)}
    >
      <div className="group/bienvenue flex flex-col justify-center items-center gap-12">
        <p
          className="font--montserrat z-2 fixed opacity-0 group-hover/bienvenue:opacity-30 transition-opacity duration-500 text-9xl font-bold
     //absolute right-220 top-80
    absolute top-[42%] right-[60%]
    rotate-[270deg]
    bg-gradient-to-r from-indigo-800 to-purple-800
    bg-clip-text text-transparent
    blur-xs
    pointer-events-none"
        >
          Bienvenue
        </p>
        <p className="font--jet text-indigo-400 text-3xl">
          Développeuse web junior
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <p className="font-bold tracking-tighter leading-none text-slate-200 text-8xl flex-shrink-0 flex items-center gap-0">
            Moi c'est
            <span
              className="font-bold ml-15 relative text-8xl tracking-tighter
      bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent"
            >
              Anne
              <span
                className="font-bold absolute left-0 top-0 w-full font-bold text-8xl tracking-tighter
        bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent blur-xl opacity-50 select-none pointer-events-none"
              >
                Anne
              </span>
            </span>
          </p>

          <div className="relative w-auto">
            <span
              className="font-bold tracking-tighter absolute left-0 top-0 w-full text-8xl 
      bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600
      bg-clip-text text-transparent blur-xl opacity-50 select-none pointer-events-none"
            >
              Goulamougaidine
            </span>

            <h1
              className="font-bold tracking-tighter relative text-8xl 
      bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600
      bg-clip-text text-transparent"
            >
              Goulamougaidine
            </h1>
          </div>
        </div>

        <p className="font--jet text-slate-400 text-xl text-center">
          Je conçois et développe des expériences web modernes, performantes et
          centrées sur l'utilisateur
        </p>
        <button
          className={`backdrop-blur-md  bg-gradient-to-r from-indigo-500/60 to-purple-800/60 text-slate-200 py-2 px-6 rounded-xl
           transition-all duration-300 hover:scale-105 
          ${showButton ? 'opacity-100' : 'opacity-0'}`}
        >
          <a href="#">Voir mes projets</a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
