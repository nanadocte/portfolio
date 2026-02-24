import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({ logo, titre, contenu, color }) {
  return (
    <article
      className="bg-slate-800/20 border border-white/5 rounded-xl p-8 flex flex-col gap-4 
      text-start shadow-[0_0_10px_rgba(139,92,246,0.1)] max-w-xs"
    >
      <FontAwesomeIcon icon={logo} className={`opacity-70 ${color} text-lg`} />
      <h3 className="text-slate-200 xl:text-xl">{titre}</h3>
      <ul className="text-slate-400 text-xs xl:text-sm flex flex-col gap-2 items-start">
        {contenu.map((contain, index) => (
          <li key={index}>{contain}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
