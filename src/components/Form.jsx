function Form() {
  return (
    <form className="max-w-2xl w-full bg-slate-900/30 p-5 rounded-xl flex flex-col gap-8 justify-center items-start">
      <div className="w-full flex flex-col gap-2 justify-center">
        <label htmlFor="name">Nom</label>
        <input
          className="bg-slate-900/60 rounded-md p-2 border border-slate-400/10"
          id="name"
          type="text"
          placeholder="Votre nom"
        ></input>
      </div>
      <div className="w-full flex flex-col gap-2 justify-center">
        <label htmlFor="email">Email</label>
        <input
          className="bg-slate-900/60 rounded-md p-2 border border-slate-400/10"
          id="email"
          type="text"
          placeholder="votre@email.com"
        ></input>
      </div>
      <div className="w-full flex flex-col gap-2 justify-center">
        <label htmlFor="message">Message</label>
        <textarea
          className="bg-slate-900/60 w-full rounded-md p-2 border border-slate-400/10"
          id="message"
          placeholder="Votre message"
        ></textarea>
      </div>
      <button
        className="w-full className={`backdrop-blur-md  bg-gradient-to-r from-indigo-500/60 to-purple-800/60 text-slate-200 py-2 px-6 rounded-xl
           transition-all duration-300 hover:scale-105 
          py-1 px-3 bg-slate-800 rounded-xl "
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}

export default Form;
