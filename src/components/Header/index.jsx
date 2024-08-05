/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ IMGS -------------------*/
import assBck from '../../assets/images/assignature_bck.png'
import assWht from '../../assets/images/assignature_wht.png'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";


export default function Header() {
    const [dark, setDark] = useState(true)

    return (
        <header className={`${styles.header} ${dark ? '' : styles.light} p-5`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`col-1`}>
                    <img src={dark ? assWht : assBck} alt='logo' className={`${styles.logo}`}/>
                </div>
                <nav className={`col-7 d-flex justify-content-between`}>
                    <ul className={`${styles.list} list-unstyled d-flex justify-content-between`}>
                        <li className={``}>Principais projetos</li>
                        <li>Sobre mim</li>
                        <li>Principais ferramentas</li>
                    </ul>
                </nav>
                <div className={`col-2 d-flex justify-content-center`}>
                    <FaRegSun  className={`me-1 ${dark ? '' : 'text-black'}`}/>
                    <label className={`${styles.switch}`}>
                        <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
                        <span className={`${styles.slider} border ${styles.round} ${dark ? 'border-light' : 'border-black'} ${dark ? styles.dark : styles.light}`}></span>
                    </label>
                    <FaRegMoon className={`ms-1 ${dark ? '' : 'text-black'}`} />
                </div>
            </div>
        </header>
    )
}