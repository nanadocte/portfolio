function ProjetCard({ img, titre, description, stack, github }) {
  return (
    <article className="bg-slate-800/20 overflow-hidden w-full min-h-70 min-w-80  border border-white/10 rounded-2xl max-w-md flex flex-col gap-2">
      <img
        className="opacity-70 rounded-t-2xl h-35 object-cover hover:scale-110 transition-all duration-800 "
        src={img}
      ></img>
      <div className="p-3 flex flex-col flex-1 h-full gap-2 ">
        <h4 className="text-slate-200 text-lg font-semibold">{titre}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
          {' '}
          {stack.map((stack) => (
            <li className="bg-indigo-900/30 rounded-2xl px-3 py-2" key={stack}>
              {stack}
            </li>
          ))}
        </ul>
        <a className="" href={github}>
          <i className="fa-brands fa-github mt-3 text-indigo-400 transition-transform duration-300 hover:scale-110"></i>
        </a>
      </div>
    </article>
  );
}

export default ProjetCard;
