import { Swiper } from 'swiper/react'
import 'swiper/css'

export default function Slider({ settings, children }) {
    return (
        <Swiper {...settings}>{children}</Swiper>
    )
}