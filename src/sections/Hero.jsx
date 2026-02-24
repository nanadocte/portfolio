import { useState, useEffect } from 'react';

function Hero() {
  const [pointer, setPointer] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');

      if (about && window.scrollY >= about.offsetTop) setPointer(false);
      else setPointer(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className=" w-full h-screen pt-32 px-32 flex justify-center"
      onMouseEnter={() => setShowButton(true)}
    >
      <div className="max-w-5xl m-auto group/bienvenue flex flex-col justify-center items-center gap-12">
        <p
          className={`hidden opacity-0 lg:block font--montserrat z-20 fixed
          font-semibold text-9xl
          top-[42%] right-[60%] rotate-[270deg]
          bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent
          blur-lg
          transition-opacity duration-2000 group-hover/bienvenue:opacity-30
          transition-filter duration-300 hover:blur-xs
          ${pointer ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          Bienvenue
        </p>

        <p className="text-indigo-400 text-xl sm:text-2xl lg:text-3xl">
          Développeuse web junior
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="flex items-center gap-2 font-semibold tracking-tighter text-5xl sm:text-7xl  lg:text-8xl">
            Moi c'est
            <span className="relative ml-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
              Anne
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 blur-xl opacity-50 pointer-events-none select-none">
                Anne
              </span>
            </span>
          </p>

          <div className="relative text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter">
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 blur-xl opacity-50 pointer-events-none select-none">
              Goulamougaidine
            </span>
            <h1 className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600">
              Goulamougaidine
            </h1>
          </div>
        </div>
        <p className="font--jet text-slate-400 text-base sm:text-lg lg:text-xl text-center">
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
