import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import apiMovie from '../api/apiMovie';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await apiMovie.get(`/movie/popular?api_key=b0039237e6e50a87fc14ce83712d689e&language=en-US`);
        return response.data;
    }
);

export const genre = createAsyncThunk(
    'movies/genre',
    async (data) => {
        const response = await apiMovie.get(`/genre/movie/list?api_key=b0039237e6e50a87fc14ce83712d689e&language=en-US`);
        return response.data;
    }
);


const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // setMovies: (state, action) => {
        //     state.movies = action.payload;
        // }\
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            console.log('pending');
            return { ...state, loading: true, error: null, };
        },
        [fetchMovies.fulfilled]: (state, action) => {
            console.log('fulfilled');
            return { ...state, movies: action.payload, };
        },
        [fetchMovies.rejected]: (state, action) => {
            console.log('rejected');
            return { ...state, loading: false, error: action.error, };
        }
    }
});

export const { setLoading } = moviesSlice.actions;

export default moviesSlice.reducer;