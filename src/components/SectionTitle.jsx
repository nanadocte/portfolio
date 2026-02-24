function SectionTitle({ sectionName, contenu }) {
  return (
    <div>
      <p className="text-indigo-400">{sectionName}</p>
      <h2 className="text-slate-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {contenu}
        <em className="text-indigo-400">.</em>
      </h2>
    </div>
  );
}

export default SectionTitle;
