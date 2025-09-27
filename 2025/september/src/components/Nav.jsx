import Link from "react-router"

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to="/Home.jsx">Home</Link>
                <Link to="/Html.jsx">Html</Link>
                <Link to="/Css.jsx">Css</Link>
                <Link to="/Javascript.jsx">Javascript</Link>
                <Link to="/Accesibility.jsx">Accesibility</Link>
            </nav>
        </div>
    )
}