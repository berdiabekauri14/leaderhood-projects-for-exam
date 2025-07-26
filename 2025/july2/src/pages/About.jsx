import { Routes, Route } from "react-router"

export default function About() {
    return (
        <div>
            <Routes>
                <Route path="/2025/july2/src/pages/About.jsx/*" element={<About />} />
                <Route path="/2025/july2/src/pages/Books.jsx/*" element={<Books />} />
                <Route path="/2025/july2/src/pages/Login.jsx/*" element={<Login />} />
                <Route path="/2025/july2/src/pages/Registrer.jsx/*" element={<Registrer />} />
            </Routes>

            <h1>About us</h1>
            <p>this project is for an exam</p>
        </div>
    )
}