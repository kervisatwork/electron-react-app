import { BrowserRouter, Routes, Route } from 'react-router';


import HomePage from "./pages/Home"
import Teste from "./pages/Teste"

import "./App.css"

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/teste" element={<Teste />} />
            </Routes>
        </>
    );
}

export default App;