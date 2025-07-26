import Home from "./pages/Home";
import { Routes, Route } from "react-router"
import About from "../src/pages/About"
import Books from "../src/pages/Books"
import Login from "../src/pages/Login"
import Registrer from "../src/pages/Registration"

export default function App() {
  return (
    <div>
      <Home />
      <br />
      <Routes>
        <Route path="/2025/july2/src/pages/About.jsx/*" element={<About />} />
        <Route path="/2025/july2/src/pages/Books.jsx/*" element={<Books />} />
        <Route path="/2025/july2/src/pages/Login.jsx/*" element={<Login />} />
        <Route path="/2025/july2/src/pages/Registrer.jsx/*" element={<Registrer />} />
      </Routes>
    </div>
  )
}