import Nav from '../Home/sections/Nav';
import Footer from '../Home/sections/Footer';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Nav />

      <div className="flex-1 flex flex-col justify-center items-center gap-10">
        <h1 className="font-mono text-center text-indigo-400 text-5xl sm:text-8xl font-semibold tracking-wide">
          Error 404
        </h1>
        <p className="font-mono text-center text-slate-400 text-xs sm:text-lg">
          Oups... Souhaitez vous revenir à la page principale ?
        </p>
        <Link className="font-mono text-slate-400" to={'/'}>
          <button>CLiquez ici</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Error;
