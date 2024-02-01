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
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Mes projets</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.name} {project.image} {project.description} {project.link}{" "}
            {project.repository}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
