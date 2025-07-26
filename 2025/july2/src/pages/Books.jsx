import { useEffect, useState } from "react"
import FavoriteBook from "../components/favoriteBook"
import { Routes, Route } from "react-router"

export default function Books() {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = fetch("https://www.googleapis.com/books/v1/volumes?q=subject:{userInput}")
                const result = await api.json()

                setData(result)
            } catch(err) {
                console.error(err);
            }
        }

        fetchData()
    })

    if (!data) {
        return <p>Loading data...</p>
    }

    return (
        <div>
            <Routes>
                <Route path="/2025/july2/src/pages/About.jsx/*" element={<About />} />
                <Route path="/2025/july2/src/pages/Books.jsx/*" element={<Books />} />
                <Route path="/2025/july2/src/pages/Login.jsx/*" element={<Login />} />
                <Route path="/2025/july2/src/pages/Registrer.jsx/*" element={<Registrer />} />
            </Routes>

            <h1>Books</h1>
            <br />
            <FavoriteBook />
            <br />
            {Array.isArray() && data.map(item => {
                <div key={item.items.volumeInfo}>
                    <h1>{item.items.volumeInfo.title}</h1>
                    <h2>Written by {item.items.volumeInfo.authors}</h2>
                    <br />
                    <p>{item.items.volumeInfo.description}</p>
                    <br />
                    <button>Add to favorites</button>
                </div>
            })}
        </div>
    )
}