
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ClothingAndShoes.css'
import { Link } from 'react-router-dom'
import { AdToCart } from '../../store/ClothingShoesStore/C.S.AStore'

export default function ClothingAndShoes() {

    

    let dispatch = useDispatch();

    let ClothingAndShoesWalaData = useSelector(function (store) {
        return store.clothingsAndShoes
    })


    return (
        <div>
            <div className="clothingAndShoes-Sort">
                <div className="row-and-colom">
                    <div className="row">
                    <i className='fa line fa-list'></i>
                    </div>
                    <div className="row">
                    <i className='fa line fa-th'></i>
                        
                    </div>
                </div>
                <h3 className='clothingAndShoes-Sort-heding'>Sort By</h3>
                <div className="clothingAndShoes-Sort-List">
                    <select className='clothingAndShoes-Sort-select'>
                        <option value="">Defult</option>
                        <option value="">Price:Lowest First</option>
                        <option value="">Price:Highest First</option>
                        <option value="">Name:A to Z</option>
                        <option value="">Name:Z to A</option>
                    </select>
                </div>
            </div>
            {
                ClothingAndShoesWalaData.map(function (clothAndShoes) {
                    return <div className='ClothingAndShoes-main-div'>



                        <img className='cloth-pic' src={clothAndShoes.pic} alt="" />

                        <div className="ClothingAndShoes-main-div-title">
                            <br />
                            <p className='cloth-title'>{clothAndShoes.title}</p>
                            <p className='cloth-price'>$ {clothAndShoes.price}</p>
                            <p className='cloth-desc'>MFG: DURABLE OFFICE PRODUCTSMFG. Part: DBL 472123SKU: BVCR82SYEKUPC: 616528901738Condition: New</p>

                            <br />


                            <div className="cloth-btn-main-div">
                                <Link to={'/ShopingCart/' + clothAndShoes.id}>
                                    <div onClick={function () {
                                        dispatch(AdToCart(clothAndShoes))
                                    }} className="cloth-btn-main-1">

                                        <button>Add To Cart</button>

                                    </div>
                                </Link>

                                <div className="cloth-btn-main">
                                    <i class="fa-solid cloth-icon fa-heart"></i>

                                </div>
                                <div className="cloth-btn-main">
                                    <i class="fa  cloth-icon fa-eye" aria-hidden="true"></i>

                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
