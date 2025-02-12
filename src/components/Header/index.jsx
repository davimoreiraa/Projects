/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ IMGS -------------------*/
import assBck from '../../assets/images/assignatures/assignature_bck.png'
import assWht from '../../assets/images/assignatures/assignature_wht.png'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ COMPONENTS -------------------*/
import Sidebar from '../Sidebar'
import ThemeToggle from '../ThemeToggle'

/* ------------------ ICONS -------------------*/
import { CiMenuBurger } from "react-icons/ci";

export default function Header(props) {
    const [sidebar, setSidebar] = useState(false)

    const closeSideBar = () => {
        setSidebar(false)
    }

    return (
        <header className={`${styles.header} ${props.dark ? '' : styles.light} p-5`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`col-4 col-sm-2 col-md-1`}>
                    <img src={props.dark ? assWht : assBck} alt='logo' className={`${styles.wd}`}/>
                </div>
                <div className={`d-flex col-9 col-xl-8 justify-content-around`}>
                    <nav className={`${props.dark ? styles.dark : styles.light} col-7 d-flex justify-content-between`}>
                        <ul className={`${styles.wd} d-none d-lg-flex m-0 list-unstyled justify-content-between`}>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Principais projetos</a></li>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Sobre mim</a></li>
                            <li className={`d-flex align-items-center`}><a href='google.com' className={`${styles.nav_link}`}>Principais ferramentas</a></li>
                        </ul>
                    </nav>
                    <div className={`d-none d-lg-flex col-2 justify-content-center align-items-center`}>
                        <ThemeToggle dark={props.dark} changeTheme={props.changeTheme}/>
                    </div>
                    <div className={`${styles.dark} fs-1 d-flex d-lg-none align-items-center`}>
                       <button className={`${props.dark ? styles.dark : styles.light} ${styles.btn}`} onClick={() => setSidebar(!sidebar)}><CiMenuBurger /></button>  
                    </div>
                </div>
            </div>
            <div className={`${styles.sidebar_container}`}>
                <Sidebar dark={props.dark} changeTheme={props.changeTheme} closeSideBar={closeSideBar} isUp={sidebar}/>
            </div>
        </header>
    )
}