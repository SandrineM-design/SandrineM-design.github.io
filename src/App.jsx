import './App.css'
import NavBar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Hardskills from "./components/Hardskils";
import Softskills from "./components/Softskills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

function App() {
   return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Presentation>Sandrine MANSON</Presentation>
        <Education>Formation</Education>
        <Experiences>Expériences professionnelles</Experiences>
        <Hardskills>Compétences professionnelles</Hardskills>
        <Softskills>Softskills</Softskills>
        <Projects>Mes projets professionnels</Projects>
        <Hobbies>Mes hobbies</Hobbies>
      </main>
    </>
  )
}

export default App
