import { Link } from "react-router";

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="../pages/Home.jsx">Home</Link></li>
                    <li><Link to="../pages/About.jsx">About</Link></li>
                    <li><Link to="../pages/Books.jsx">Books</Link></li>
                    <li><Link to="../pages/Login.jsx">Login</Link></li>
                    <li><Link to="../pages/Registrer.jsx">Registrer</Link></li>
                </ul>
            </nav>
        </div>
    )
}