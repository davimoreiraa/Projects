import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './styles.module.css'
import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

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
                <div className={`${styles.card}`}>
                    <div className={`${styles.img_container}`}>                       
                        daaiosvdjaois
                                            {/* <img className={`${styles.img}`} src={adopet} alt="" /> */}
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