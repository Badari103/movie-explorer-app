import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import  { getMovie, resetState } from "../redux/movie";
import Movie from "../components/movie";
import Loader from "../components/loader";

const MovieDetails = ()=>{
    const dispatch= useDispatch();
    const {id}= useParams();
    // const Id=id.substring(1);
    let Id=id;
    if(id.startsWith(":")){ Id=id.substring(1);}
    const movie= useSelector((state)=>state.movie);
    useEffect(()=>{
        dispatch(getMovie(Id ? parseInt(Id,10):0))

        return()=>{
            dispatch(resetState())
        }
        
    },[dispatch])
    useEffect(()=>{
        if(Id!==movie.id?.toString()){
            dispatch(getMovie(Id ? parseInt(Id,10):0))
        }
    },[id,movie.id])
    return(
            <div>
       {/* { console.log( Id)} */}
        {movie.isFetching? <Loader /> : <Movie movie={movie} />}
        </div>
    );
}

export default MovieDetails;