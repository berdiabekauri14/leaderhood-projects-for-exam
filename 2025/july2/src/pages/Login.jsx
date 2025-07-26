import { useContext } from "react";
import AuthContext from "../context/Auth";
import { Routes, Route } from "react-router"

export default function Login() {
    const {login} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        const formData = {
            email: e.target.form.email.value,
            password: e.target.form.name.value
        }

        if (formData.email === "" || formData.name === "" || formData.password === "") {
            alert("Please fill all the fields");
            return;
        }

        login(formData)
    }

    return (
        <div>
            <Routes>
                <Route path="/2025/july2/src/pages/About.jsx/*" element={<About />} />
                <Route path="/2025/july2/src/pages/Books.jsx/*" element={<Books />} />
                <Route path="/2025/july2/src/pages/Login.jsx/*" element={<Login />} />
                <Route path="/2025/july2/src/pages/Registrer.jsx/*" element={<Registrer />} />
            </Routes>

            <h1>Login</h1>
            <br />
            <form name="form">
                <input type="email" name="email" placeholder="Enter your email" />
                <br />
                <input type="password" name="password" placeholder="Create a password" />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}