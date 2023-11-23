import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Presentation from "./components/Presentation.jsx";
import Curiculum from "./pages/Curiculum.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">Présentation</Link>
          <Link to="/curiculum">Curiculum Vitae</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Presentation />
        </main>
      </>
    ),
  },
  {
    path: "/curiculum",
    element: (
      <>
        <nav>
          <Link to="/">Présentation</Link>
          <Link to="/curiculum">Curiculum Vitae</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Curiculum />
        </main>
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <nav>
          <Link to="/">Présentation</Link>
          <Link to="/curiculum">Curiculum Vitae</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Projects />
        </main>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <nav>
          <Link to="/">Présentation</Link>
          <Link to="/curiculum">Curiculum Vitae</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Contact />
        </main>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
