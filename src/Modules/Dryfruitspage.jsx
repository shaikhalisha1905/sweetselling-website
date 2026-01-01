import React from "react";
import { useState } from "react";
import '../Style/Product.css'
const Dryfruitspage = ({addToCart }) => {
    // const alert = () =>{
    //     alert("Added to cart");
    // }
    const [product] = useState([
        {
            url: "./photos/badam-kesar-roll.webp",
            name: 'Badam Kesar Roll',
            price: 285
        },
        {
            url: "./photos/pista-roll.jpg",
            name: 'Pista Roll',
            price: 230
        },
        {
            url: "./photos/anjeerpistaroll.webp",
            name: 'Anjeer Pista Roll',
            price: 245
        },
        {
            url: "./photos/dryfruit_kunafa.webp",
            name: 'Dryfruit Kunafa',
            price: 520
        },
        {
            url: "./photos/kaju-pista-roll.webp",
            name: 'Kaju Pista Roll',
            price: 310
        },
    ])
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="product-gallery">
                <h1>Dry Fruits Sweets</h1>
                <div className="products">
                    {
                        product.map((productItem, productIndex) => {
                            return (
                                <div>
                                    <div className="product-card">
                                        <img src={productItem.url} alt="product"/>
                                         <h2 style={{ fontSize: "25px" }}>{productItem.name}</h2>
                                        <p> Price : 
                                            &#8377;{productItem.price}
                                        </p>
                                        <div ><button className="addcart" onClick={() =>addToCart(productItem)}> Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dryfruitspage;