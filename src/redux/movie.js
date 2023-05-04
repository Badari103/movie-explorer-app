import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    recommendations:{
        results:[],
        page:0,
        hasMore:false,
        totalResults:0,
        totalPages:0,
        isFetching:false 
    }
}

const movieSlice= createSlice({
    name:"movieSlice",
    initialState,
    reducers:{
        getMovie:(state)=>{
            return {
                ...state,
                isFetching:true
            }
        },
        fetchedMovie:(state,action)=>{
            return{
                ...state,
                ...action.payload,
                recommendations:{
                    ...action.payload.recommendations,
                    results:action.payload.recommendations.results,
                    // isFetching:false
                },
                isFetching:false
            }
        },
        resetState:(state)=>{
            return initialState
        }
    }
});

export const {getMovie,fetchedMovie,resetState}= movieSlice.actions;
export default movieSlice.reducer;