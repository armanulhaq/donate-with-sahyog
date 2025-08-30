import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NeedYourSupport from "./pages/NeedYourSupport";
import ProjectPage from "./pages/ProjectPage";
import Success from "./pages/Success";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/needs-your-support"
                    element={<NeedYourSupport />}
                />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </>
    );
}

export default App;
