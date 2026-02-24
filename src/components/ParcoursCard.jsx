function ParcoursCard({ date, nom, info, description, align }) {
  return (
    <div className="flex flex-col gap-2 max-w-xs  md:max-w-sm">
      <div
        className={`flex flex-col ${align === 'right' ? 'sm:items-start' : 'sm:items-end'} `}
      >
        <h4 className="text-indigo-400">{date}</h4>
        <h3 className="text-slate-200 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
          {nom}
        </h3>
        <p className="text-xs lg:text-sm">{info}</p>
      </div>

      <p className={`${align === 'right' ? 'sm:text-left' : 'sm:text-right'}`}>
        {description}
      </p>
    </div>
  );
}

export default ParcoursCard;
