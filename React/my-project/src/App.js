import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./components/layouts/MainMenu"

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
