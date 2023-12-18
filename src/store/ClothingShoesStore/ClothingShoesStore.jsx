



import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


const MyClothingAndShoes = createSlice({
    name:'user',
    initialState:[
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571897-0.jpg',
            title:"Sleeveless Dog Tshirt",
            price:8
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/02/11/10/BARSF713ET-0.jpg',
            price:38,
            title:'Durable Magnetic Folding Magnetic Back Moisture Resistant Dust Proof'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2019/06/28/20/86572215-0.jpg',
            price:30,
            title:'Small Dog Printed Novelty Shirt Clip Strip'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2020/03/13/22/3571716-0.jpg',
            price:6,
            title:'Dog Leash With Faux Leather Handle'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/02/11/07/Q8M20WIES8-0.jpg',
            price:26,
            title:'Durable Duraframe Magnetic Holding Height Magnetic Antiglare Four Sided Sturdy Plastic Silver'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/02/11/07/B7WA9D3KTL-0.jpg',
            price:164 ,
            title:'Durablereg; 12section Catalog Display Sections Gray Steel'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/03/16/13/ULQC9GI6KL-0.jpg',
            price:127,
            title:'Durablereg Varioreg Letter Size Antimicrobial Polypropylene Sleeves Antireflectivenonglare Gray'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A000XWHS5U-0.jpg',
            price:20,
            title:'Derby Dude Screen Print Dog Shirt Grey Xl',
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A0090K5HE1-0.jpg',
            price:20,
            title:'I Love My Daddy Screen Print Yellow Med 12'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A00N7IPRZ5-0.jpg',
            price:16,
            title:'I Heart Treats Screen Print Yellow Large'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A018I5673L-0.jpg',
            price:21,
            title:'Classic America Rhinestone Dress Red With White Xl'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A01G6XHDUW-0.jpg',
            price:22,
            title:'Purple Swiss Dot Heart Screen Pet Hoodies Cream Size'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A03E85TB16-0.jpg',
            price:23,
            title:'Warrior Cross Studded Hoodies Baby Blue Xxl'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A05L2YU8QE-0.jpg',
            price:12,
            title:'Ask My Mom Screen Print Dog Dress With Light Pink Xxxl 20'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A05O3D6TTV-0.jpg',
            price:22,
            title:'I Love New York Screen Print Pet Grey Size Xl 16'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A05VHGHMYU-0.jpg',
            title:'Happy Camper Screen Print Dress Baby Blue Xl 16',
            price:21
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A0774BUMNI-0.jpg',
            price:23,
            title:'Backyard Security Screen Print Hoodies Grey Size Xxl 18'
        },
        {
            id:v4(),
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/12/1/05/A09GYUY6IH-0.jpg',
            price:32,
            title:'Family Food And Football Screen Dog Dress Black With Bright'
        }
    ],
    reducers:{
       
    }
})




export default MyClothingAndShoes.reducer;