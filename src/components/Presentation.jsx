import photo from "../assets/Sandrine.jpg";
import Curiculum from "../pages/Curiculum";
import Projects from "./Projects";

function Presentation() {
  return (
    <div className="flex flex-col flex-1 place-items-center bg-yellow-50">
      <h1 className="mt-10 font-bold text-5xl bg-yellow-50">
        {" "}
        Sandrine MANSON
      </h1>
      <img
        className="mt-10 w-36 h-auto rounded-full bg-yellow-50"
        src={photo}
      ></img>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">
        Développeuse web et web mobile
      </h2>
      <p className="mt-5 vhitespace-norma bg-yellow-50l">
        Bienvenue sur mon portfolio, fenêtre ouverte sur mes projets dev. <br />
        Vous y trouverez tous mes projets, personnels ou de formation. <br />
      </p>
      <Curiculum />
      <Projects />
    </div>
  );
}

export default Presentation;
