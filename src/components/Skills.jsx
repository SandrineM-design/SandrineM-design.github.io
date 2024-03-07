function Skills() {
  const frontend = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React JS",
    "Sass",
    "Tailwind CSS",
  ];

  const backend = ["Node JS", "MySQL", "ExpresJS", "MongoDB"];

  const tools = ["GitHub", "Git", "Figma"];

  return (
    <div className="flex flex-col flex-1 place-items-center">
      <h2 className="mt-20 font-bold text-2xl text-emerald-600">
        Compétences techniques
      </h2>
      <h3 className="mt-2.5 font-bold text-1x1 text-emerald-400">Frontend :</h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {frontend.map((frontend, index) => (
          <li key={index}>{frontend}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1 text-emerald-400">Backend :</h3>
      <ul className="flex flex-col-1 gap-10 mt-2 mb-2 list-disc">
        {backend.map((backend, index) => (
          <li key={index}>{backend}</li>
        ))}
      </ul>
      <h3 className="mt-2.5 font-bold text-1x1 text-emerald-400">Outils :</h3>
      <ul className="flex flex-col-3 gap-10 mt-2 mb-2 list-disc">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
