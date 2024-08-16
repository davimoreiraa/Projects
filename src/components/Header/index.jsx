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
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
    const [dark, setDark] = useState(true)

    return (
        <header className={`${styles.header} ${dark ? '' : styles.light} p-5 border-bottom border-white`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`col-4 col-sm-2 col-md-1`}>
                    <img src={dark ? assWht : assBck} alt='logo' className={`${styles.wd}`}/>
                </div>
                <div className={`d-flex col-9 col-xl-8 justify-content-around`}>
                    <nav className={`${dark ? styles.dark : styles.light} col-7 d-flex justify-content-between`}>
                        <ul className={`${styles.wd} d-none d-lg-flex m-0 list-unstyled justify-content-between`}>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Principais projetos</a></li>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Sobre mim</a></li>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Principais ferramentas</a></li>
                        </ul>
                    </nav>
                    <div className={`d-none d-lg-flex col-2 justify-content-center align-items-center`}>
                        <FaRegSun className={`me-1 ${dark ? '' : 'text-black'}`}/>
                        <label className={`${styles.switch}`}>
                            <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
                            <span className={`${styles.slider} border ${styles.round} ${dark ? 'border-light' : 'border-black'} ${dark ? styles.dark : styles.light}`}></span>
                        </label>
                        <FaRegMoon className={`ms-1 ${dark ? '' : 'text-black'}`} />
                    </div>
                    <div className={`fs-1 d-flex d-lg-none align-items-center`}>
                        <CiMenuBurger />
                    </div>
                </div>
            </div>
        </header>
    )
}