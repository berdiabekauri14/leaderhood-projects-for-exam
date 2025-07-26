import { useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import AuthContext from "./Auth";

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const registrer = formData => {
        const users = getLocal("users") || [];
        const exists = users.find(obj => obj.email === formData.email)

        if (exists) {
            alert("Email already registrered");
            return;
        }

        setLocal("users", [...users, formData])
        alert("Registration succesful!")
    }

    const login = formData => {
        const users = getLocal("users") || [];
        const exists = users.find(obj => obj.email === formData.email && obj.password === formData.password)

        if (!exists) {
            alert("Credentials are incorrect");
            return;
        }

        setUser(exists);
        alert("Login succesful!")
    }

    return (
        <AuthContext.Provider value={{ registrer, login, user }}>
            {children}
        </AuthContext.Provider>
    )
}