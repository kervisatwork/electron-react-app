import styles from "./Header.module.css"
import logoImg from "../../assets/images/herbopediaLogo.svg"
import PropTypes from "prop-types";

function Header({userName}) {

    return (
        <header className={styles.globalHeader}>
            
            <div className={styles.logo}>
                <img src={logoImg} alt="logo" />
                <h1>Herbapedia</h1>
            </div>
            <div className={styles.menuAction}>
                <a href="#/login" className={styles.login}>Login</a>
                <button alt="open Menu" onClick={() => {
                    const menu = document.querySelector(`.${styles.navMenu}`)
                    menu.style.display = "block"
                }}>
                    <div className={styles.bar}></div>
                </button>
            </div>

            <nav className={styles.navMenu}>
                <div className={styles.menuAction}>
                    <h2>Menu</h2>
                    <button alt="close Menu" onClick={() => {
                        const menu = document.querySelector(`.${styles.navMenu}`)
                        menu.style.display = "none"
                    }}>
                        X
                    </button>
                </div>
                <div className={styles.menuBody}>
                <ul>
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/about">Sobre</a></li>
                    <li><a href="#/contact">Contato</a></li>
                    <li><a href="#/themes">Temas</a></li>
                </ul>
                </div>
            </nav>

        </header>
    )
}

function MenuList(list) {
    return (
        <ul>
            {{}}
        </ul>
    )
}

export default Header