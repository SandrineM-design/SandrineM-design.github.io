function Education() {
  const formations = [
    {
      name: "Bootcamp Développeur Web et Web Mobile,",
      school: "Wild Code School, campus Remote,",
      date: "du 11 septembre 2023 au 9 février 2024",
    },
    {
      name: "HTML5/CSS3, Git-GitHub, Algorithmes, API Rest, Javascript,",
      school: "OpenClassrooms, cours en ligne,",
      date: "depuis mars 2023",
    },
    {
      name: "Baccalauréat Scientifique mention AB,",
      school: "Lycée Guez de Balzac, Angoulème (16),",
      date: "juin 2005",
    },
  ];

  return (
    <div className="flex flex-col flex-1 place-items-center bg-yellow-50">
      <h2 className="mt-10 mb-5 font-bold text-2xl bg-yellow-50">
        Mes formations
      </h2>
      <ul className="list-disc">
        {formations.map((formation, index) => (
          <li key={index}>
            <span className="flex items-center mb-1">{formation.name}</span>
            <span className="flex items-center mb-1">{formation.school}</span>
            <span className="flex items-center mb-1">{formation.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
