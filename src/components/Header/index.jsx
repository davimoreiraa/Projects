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
                <div className={`col-3 col-sm-2 col-md-1`}>
                    <img src={dark ? assWht : assBck} alt='logo' className={`${styles.logo}`}/>
                </div>
                <nav className={`col-7 d-flex justify-content-between`}>
                    <ul className={`${styles.list} d-none d-md-flex m-0 list-unstyled justify-content-between`}>
                        <li className={`d-flex align-items-center`}>Principais projetos</li>
                        <li className={`d-flex align-items-center`}>Sobre mim</li>
                        <li className={`d-flex align-items-center`}>Principais ferramentas</li>
                    </ul>
                </nav>
                <div className={`col-3 col-md-2 d-flex justify-content-center align-items-center`}>
                    <FaRegSun className={`me-1 ${dark ? '' : 'text-black'}`}/>
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