import axios from "axios";

export default class TheMovieDbApi{
    apiBaseUrl="https://api.themoviedb.org/3";
    apiKey;
    constructor(apiKey){
        this.apiKey=apiKey;
    }
    getPopularMovies = async(page=1)=>{
        const response= await axios.get(
            `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&query=${page}`);
    
            return response.data;
    }
    fetMovie = async(id )=>{
        // id=id ? parseInt(id,10):0;
        
        const response= await axios.get(
            `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`);
    
            return response.data;
    }
    searchMovies= async (query)=>{
        const response= await axios.get(
        `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);

        return response.data;
    }
    getGeneres = async()=>{
        const response= await axios.get(
        `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`);

        return response.data;
    }
}