import React from "react"
import { Routes, Route } from "react-router"
import About from "./About"
import Books from "./Books"
import Login from "./Login"
import Registrer from "./Registration"
import Nav from "../components/Nav"

export default React.memo(function Home() {
    return (
        <div>
            <header>
                <h1>Book libary app</h1>
                <Nav />
            </header>
            <br />
            <main>
                <Routes>
                    <Route path="/2025/july2/src/pages/About.jsx/*" element={<About />} />
                    <Route path="/2025/july2/src/pages/Books.jsx/*" element={<Books />} />
                    <Route path="/2025/july2/src/pages/Login.jsx/*" element={<Login />} />
                    <Route path="/2025/july2/src/pages/Registrer.jsx/*" element={<Registrer />} />
                </Routes>
            </main>
            <br />
            <footer>
                <p>©2025 Berdia Bekauri</p>
            </footer>
        </div>
    )
})