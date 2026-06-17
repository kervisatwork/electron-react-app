import { Link } from "react-router"
import { ThemeProvider } from "styled-components"

import ThemeSchema from "../theme/Theme"

function Teste() {

    let style = {
        display: "flex",
        flexFlow: "row wrap",
        gap: "4pt"
    }

    return (
        <div style={style}>
            <BtnPillIcon icon={<MaterialIcon name="star" />} title="Click Me" color="#00ff00" destiny="../" />
            <BtnPillIcon title="Teste" color="#ffcc00"/>
            <BtnPillIcon title="STOP!" color="#ff0000"/>
        </div>
    )
}

function BtnPillIcon({icon, title, color, destiny}) {

    let style = {
        backgroundColor: color,
        borderRadius: "40px",
        padding: "12pt 20pt",
        fontSize: "14pt", 
        cursor: "pointer",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <Link to={destiny} >
            <button style={style}>
                {icon} {title}
            </button>
        </Link>
    )
}

function MaterialIcon({name}) {
    return (
        <ThemeProvider theme={ThemeSchema}>
            <span class="material-symbols-outlined">
                {name}
            </span>
        </ThemeProvider>
    )
}

export default Teste;