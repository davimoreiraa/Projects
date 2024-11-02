import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

export default function Slider() {
    return (
        <Swiper>
            <SwiperSlide>
                <h1>teste1</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>teste2</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>teste3</h1>
            </SwiperSlide>
        </Swiper>
    )
}