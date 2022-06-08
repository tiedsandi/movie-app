import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
    return (
        <Box position={'relative'} width={'100%'} height={'500px'} mt={1}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src="./images/MilanTV.png" alt="logo" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Carousel
