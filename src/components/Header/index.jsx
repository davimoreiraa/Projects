/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------  IMGS -------------------*/
import assBck from '../../assets/images/assignature_bck.png'
// import { assWht } from 

export default function Header() {
    return (
        <header className={`${styles.header} p-5`}>
            <div className={`d-flex`}>
                <img src={assBck} alt='logo' className={`${styles.logo}`}/>
                <nav className={`flex-grow-1`}>
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