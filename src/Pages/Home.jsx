/* ------------------ COMPONENTS -------------------*/
import Footer from '../components/Header'
import Header from '../components/Header'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Home() {
    return (
        <div className={`${styles.container}`}>
            <Header />
        </div>
    )
}