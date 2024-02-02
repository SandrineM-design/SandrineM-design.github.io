function Education() {
  const formations = [
    {
      name: "Bootcamp Développeur Web et Web Mobile (sept 2023- fév 2024),",
      school: "Wild Code School, campus Remote,",
    },
    {
      name: "Baccalauréat Scientifique mention AB (2005),",
      school: "Lycée Guez de Balzac, Angoulème (16),",
    },
  ];

  const experiences = [
    {
      name: "Sapeure pompier volontaire (Depuis mars 2023)",
      lieu: "Centre de Secours de Carcans (33)",
      skill1: "assurer la sécurité des personnes et des biens",
      skill2:
        "assurer un travail d'équipe basé sur l'écoute, la communication (verbale et non verbale) et l'entraide",
      skill3: "développer ses capacités physiques et intellectuelles",
      skill4:
        "savoir se remettre en question et prendre du recul face aux diverses situations",
    },

    {
      name: "Accompagnante parentale et périnatale (2021-2023)",
      lieu: "Autoentrepreneure",
      skill1: "accompagner les jeunes et futurs parents dans leur quotidien",
      skill2:
        "être à l'écoute des personnes, sans jugement (pratique de l'écoute active)",
      skill3:
        "gestion d'une entreprise et collaboration avec des professionels de la santé et de la périnatalité",
      skill4:
        "créer des outils de communication (site web, flyers, cartes de visite)",
    },
    {
      name: "Animatrice ALSH / ATSEM / Auxiliare de crèche / AESH (2006-2021)",
      lieu: "Divers employeurs, Fonction Publique et secteur privé",
      skill1:
        "assurer la sécurité affective et physique des enfants et des personnes",
      skill2:
        "organiser et créer des activités et matériels pédagogiques et ludiques adaptés",
      skill3: "travailler en équipe, gestion et résolution de conflits",
      skill4: "travail auprès d'un public en situation de handicap",
      date: "2006-2021",
    },
  ];

  return (
    <div className="flex flex-col flex-1 place-items-center">
      <h2 className="mt-10 mb-5 font-bold text-2xl text-emerald-600">
        Mes formations
      </h2>
      <ul className="list-disc">
        {formations.map((formation, index) => (
          <li key={index}>
            <span className="flex items-center mb-1 font-bold text-1x1">
              {formation.name}
            </span>
            <span className="flex items-center mb-1 italic">
              {formation.school}
            </span>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 mb-5 font-bold text-2xl text-emerald-600">
        Mes expériences
      </h2>
      <ul className="list-disc">
        {experiences.map((experiences, index) => (
          <li key={index}>
            <span className="flex items-center mb-1 mt-2 text-1x1 font-bold">
              {experiences.name}
            </span>
            <span className="flex items-center italic mb-2">
              {experiences.lieu}
            </span>
            <span className="flex items-center mb-1">{experiences.skill1}</span>
            <span className="flex items-center mb-1">{experiences.skill2}</span>
            <span className="flex items-center mb-1">{experiences.skill3}</span>
            <span className="flex items-center mb-1">{experiences.skill4}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
