import ToDoList from "../assets/capture_ToDO_List.jpg";
import Juracine from "../assets/Juracine.jpg";
import Originsdigital from "../assets/origins_digital.jpg";

function Projects() {
  const projects = [
    {
      name: "ToDo List",
      image: ToDoList,
      description: "Technos utilisées : Javascript, CSS",
      link: "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P1-4Fantascripts",
      repository:
        "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P1-4Fantascripts",
    },
    {
      name: "Juraciné",
      image: Juracine,
      description: "Technos utilisées : React JS et Sass",
      link: "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P2-Jurastream",
      repository:
        "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P2-Jurastream",
    },
    {
      name: "Origin's Digital",
      image: Originsdigital,
      description: "Technos utilisées: NodeJS, MySQL, ReactJS, Sass",
      link: "https://origins.remote-6.wilders.dev/",
      repository:
        "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Originsdigital",
    },
  ];

  return (
    <div className="flex flex-col flex-1 place-items-center bg-yellow-50">
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Mes projets</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3 className="mt-2.5 font-bold text-1x1  bg-yellow-50">
              {project.name}
            </h3>
            <img
              className="rounded-lg relative h-auto max-w-xs items-center"
              src={project.image}
            />
            <span className="flex items-center mb-1">
              {project.description}
            </span>
            <a href="#" className="flex items-center mb-1">
              {project.link}
            </a>
            <a href="#">{project.repository}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
