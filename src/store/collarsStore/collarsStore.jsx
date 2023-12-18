





import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


const MyColloars = createSlice({
    name:'collor',
    initialState:[
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/08/7/19/252134714-0.jpg',
            title:"Large Cooling Dog Collar",
            price:9
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571785-0.jpg',
            price:6,
            title:'Reflective Woven Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571718-0.jpg',
            price:8,
            title:'Jumbo Choke Chain'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571716-0.jpg',
            price:6,
            title:'Dog Leash With Faux Leather Handle'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571902-0.jpg',
            price:9,
            title:'Spiked Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571730-0.jpg',
            price:6 ,
            title:'Adjustable Nylon Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/06/28/19/86570673-0.jpg',
            price:12,
            title:'Paw Bone Print Collar Leash Bundle Set'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571903-0.jpg',
            price:20,
            title:'Wide Dog Collar With Studs Spikes',
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571904-0.jpg',
            price:13,
            title:'Flower Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/06/27/08/86568087-0.jpg',
            price:16,
            title:'Dualcolored Nylon Leash Collars Set'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571317-0.jpg',
            price:21,
            title:'Patriotic Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571775-0.jpg',
            price:22,
            title:'Adjustable Camouflage Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/08/7/19/252134715-0.jpg',
            price:23,
            title:'Small Cooling Dog Collar'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/07/29/13/N6TVWGQP0F-0.jpg',
            price:12,
            title:'Lightup Dog Leash'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571843-0.jpg',
            price:22,
            title:'Adjustable Dog Collar With Plaid Design'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/06/24/23/MQ94NUGPCX-0.jpg',
            title:'Clipon Dog Collar Light',
            price:21
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/06/28/20/86572224-0.jpg',
            price:23,
            title:'Lightup Dog Collar Countertop Display'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/08/14/20/287903320-0.jpg',
            price:32,
            title:'Medium Cooling Dog Collar'
        }
    ],
    reducers:{
       
    }
})




export default MyColloars.reducer;