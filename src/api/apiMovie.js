// https://api.themoviedb.org/3/movie/popular?api_key=b0039237e6e50a87fc14ce83712d689e
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});