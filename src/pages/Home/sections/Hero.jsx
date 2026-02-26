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
      className=" w-full md:h-screen pb-12 pt-50 md:pt-32 px-10 flex justify-center items-center"
      onMouseEnter={() => setShowButton(true)}
    >
      <div className="max-w-5xl m-auto group/bienvenue flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-12">
        <p
          className={`hidden opacity-0 lg:block font--montserrat z-20 fixed font-semibold
             text-9xl top-[42%] right-[60%] rotate-270
          bg-linear-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent blur-xl
          transition-all duration-2000 group-hover/bienvenue:blur-xs group-hover/bienvenue:opacity-30
          hover:blur-none ${pointer ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          Bienvenue
        </p>

        <p className="text-indigo-400 text-sm sm:text-xl md:text-2xl lg:text-3xl">
          Développeuse Web Full Stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="text-slate-200 flex flex-wrap items-center gap-2  font-light text-4xl xs:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter">
            Anne
          </p>

          <div className="relative text-4xl xs:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter lg:tracking-normal ">
            <span className="z-30 absolute inset-0 text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-pink-500 to-purple-600 blur-xl opacity-50 pointer-events-none select-none">
              Goulamougaidine
            </span>
            <h1 className="z-30 relative text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-pink-500 to-purple-600">
              Goulamougaidine
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-lg lg:text-xl text-center">
          Je conçois des applications qui traduisent des contraintes humaines en
          logique exploitable par le code.
        </p>
        <button
          className={`
           transition-all duration-300 hover:scale-105 opacity-100
          ${showButton ? 'lg:opacity-100' : 'lg:opacity-0'}`}
        >
          <a href="#project">Voir mes projets</a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
