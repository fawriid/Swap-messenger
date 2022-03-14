import { Navigate, Routes, Route } from "react-router-dom";

// style
import "./App.css";
import Chat from "./components/Chat";

// conmponent
import Login from "./components/Login";

// context
import AuthContext from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthContext>
                <Routes>
                    <Route path='/chat' element={<Chat />} />
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AuthContext>
        </div>
    );
}

export default App;
