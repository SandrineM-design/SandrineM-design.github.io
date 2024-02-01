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
    <div className="flex flex-col flex-1 place-items-center bg-yellow-50">
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Hard skills</h2>
      <h3 className="mt-2.5 font-bold text-1x1 bg-yellow-50">
        Langages de programmation :
      </h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1 bg-yellow-50">
        Frameworks & bibliothèques :
      </h3>
      <ul className="flex flex-col-1 gap-10 mt-2 mb-2 list-disc">
        {framworksLibraries.map((framworksLib, index) => (
          <li key={index}>{framworksLib}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1 bg-yellow-50">
        Bases de données :
      </h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {databases.map((database, index) => (
          <li key={index}>{database}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1 bg-yellow-50">Design :</h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {design.map((design, index) => (
          <li key={index}>{design}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1  bg-yellow-50">Outils :</h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
