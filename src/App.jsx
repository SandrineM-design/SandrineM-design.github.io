import "./App.css";
import { Link } from "react-router-dom";
import Presentation from "./components/Presentation";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Presentation</Link>
        <Link to="/curiculum">Curiculum Vitae</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Presentation>Sandrine MANSON</Presentation>
        <Education>Formation</Education>
        <Experiences>Expériences professionnelles</Experiences>
        <Skills>Compétences professionnelles</Skills>
        <Projects>Mes projets professionnels</Projects>
        <Hobbies>Mes hobbies</Hobbies>
      </main>
    </>
  );
}

export default App;
