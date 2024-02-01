function Skills() {
  const languages = ["HTML5", "CSS3", "Javascript Vanilla"];

  const framworksLibraries = [
    "React JS",
    "Express JS",
    "Node JS",
    "Vite",
    "VueJS",
    "Sass",
    "TailwindCSS",
    "NPM",
    "JEST",
    "Postman",
  ];

  const databases = ["MySQL", "SQLite", "MongoDB"];

  const design = ["Figma", "Canva"];

  const tools = [
    "Git",
    "GitHub",
    "VSCode",
    "Microsoft Office",
    "EsLint",
    "Prettier",
    "Trello",
  ];

  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Hard skills</h2>
      <h3>Langages de programmation :</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h3>Frameworks & bibliothèques :</h3>
      <ul>
        {framworksLibraries.map((framworksLib, index) => (
          <li key={index}>{framworksLib}</li>
        ))}
      </ul>
      <h3>Bases de données :</h3>
      <ul>
        {databases.map((database, index) => (
          <li key={index}>{database}</li>
        ))}
      </ul>
      <h3>Design :</h3>
      <ul>
        {design.map((design, index) => (
          <li key={index}>{design}</li>
        ))}
      </ul>
      <h3>Outils :</h3>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
