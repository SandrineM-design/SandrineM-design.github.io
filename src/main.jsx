import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Presentation from "./components/Presentation.jsx";
import Curiculum from "./pages/Curiculum.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Presentation />,
      },
      {
        path: "/curiculum",
        element: <Curiculum />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
