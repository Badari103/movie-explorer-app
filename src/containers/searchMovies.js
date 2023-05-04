import React from "react";
import Suggestions from "../components/Suggestions";
import { useSelector } from "react-redux";

const SearchMovieSuggestions =()=>{
    // const {search}=useSelector((store)=>store);
    // const {generes}=useSelector((store)=>store.generes);
    const search= useSelector(state=>state.search);
    const generes= useSelector(state=> state.generes);
    console.log(search);
    // console.log(generes);
    return(<Suggestions movies={search} generes={generes}/>);
}

export default SearchMovieSuggestions;