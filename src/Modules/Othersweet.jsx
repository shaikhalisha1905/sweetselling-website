import React from "react";
import { useState } from "react";
import '../Style/Product.css'
const Othersweet = ({addToCart }) => {
    // const alert = () =>{
    //     alert("Added to cart");
    // }
    const [product] = useState([
        {
            url: "./photos/rasmalaii.jpg",
            name: 'Rasmalai',
            price: 185
        },
        {
            url: "./photos/rasgulla.webp",
            name: 'Rasgulla',
            price: 190
        },
        {
            url: "./photos/jalebi1.jpeg",
            name: 'Jalebi',
            price: 120
        },
        {
            url: "./photos/gulab.jpg",
            name: 'Gulab Jamun',
            price: 199
        },
        {
            url: "./photos/pista-modak.webp",
            name: 'Pista Modak',
            price: 199
        },
    ])
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="product-gallery">
                <h1>Popular Sweets</h1>
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

export default Othersweet;