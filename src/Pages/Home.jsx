/* ------------------ COMPONENTS -------------------*/
import Footer from '../components/Header'
import Header from '../components/Header'
import Slider from '../components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

export default function Home() {
    const settings = {
        spaceBetween: 25,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        }, 
    }

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
                        <Slider settings={settings}>
                            <SwiperSlide>
                                <div className={`${styles.card}`}>
                                    <div className={`${styles.img_container}`}>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                teste2
                            </SwiperSlide>
                            <SwiperSlide>
                                 <h1 className={`${styles.red}`}>teste3</h1>
                            </SwiperSlide>
                        </Slider>
                </section>
            </main>
            
        </div>
    )
}