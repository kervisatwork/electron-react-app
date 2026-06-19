import { Link } from "react-router"

import Theme from "../theme/Theme"

function TestPage() {

    let style = {
        display: "flex",
        flex: "1",
        gap: "4pt",
        backgroundColor: Theme.colors.background.primary,
        color: Theme.font.color.primary
    }

    return (
        <div>
            <header>
                Header do projeto
            </header>
            <main>

            </main>
            <footer>
                Footer do projeto
            </footer>
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
        <span class="material-symbols-outlined">
            {name}
        </span>
    )
}

export default TestPage;