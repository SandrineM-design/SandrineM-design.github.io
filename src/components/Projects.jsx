import ToDoList from "../assets/capture_ToDO_List.jpg";
import Juracine from "../assets/Juracine.jpg";
import Originsdigital from "../assets/origins_digital.jpg";

function Projects() {
  const projects = [
    {
      name: "ToDo List",
      image: ToDoList,
      description: "Réalisé avec Javascript et CSS",
      link: "https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-4Fantascripts/",
    },
    {
      name: "Juraciné",
      image: Juracine,
      description: "Réalisé avec React JS et Sass",
      link: "https://jurastream.vercel.app/",
    },
    {
      name: "Origin's Digital",
      image: Originsdigital,
      description: "Réalisé avec NodeJS, MySQL, ReactJS, Sass",
      link: "https://origins.remote-6.wilders.dev/",
    },
  ];

  return (
    <div className="flex flex-col flex-1 place-items-center">
      <h2 className="mt-3 mb-20 font-bold text-2xl text-emerald-600">
        Mes projets
      </h2>
      <div>
        <ul className="flex flex-wrap justify-stretch">
          {projects.map((project, index) => (
            <li key={index}>
              <img
                className="rounded-lg relative h-auto max-w-xs"
                src={project.image}
              />
              <h3 className="mt-2.5 font-bold text-1x1 text-emerald-400">
                {project.name}
              </h3>
              <span className="flex mb-1">{project.description}</span>
              <a
                href="#"
                className="flex items-center mb-1 text-blue-500 underline"
              >
                {project.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
