import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, resetState } from "../redux/movies";
import Loader from "../components/loader";
import Movies from "../components/movies";
import { Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const PopularMovies = ()=>{
    const dispatch = useDispatch();
    const movies= useSelector((state)=>state.movies);
    useEffect(()=>{
        dispatch(getPopularMovies());

        return()=>{
            dispatch(resetState());
        }
    },[dispatch])
    console.log(movies);
    const loadMore = ()=>{
        if(movies.hasMore){dispatch(getPopularMovies(movies.page+1))}
    }
    return(
        movies.page==0 && movies.isFetching? <Loader /> : 
        <>
        <Typography component={"h2"} variant="h3" gutterBottom={true}>
            POPULAR MOVIES
        </Typography>
        <InfiniteScroll
        dataLength={movies.totalResults}
        next={loadMore}
        hasMore={movies.hasMore}
        loader={<Loader />}
        style={{overflow:"hidden"}}
        endMessage={<p>You Have Seen All of It!!!</p>}
         >
        <Movies movies={movies} />
        </InfiniteScroll>
        </>
    );
}

export default PopularMovies;