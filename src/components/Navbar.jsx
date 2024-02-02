import logo from "../assets/logo.png";

function Navbar() {
  return (
    <ul className="flex">
      <img className="w-20 h-auto rounded-full " src={logo}></img>
      <li className="mr-6 mt-5">
        <a
          className="font-bold text-emerald-600 hover:text-emerald-800"
          href="/"
        >
          Accueil
        </a>
      </li>
      <li className="mr-6 mt-5">
        <a
          className="font-bold text-emerald-600 hover:text-emerald-800"
          href="/skills"
        >
          Compétences
        </a>
      </li>
      <li className="mr-6 mt-5">
        <a
          className="font-bold text-emerald-600 hover:text-emerald-800"
          href="/education"
        >
          Parcours
        </a>
      </li>
      <li className="mr-6 mt-5">
        <a
          className="font-bold text-emerald-600 hover:text-emerald-800"
          href="/projects"
        >
          Projets
        </a>
      </li>
      <li className="mr-6 mt-5">
        <a
          className="font-bold text-emerald-600 hover:text-emerald-800"
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
