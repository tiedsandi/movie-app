import './style.css'
import { Box, Typography } from "@mui/material"
import Header from '../containers/Header';
import Caraousel from '../containers/Carousel';
import Footer from '../containers/Footer';
import CategoryButton from '../components/CategoryButton';
import CardMovie from '../components/CardMovie';

const Home = () => {
    return (
        <Box>
            <Header />
            <Caraousel />
            <Box px={12} pt={2}>
                <Typography variant="h3" component="h3" >
                    Browse by Category
                </Typography>
                <Box display={'flex'} flexWrap={'wrap'} mt={2}>
                    <CategoryButton name={'All'} active={true} />
                    <CategoryButton name={'Anime'} />
                    <CategoryButton name={'Action'} />
                    <CategoryButton name={'Romantic'} />
                    <CategoryButton name={'Horor'} />
                    <CategoryButton name={'Comedy'} />
                    <CategoryButton name={'Drama'} />
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} mt={2} >
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                </Box>
            </Box>
            <Footer />
        </Box>

    )
}

export default Home
