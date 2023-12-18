

import { createSlice } from "@reduxjs/toolkit";
import MyClothingAndShoes from './ClothingShoesStore'


const myFilterCloth = createSlice({
    name:'user',
    initialState:{
        filterProduct : JSON.parse(sessionStorage.getItem('filterDAta')) || MyClothingAndShoes
    },
    reducers:{
        filterProducts(state , action){
            try {
                const filter = MyClothingAndShoes.filter((abc)=>abc.type == action.payload)
                state.filterProduct = filter
                console.log(filter);
                const savStae = JSON.stringify(filter);

                sessionStorage.setItem('filterDAta' , savStae);
            } catch (error) {
                return error
            }
        }
    }
})

export const {filterProducts} = myFilterCloth.actions


export default myFilterCloth.reducer;