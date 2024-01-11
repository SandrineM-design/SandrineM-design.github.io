import React from "react";

function Education(props) {
  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">Mes formations</h2>
      <ul>
        <li>
          Bootcamp Développeur Web et Web Mobile <br />
          Wild Code School, Campus Remote <br />
          Du 11 septembre 2023 au 9 février 2024
        </li>
        <li>
          OpenClassrooms, Cours en ligne <br />
          HTML5/CSS3, Git/GitHub, Algorithmes, API Rest <br />A partir de mars
          2023
        </li>
        <li>
          Baccalauréat scientifique Mention AB <br />
          Lycée Guez de Balzac, Angoulème (16) <br />
          Juin 2005
        </li>
      </ul>
    </div>
  );
}

export default Education;
