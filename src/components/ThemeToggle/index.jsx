/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

export default function ThemeToggle() {
    const [dark, setDark] = useState(true)

    return (
        <div className={`justify-content-center align-items-center`}>
            <FaRegSun className={`me-1 ${styles.icons} ${dark ? '' : 'text-black'}`}/>
            <label className={`${styles.switch}`}>
                <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
                <span className={`${styles.slider} border ${styles.round} ${dark ? 'border-light' : 'border-black'} ${dark ? styles.dark : styles.light}`}></span>
            </label>
            <FaRegMoon className={`ms-1 ${dark ? '' : 'text-black'}`} />
        </div>
    )
}