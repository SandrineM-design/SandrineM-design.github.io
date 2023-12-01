import React from "react";
import photo from "../assets/Sandrine.jpg";

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
        Déterminée et curieuse, je suis à la recherche d'un contrat de <br />
        professionnalisation en alternance pour enrichir mes <br />
        connaissances et perfectionner mes compétences.
      </p>
    </div>
  );
}

export default Presentation;
