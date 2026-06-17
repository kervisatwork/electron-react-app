import { BrowserRouter, Routes, Route } from 'react-router';
import { Component } from 'react';
import { ThemeProvider } from 'styled-components';

// Paginas
import HomePage from "./pages/Home"
import Teste from "./pages/Teste"

// Css
import "./App.css"
import ThemeSchema from "./theme/Theme"


class App extends Component {

    render() {
        return (
            <>
                <ThemeProvider theme={ThemeSchema}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/teste" element={<Teste />} />
                    </Routes>
                </ThemeProvider>
            </>
        )
    }
}

export default App;