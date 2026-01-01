import React from "react";
import { useState } from "react";
import '../Style/Product.css'
const Product = ({addToCart }) => {
    // const alert = () =>{
    //     alert("Added to cart");
    // }
    const [product] = useState([
        {
            url: "./photos/milkcake.webp",
            name: 'Milk Cake',
            price: 350
        },
        {
            url: "./photos/gulabjamun.webp",
            name: 'Gulab Jamun',
            price: 250
        },
        {
            url: "./photos/rasgulla.webp",
            name: 'Rasgulla',
            price: 300
        },
        {
            url: "./photos/jalebi.webp",
            name: 'Jalebi',
            price: 280
        },
        {
            url: "./photos/soan.jpg",
            name: 'Soan Papdi',
            price: 255
        },
        {
            url: "./photos/rasmalai.jpg",
            name: 'Rasmalai',
            price: 320
        },
        {
            url: "./photos/anjeerpistaroll.webp",
            name: 'Anjeer Pista Roll',
            price: 360
        },
        {
            url: "./photos/suterfeni.webp",
            name: 'Suterfeni',
            price: 200
        },
        {
            url: "./photos/laddu.webp",
            name: 'Laddu',
            price: 200
        },
        {
            url: "./photos/kajukatli.webp",
            name: 'Kaju Katli',
            price: 275
        },
        {
            url: "./photos/biscoff_baklava.webp",
            name: 'Biscoff Baklava',
            price: 520
        },
        {
            url: "./photos/coconut_modak.webp",
            name: 'Coconut Modak',
            price: 325
        },
        {
            url: "./photos/kesar_peda.webp",
            name: 'Kesar Peda',
            price: 180
        },
        {
            url: "./photos/almond_kunafa.webp",
            name: 'Almond Kunafa',
            price: 275
        },
        {
            url: "./photos/pista-roll.jpg",
            name: 'Pista Roll',
            price: 360
        }, 
    ])
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="product-gallery">
                <h1>Sweet Products</h1>
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

export default Product;