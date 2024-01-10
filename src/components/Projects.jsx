import photo from "../assets/capture_ToDO_List.jpg";
import photo2 from "../assets/Juracine.jpg";
import photo3 from "../assets/origins_digital.jpg";

function Projects() {
  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Mes projets</h2>
      <h3 className="mt-10 w-36 bg-yellow-50">
        <img className="mt-10 w-36  bg-yellow-50" src={photo}></img>
        ToDo list en Javascript et CSS
      </h3>
      <ul>
        <li>
          <a href="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P1-4Fantascripts">
            {" "}
            Lien du repo GitHub
          </a>
        </li>
        <li>
          <a href="https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-4Fantascripts/">
            Lien vers le site web
          </a>
        </li>
      </ul>

      <h3 className="mt-10 w-36 bg-yellow-50">
        <img className="mt-10 w-36  bg-yellow-50" src={photo2}></img> Juraciné :
        clone du site Allo Ciné en React JS et Sass
      </h3>
      <ul>
        <li>
          <a href="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P2-Jurastream">
            {" "}
            Lien du repo GitHub
          </a>
        </li>
        <li>
          <a href="https://jurastream.vercel.app/">Lien vers le site web</a>
        </li>
      </ul>
      <h3 className="mt-10 w-36 bg-yellow-50">
        <img className="mt-10 w-36  bg-yellow-50" src={photo3}></img> Origin's
        Digital : Site style CMS en ReactJS, Sass avec base en données en
        méthode MERISE
      </h3>
      <ul>
        <li>
          <a href="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Originsdigital">
            {" "}
            Lien du repo GitHub
          </a>
        </li>
        <li>
          <a href="https://origins.remote-6.wilders.dev/">
            Lien vers le site web
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
