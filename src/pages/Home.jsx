import { Box, Typography } from "@mui/material"
import Header from '../containers/Header';
import Caraousel from '../containers/Carousel';
import Footer from '../containers/Footer';
import CategoryButton from '../components/CategoryButton';
import CardMovie from '../components/CardMovie';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setLoading } from "../redux/movies";
import { useEffect } from "react";
import MoviePagination from "../components/MoviePagination";

const Home = () => {
    const movies = useSelector(state => state.movies.movies);
    const isLoading = useSelector(state => state.movies.loading);
    console.log(movies);
    console.log(isLoading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    }, [dispatch])

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
                    {
                        isLoading ?
                            <Typography variant="h3" component="h3" >
                                Loading...
                            </Typography>
                            :
                            movies.results ? movies.results.map((movie, index) => {
                                return (
                                    <CardMovie key={index} movie={movie} />
                                )
                            }) : null
                    }
                    < MoviePagination pages={movies.total_pages} />
                </Box>

            </Box>
            <Footer />
        </Box >
    )
}

export default Home
