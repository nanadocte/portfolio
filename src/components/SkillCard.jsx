function SkillCard({ logo, titre, contenu }) {
  return (
    <article
      className="bg-slate-800/20 w-full flex border border-white/5  
      rounded-xl 
      p-8 
      flex flex-col gap-4 
      max-w-xs text-start
      shadow-[0_0_10px_rgba(139,92,246,0.1)] 
      hover:shadow-[0_0_10px_rgba(139,92,246,0.4)] 
      transition-shadow duration-300"
    >
      <i className={`opacity-70 ${logo}`}></i>
      <h3>{titre}</h3>
      <ul className="text-slate-400 text-xs flex flex-col gap-2 items-start">
        {contenu.map((contain, index) => (
          <li key={index}>{contain}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
