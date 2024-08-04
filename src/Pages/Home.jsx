/* ------------------  COMPONENTS -------------------*/
import Footer from '../components/Header'
import Header from '../components/Header'

/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

export default function Home() {
    return (
        <>
            <Header />
            <label className={`${styles.switch}`}>
                <input type="checkbox"  />
                <span  className={`${styles.slider} ${styles.round} border border-black`}></span>
            </label>
        </>
    )
}