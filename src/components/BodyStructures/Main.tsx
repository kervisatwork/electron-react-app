import styles from "./Main.module.css"

interface User {
    name: string,
    age: number,
    city: string

}

const users: User[] = [
    {name: "Lucas", age: 22, city: "Fortaleza"},
    {name: "Mariana", age: 25, city: "Garanhuns"},
    {name: "Bertolino", age: 43, city: "São Paulo"},
    {name: "Evellyn", age: 19, city: "Maranguape"}
]

function Main() {
    return (
        <main>
            <div className={styles.container}>
                <ul className="lista">
                    {users.map((user, i) => (
                        <li>Nome: {user.name}, idade: {user.age}, city: {user.city}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Main