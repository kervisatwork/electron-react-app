import styles from "./Header.module.css"
import logoImg from "../../assets/images/herbopediaLogo.svg"

function Header({userName}) {

    return (
        <header className={styles.globalHeader}>
            <div className={styles.logo}>
                <img src={logoImg} alt="logo" />
                <h1>Herbapedia</h1>
            </div>
            <div className={styles.menuAction}>
                <a href="#/login" className={styles.login}>Login</a>
                <button>
                    <div className={styles.bar}></div>
                </button>
            </div>
        </header>
    )
}

export default Header