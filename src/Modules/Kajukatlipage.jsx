import React from "react";
import { useState } from "react";
import '../Style/Product.css'
const Kajukatlipage = ({addToCart }) => {
    // const alert = () =>{
    //     alert("Added to cart");
    // }
    const [product] = useState([
        {
            url: "./photos/kajukatli2.jpg",
            name: 'Kaju Katli',
            price: 350
        },
        {
            url: "./photos/kesar-kajukatli.jpg",
            name: 'Kesar Kaju Katli',
            price: 380
        },
        {
            url: "./photos/strawberry-katli.jpg",
            name: 'Strawberry Katli',
            price: 290
        },
        {
            url: "./photos/mango-kaju-katli.webp",
            name: 'Mango Kajukatli',
            price: 320
        },
        {
            url: "./photos/badam-katli.jpg",
            name: 'Badam Katli',
            price: 335
        },
    ])
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="product-gallery">
                <h1>Kaju Katli</h1>
                <div className="products">
                    {
                        product.map((productItem, productIndex) => {
                            return (
                                <div>
                                    <div className="product-card">
                                        <img src={productItem.url} alt="product" style={{height:"190px"}}/>
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

export default Kajukatlipage;