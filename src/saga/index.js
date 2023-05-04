import {takeLatest,takeEvery,delay,call,put,all} from 'redux-saga/effects';
import { fetchedSearchMovies, searchMovies } from '../redux/search';
import { API_KEY } from '../config';
import TheMovieDbApi from '../lib/api';
import { fetchedGeneres, getGeneres } from '../redux/genre';
import { fetchedPopularMovies, getPopularMovies } from '../redux/movies';
import { fetchedMovie, getMovie } from '../redux/movie';

const api=new TheMovieDbApi(API_KEY);

function* fetchGeneres(action){
    yield put(
        fetchedGeneres(yield call(api.getGeneres,action.payload))
    )
}

function* fetchSearchMovies(action){
    yield delay(500);

    yield put(
        fetchedSearchMovies(yield call(api.searchMovies,action.payload))
    );
}

function* fetchPopularMovies(action){
    yield put(
        fetchedPopularMovies(yield call(api.getPopularMovies,action.payload))
    )
}
function* fetchMovie(action){
    yield put(
        fetchedMovie(yield call(api.fetMovie,action.payload))
    )
}
export default function* watcherSaga(){
    yield all([
        takeEvery(getGeneres.type,fetchGeneres),
        takeEvery(getMovie.type,fetchMovie),
        takeEvery(getPopularMovies.type,fetchPopularMovies),
        takeLatest(searchMovies.type,fetchSearchMovies)
    ]);
} 