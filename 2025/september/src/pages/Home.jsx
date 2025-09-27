import { Routers, Route } from "react-router"
import Nav from "../components/Nav"
import Html from "./Html"
import Css from "./Css"
import Javascript from "./Javascript"
import Accesibility from "./Accesibility"

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Frontend Quiz!</h1>
            <p>Pick a subject to get started</p>
            <Nav />
            <Routers>
                <Route to="/Html.jsx" element={<Html />} />
                <Route to="/Css.jsx" element={<Css />} />
                <Route to="/Javascript.jsx" element={<Javascript />} />
                <Route to="/Accesibility.jsx" element={<Accesibility />} />
            </Routers>
        </div>
    )
}