function Navbar() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a className="font-bold text-green-600 hover:text-green-800" href="/">
          Présentation
        </a>
      </li>
      <li className="mr-6">
        <a
          className="font-bold text-green-600 hover:text-green-800"
          href="/curiculum"
        >
          Curiculum Vitae
        </a>
      </li>
      <li className="mr-6">
        <a
          className="font-bold text-green-600 hover:text-green-800"
          href="/projects"
        >
          Projets
        </a>
      </li>
      <li className="mr-6">
        <a
          className="font-bold text-green-600 hover:text-green-800"
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
