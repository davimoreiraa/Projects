/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <div>
                <nav className={``}>
                    <ul className={`list-unstyled d-flex justify-content-around`}>
                        <li className={``}>Principais projetos</li>
                        <li>Sobre mim</li>
                        <li>Principais ferramentas</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}