import { Navigate, Routes, Route } from "react-router-dom";

// style
import "./App.css";

// conmponent
import Login from "./components/Login";
import Navbar from "./components/Navbar";

// context
import AuthContext from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthContext>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AuthContext>
        </div>
    );
}

export default App;
