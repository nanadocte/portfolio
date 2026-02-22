function SectionTitle({ sectionName, contenu }) {
  return (
    <div className="font--jet">
      <p className="text-indigo-400">{sectionName}</p>
      <h2 className="text-slate-200 text-4xl">
        {contenu}
        <em className="text-indigo-400">.</em>
      </h2>
    </div>
  );
}

export default SectionTitle;
