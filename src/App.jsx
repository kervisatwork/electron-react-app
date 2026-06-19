import { BrowserRouter, Routes, Route } from 'react-router';
import { Component } from 'react';
import { styled } from 'styled-components'

// Paginas
import HomePage from "./pages/Home"
import TestPage from "./pages/Teste"

// Css
import "./App.css"
import Theme from "./theme/Theme"


class App extends Component {

    render() {
        return (
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teste" element={<TestPage />} />
                </Routes>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100vwh;
    min-height: 100vh;
    background-color: ${Theme.background.color.primary};
    box-sizing: border-box;
    overflow: none;
`


export default App;