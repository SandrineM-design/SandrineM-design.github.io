function Education() {
  const formations = [
    {
      name: "Bootcamp Développeur Web et Web Mobile",
      school: "Wild Code School",
      date: "du 11 septembre 2023 au 9 février 2024",
    },
    {
      name: "HTML5/CSS3, Git-GitHub, Algorithmes, API Rest, Javascript",
      school: "OpenClassrooms, cours en ligne",
      date: "depuis mars 2023",
    },
    {
      name: "Baccalauréat Scientifique mention AB",
      school: "Lycée Guez de Balzac, Anougoulème (16)",
      date: "juin 2005",
    },
  ];

  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Mes formations</h2>
      <ul>
        {formations.map((formation, index) => (
          <li key={index}>
            {formation.name} {formation.school} {formation.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
