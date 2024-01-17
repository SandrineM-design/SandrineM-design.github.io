function Skills() {
  const languages = [
    {
      name1: "HTML 5",
      name2: "CSS3",
      name3: "Javascript Vanilla",
    },
  ];

  const framworksLibraries = [
    {
      name1: "React JS",
      name2: "Express JS",
      name3: "Node JS",
      name4: "Vite",
      name5: "VueJS",
      name6: "Sass",
      name7: "TailwindCSS",
      name8: "NPM",
      name9: "JEST",
      name10: "Postman",
    },
  ];

  const databases = [
    {
      name1: "MySQL",
      name2: "SQLite",
      name3: "MongoDB",
    },
  ];

  const design = [
    {
      name1: "Figma",
      name2: "Canva",
    },
  ];

  const tools = [
    {
      name1: "Git",
      name2: "GitHub",
      name3: "VSCode",
      name4: "Microsoft Office",
      name5: "EsLint",
      name6: "Prettier",
      name7: "Trello",
    },
  ];

  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Hard skills</h2>
      <h3>Langages de programmation :</h3>
      <h3>Frameworks & bibliothèques :</h3>
      <h3>Bases de données :</h3>
      <h3>Design :</h3>
      <h3>Outils :</h3>
    </div>
  );
}

export default Skills;
