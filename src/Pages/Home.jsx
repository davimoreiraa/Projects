/* ------------------ COMPONENTS -------------------*/
import Footer from '../components/Header'
import Header from '../components/Header'
import Slider from '../components/Slider/index.jsx'

/* ------------------ IMGS -------------------*/
import adopet from '../assets/images/cards/adopet.png' //teste

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
                    <div className={`${styles.title_container} d-flex justify-content-center align-items-center`}>
                        <h1 class={`${styles.title}`}>Principais projetos</h1>
                    </div>
                       <Slider />
                </section>
            </main>
            
        </div>
    )
}