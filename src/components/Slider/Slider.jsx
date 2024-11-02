import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider({ settings, children }) {
    return (
        <Swiper modules={[Pagination]} {...settings}>{children}</Swiper>
    )
}