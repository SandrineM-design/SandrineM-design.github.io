import photo from "../assets/capture_ToDO_List.jpg";
import photo2 from "../assets/Juracine.jpg";

function Curiculum() {
  return (
    <div className="flex flex-col flex-1 place-items-center bg-yellow-50">
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Curriculum</h2>
      <p className="mt-5 vhitespace-norma bg-yellow-50l">
        Durant ma formation bootcamp à la Wild Code School j`ai travaillé sur
        divers projets : <br />
        <ul className="list-disc">
          <li>
            développement d`une ToDo List en Javascript Vanilla et CSS (projet
            de groupe)
          </li>
          <li>
            développement de la partie front-end d`un clone d`Allo Ciné en React
            JS et Sass (projet de groupe)
          </li>
          <li>
            gestion de projets selon la méthode scrum : rédaction du product
            backlog
            <br />
            des User Stories, découpage du projet en sprints
          </li>
          <li>développement de mon portfolio en React JS et TailwindCSS</li>
        </ul>
      </p>
    </div>
  );
}

export default Curiculum;
