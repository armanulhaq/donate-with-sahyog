import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NeedYourSupport from "./pages/NeedYourSupport";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/needs-your-support"
                    element={<NeedYourSupport />}
                />
            </Routes>
        </>
    );
}

export default App;
