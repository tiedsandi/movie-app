import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";
const rootReducer = {
    movies: moviesReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;