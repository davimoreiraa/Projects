/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ ICONS -------------------*/
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

export default function ThemeToggle(props) {
    return (
        <div className={`d-flex justify-content-center align-items-center`}>
            <FaRegSun className={`me-1 ${styles.icons} ${props.dark ? '' : 'text-black'}`}/>
            <label className={`${styles.switch}`}>
                <input type="checkbox" checked={props.dark} onChange={() => props.changeTheme()} />
                <span className={`${styles.slider} border ${styles.round} ${props.dark ? 'border-light' : 'border-black'} ${props.dark ? styles.dark : styles.light}`}></span>
            </label>
            <FaRegMoon className={`ms-1 ${props.dark ? '' : 'text-black'}`} />
        </div>
    )
}