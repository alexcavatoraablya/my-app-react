import { BrowserRouter, Routes, Route, Link } from "react-router";

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Головна</Link> |{" "}
                <Link to="/about">Про нас</Link>
            </nav>

            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}