import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './styles.module.css'
import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

/* ------------------ IMGS -------------------*/
import food_delivery from '../../assets/images/cards/food_delivery.jpeg'

export default function Slider() {
    const settings = {
        spaceBetween: 25,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        }, 
    }

    return (
        <Swiper modules={[Pagination]} spaceBetween={25}>
            <SwiperSlide>
                <div className={`${styles.card} `}>
                    <div className={`${styles.img_container} d-flex justify-content-center`}>               
                        <img className={`${styles.img}`} src={food_delivery} alt="" />
                    </div>
                    <h2 className={`d-flex justify-content-center`}>
                        Food delivery
                    </h2>
                </div>          
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.card}`}>
                    <div className={`${styles.img_container}`}>                       
                        <img className={`${styles.img}`} src={food_delivery} alt="" />
                    </div>
                </div>          
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.card}`}>
                    <div className={`${styles.img_container}`}>                       
                        iufocapsina
                                            {/* <img className={`${styles.img}`} src={adopet} alt="" /> */}
                    </div>
                </div>          
            </SwiperSlide>
        </Swiper>
    )
}