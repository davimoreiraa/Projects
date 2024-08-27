/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/


export default function Sidebar(props) {
    const [dark, setDark] = useState(true)

    return (
        <div className={`${styles.sidebar} position-absolute top-0 start-0 border-end`}>
            <button>outside</button>
            next path is to bring to sidebar the function setSidebar, to make it disabled when u click at the outside part of it
        </div>
    )
}