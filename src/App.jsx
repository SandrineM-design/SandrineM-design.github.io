import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 items-stretch">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
