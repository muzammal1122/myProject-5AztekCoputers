


import { configureStore } from "@reduxjs/toolkit";

import MyHotProduct from './hotProducts/hotProduct'
import MyFeatuerdPruduct from './featureProduct/featureProduct';
import myNewArivals    from './newAriValsStore/newAraivalStore'
import MyClothingAndShoes from './ClothingShoesStore/ClothingShoesStore'
import MyCSAStore from './ClothingShoesStore/C.S.AStore'
import myFilterCloth from './ClothingShoesStore/filterClothPrices'
import MyColloars from './collarsStore/collarsStore'

const merahotprodact = configureStore({
    reducer: {
        HotTProduct: MyHotProduct,
        featureproduc: MyFeatuerdPruduct,
        newAriVaLas:myNewArivals,
        clothingsAndShoes:MyClothingAndShoes,
        myCSAStore:MyCSAStore,
        filterWalaProducts:myFilterCloth,
        collorWala:MyColloars
    }
})

export default merahotprodact;