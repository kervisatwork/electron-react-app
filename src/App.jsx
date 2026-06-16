import { BrowserRouter, Routes, Route } from 'react-router';

import ModelTest from "./pages/ModelTest"
import Header from "./components/BodyStructures/Header"
import HomePage from "./pages/Home"
import LoveTest from "./pages/LoveTest"

import "./App.css"

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/amor" element={<LoveTest />} />
            </Routes>
        </>
    );
}

export default App;