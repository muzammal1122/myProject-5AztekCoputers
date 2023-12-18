

import React from 'react'
import './ShopingCart.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TopBrand from '../TopBands/TopBrand'
import { useState } from 'react'
export default function ShopingCart() {

  let [selet, Setselect] = useState(1);



    let clothinAndShoesShopngCart = useSelector(function (store) {
        return store.myCSAStore
    })

    let params = useParams();

    let myClothShoesShopingCart = clothinAndShoesShopngCart.find(function (abc) {
        return abc.id == params.id
    })

    const SeletQuty = (evt) => {
        // console.log(evt.target.value);
        return Setselect(evt.target.value)
    
      }

    function TotalPrice(){

        let total = 0;

        {
            clothinAndShoesShopngCart.map(function(num){
                // console.log(a.price);
              total += +num.price * selet


            })
        }

        return total
    }
    

    // console.log(myClothShoesShopingCart);



    return (
        <div>
            <div className="mainShpingCart">
                <div className="shopingCart-details">
                    <div className="imgShopingCArt">
                        <img className='shopingCart-pic' src={myClothShoesShopingCart.pic} alt="" />
                    </div>
                    <div className="clothShopingCart-title">
                        <p className='shopingCart-title'>{myClothShoesShopingCart.title}</p>
                        <p className='shopingCart-desc'>MFG: DURABLE OFFICE PRODUCTSMFG. Part: DBL 472123SKU: BVCR82SYEKUPC: 616528901738Condition</p>
                    </div>
                    <div className="shopingCart-price-main-div">
                        <p className='shopingCart-price'> $ {TotalPrice()}</p>
                    </div>
                    <div className="shopingCart-Quenty-main-div">

                        <input placeholder='Qty' className='shopingCart-qty' type="number" onChange={SeletQuty} />
                    </div>
                </div>

                <div className="CartTotal-main-div">
                    <h4 className="cartTotal-heding">
                        Cart Total
                    </h4>
                    <div className="ToTalPric-shopingCart">
                        <h4>Total</h4>
                        <h4>$ {TotalPrice()}</h4>
                    </div>
                    <div className="CartTotal-button-1">
                        <button>Proceced To ChekOut</button>
                    </div>
                    

                    <div className="CartTotal-button-1">
                        <button id='withBtn'><span className="with">  ChekOut With</span> <span className="paypal">𝓟𝓪𝔂𝓟𝓪𝓵</span></button>
                    </div>
                </div>

                {/* <div className="shopingCart-cloth-btn">
                    <button>Continue Shoping</button>
                </div> */}
            </div>
            <TopBrand></TopBrand>
        </div>
    )
}
