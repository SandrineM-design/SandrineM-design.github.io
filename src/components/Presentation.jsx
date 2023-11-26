import React from "react";
import photo from "../assets/Sandrine.jpg";

function Presentation() {
  return (
    <div className="grid h-1 place-items-center">
      <h1 className="mb-1 font-bold text-5xl"> Sandrine MANSON</h1>
      <img className="mb-1 w-36 h-auto rounded-full" src={photo}></img>
      <h2 className="mb-1 font-bold text-2xl">
        Développeuse web et web mobile
      </h2>
      <p className="mb-4 vhitespace-normal">
        J'ai découvert le développement de sites web lorsque j'ai réalisé celui
        de mon auto-entreprise. Au tout début, j'ai utilisé, comme beaucoup de
        néophites, un CMS. Mais le rendu ne me convenait pas, je le modifiais
        souvent car je ne trouvais pas la mise en page, les thèmes qui me
        convenaient. Et un jour, je me suis lancée dans des cours en ligne pour
        créer mon site de A à Z, comme je voulais qu'il soit. Cette expérience
        m'a beaucoup plue et j'ai décidé d'en faire mon métier.
      </p>
    </div>
  );
}

export default Presentation;
