







import { createSlice } from "@reduxjs/toolkit";



const MyCSAStore = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        AdToCart(state , action){
            state.push(action.payload)
        },
        CollarsAdtoCart(state , action){
            state.push(action.payload)
        }
       
    }
})

export const {AdToCart , CollarsAdtoCart} = MyCSAStore.actions;


export default MyCSAStore.reducer;