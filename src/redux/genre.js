import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    generes:[],
    isFetching: false
};

const generesSlice = createSlice({
    name:"genereSlice",
    initialState,
    reducers:{
        getGeneres:(state)=>{
            return{
                ...state,
                isFetching:true 
            }
        },
        fetchedGeneres:(state,action)=>{
            return{
                ...state,
                isFetching:false,
                generes:action.payload.genres
            }
        },
        resetGeneres:(state)=>{
            return initialState
        }
    }
});

export const {getGeneres,fetchedGeneres,resetGeneres} = generesSlice.actions;
export default generesSlice.reducer;