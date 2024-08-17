/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/


export default function Header() {
    const [dark, setDark] = useState(true)
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className={`${styles.sidebar} position-absolute top-0 start-0 border-end`}>
            oi davi
        </div>
    )
}