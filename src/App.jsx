import "./App.css";
import Carreira from "./components/Carreira";
import NavBar from "./components/NavBar";
import Projetos from "./components/Projetos";
import Hero from "./components/Hero";
import Carreiras from "./components/Carreiras";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <NavBar />
        <Hero />
        <Carreira />
        <Projetos />
        <Carreiras />
      </div>
    </>
  );
}

export default App;
