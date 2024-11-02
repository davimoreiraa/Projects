/* ------------------ COMPONENTS -------------------*/
import Footer from '../components/Header'
import Header from '../components/Header'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

export default function Home() {
    const [dark, setDark] = useState(true)

    const changeTheme = () => {
        setDark(!dark)
    }

    return (
        <div className={`${styles.container}`}>
            <Header dark={dark} changeTheme={changeTheme}/>
            <main className={`${styles.content} ${dark ? styles.dark : styles.light}`}>
                <section className={`${styles.projects}`}>
                    <h1>Principais projetos</h1>
                </section>
            </main>
            
        </div>
    )
}