import photo from "../assets/Photo-sandrine.jpg";

function Presentation() {
  return (
    <div className="flex flex-col flex-1 place-items-center">
      <h1 className="mt-20 font-bold text-5xl text-emerald-600 ">
        Sandrine MANSON
      </h1>
      <img className="mt-10 w-36 h-auto rounded-full" src={photo}></img>
      <h2 className="mt-10 font-bold text-2xl text-emerald-600">
        Développeuse web et web mobile junior
      </h2>
      <p className="mt-5 mb-5 vhitespace-normal text-center ">
        Après 20 ans passés à travailler auprès des enfants et des familles,{" "}
        <br />
        j'ai décidé de changer radicalement de voie et de me reconvertir <br />
        dans le développement web.
      </p>
      <p className="mt-5 mb-5 vhitespace-normal text-center ">
        En tant que développeuse web junior, j'ai à coeur de continuer à
        progresser <br />
        et d'approndir mes connaissances afin de rapidement monter en
        compétences.
      </p>
      <p className="mt-5 mb-5 vhitespace-normal text-center ">
        Autodidacte au début de mon apprentissage du développement web, j'ai
        effectué une formation <br />
        avec la Wild Code School afin d'obtenir mon diplome de Développeuse Web
        et Web Mobile.
      </p>
      <p className="mt-5 mb-20 vhitespace-normal text-center ">
        Vous trouverez ici quelques uns de mes projets, miroirs de mes
        compétences et savoir-faire.
      </p>
    </div>
  );
}

export default Presentation;
