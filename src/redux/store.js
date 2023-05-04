import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "./search";
import createSagaMiddleware from "@redux-saga/core";
import watcherSaga from "../saga";
import genresReducer from "./genre";
import moviesReducer from "./movies";
import movieReducer from "./movie";

const sagaMiddleware= createSagaMiddleware();
const store = configureStore({
    reducer:{
        search: searchReducer,
        movies: moviesReducer,
        movie:movieReducer
        // generes: genresReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({think:false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);
export default store;