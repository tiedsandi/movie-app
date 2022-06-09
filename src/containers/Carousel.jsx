import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
    return (
        <Box position={'relative'} width={'100%'} height={'800px'} mt={1}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src="./images/banner1.jpg" alt="logo" /></SwiperSlide>
                <SwiperSlide><img src="./images/banner2.jpg" alt="logo" /></SwiperSlide>
                <SwiperSlide><img src="./images/banner3.jpg" alt="logo" /></SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Carousel
