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
            <div className={`d-flex`}>
                <img src={assBck} alt='logo' className={`${styles.logo}`}/>
                <nav className={`flex-grow-1`}>
                    <ul className={`list-unstyled d-flex justify-content-around`}>
                        <li className={``}>Principais projetos</li>
                        <li>Sobre mim</li>
                        <li>Principais ferramentas</li>
                    </ul>
                    <FaRegSun  className={`me-1 ${dark ? '' : 'text-black'}`}/>
                    <label className={`${styles.switch} ${dark ? 'border-light' : ' border-black'}`}>
                        <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
                        <span className={`${styles.slider} border ${styles.round} ${dark ? styles.dark : styles.light} ${dark ? 'border-light' : ' border-black'} ${dark ? 'bg-black' : 'bg-white'}`}></span>
                    </label>
                    <FaRegMoon className={`ms-1 ${dark ? '' : 'text-black'}`} />
                </nav>
            </div>
        </header>
    )
}