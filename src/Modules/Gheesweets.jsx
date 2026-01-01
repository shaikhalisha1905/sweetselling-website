import React from "react";
import { useState } from "react";
import '../Style/Product.css'
const Gheesweets = ({addToCart }) => {
    // const alert = () =>{
    //     alert("Added to cart");
    // }
    const [product] = useState([
        {
            url: "./photos/tini-ghewar.webp",
            name: 'Mini Ghevar',
            price: 165
        },
        {
            url: "./photos/milkcake.webp",
            name: 'Milk Cake',
            price: 290
        },
        {
            url: "./photos/sohan-halwa.webp",
            name: 'Sohan Halwa',
            price: 130
        },
    ])
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="product-gallery">
                <h1>Ghee Sweets</h1>
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

export default Gheesweets;