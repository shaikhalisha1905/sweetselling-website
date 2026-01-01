import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import empty from '../Cartimg/empty-cart-yellow.png'
import '../Style/Cart.css'

export default function Cart({ cart, cartIndex }) {

    // const [removeItem]  = useState([])
    const [cart2, setcart2] = useState([])


    useEffect(() => {
        setcart2(cart)
    }, { cart })

    const handleRemove = (id) => {
        const arr = cart2.filter((Item) => Item.id !== id);
        setcart2(arr);
        <p>Cart is empty</p>
        // handlePrice();
    }

    const calculateTotal = (cart2) => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);
    };


    // const removeItem = (product) => {
    //     setcart2(cart2 => cart2.filter(item => item.id !== product.id));
    // }

    // const removeItem = (product) => {
    //     setcart2( _cart2 => _cart2.filter(item => item.id !== product.id));
    //   };

    return (
        <>

            <div className='cartpage'>
                <h1 style={{ textAlign: "center", fontFamily: " Arial Narrow Bold", fontWeight: "bold" }}>Shopping Cart</h1>
                {
                    cart2.length === 0 ? (
                        <><div><img src={empty} style={{ marginLeft: "520px", marginTop: "50px", height: "320px" }}></img></div>
                            <div><Link to="/product"> <button style={{ border: "0px", borderRadius: "9px", marginLeft: "660px", marginTop: "50px", backgroundColor: "rgb(190, 125, 27)", height: "45px", width: "180px", fontWeight: "bold" }}><span>Start Shopping</span></button></Link>  </div>
                        </>
                    ) :
                        cart2?.map((cartItem, cartIndex) => {
                            return (
                                <div><br /><br />
                                    <div className='row card2'>
                                        <div className='col-8'>
                                            <img style={{ marginLeft: "40px", height: "250px", width: "250px" }} src={cartItem.url} width="30%" alt='item' />
                                            <span className='itemname' >{cartItem.name} </span>
                                        </div>

                                        <div className='col-4'>
                                            <button className='qtysub' onClick={() => {
                                                const _cart2 = cart2.map((item, index) => {
                                                    return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0, } : item
                                                })
                                                setcart2(_cart2)
                                            }}> - </button>

                                            <span style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "serif", marginLeft: "15px", marginRight: "15px" }}>{cartItem.quantity} </span>

                                            <button className='qtyadd' onClick={() => {
                                                const _cart2 = cart2.map((item, index) => {
                                                    return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                })
                                                setcart2(_cart2)
                                            }}> + </button>
                                            <span style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "serif", marginLeft: "120px", color: "rgb(190, 125, 27)" }}> &#8377;{cartItem.price * cartItem.quantity} </span>
                                        </div>
                                    </div>

                                    {/* <button onClick={() => removeItem(cartItem.id)}>Remove</button> */}
                                    <hr />

                                </div>
                            )
                        })

                }
                <p style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "25px", textAlign: "right", paddingRight: "150px", marginTop: "50px", color: "rgb(190, 125, 27)" }}>Total Amount: <span style={{ marginLeft: "10px" }}> &#8377;</span>
                    {
                        cart2.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

                    }
                </p>

                {/* <div style={{ paddingLeft: "10%" }}><br />
                    <button className='checkout' >CheckOut</button>
                </div> */}
            </div>

            <div>
                <input className='input1' id="check01" type="checkbox" name="menu" />
                <label id='label' for="check01" className='showbill' style={{marginLeft:"676px"}}>Show Bill</label>
                <br /><br /><br /><br />
                <div class="submenu">
                    <h1 style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bold"}}>Shopping Cart Bill</h1><br/>
                    <table border="1px">
                        <thead>
                            <tr>
                                <th style={{marginLeft:"50px"}}>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart2.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>&#8377;{item.price.toFixed(2)}</td>
                                    <td>&#8377;{(item.quantity * item.price).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr >
                                <td colSpan="3">Delivery Charge</td>
                                {
                                    cart2.length === 0 ? (
                                        <p style={{ fontSize: "30px" }}></p>
                                    ) :
                                        <td colSpan="3">
                                            Free Delivery
                                        </td>
                                }
                            </tr>
                            <tr>
                                <td colSpan="3">Total Amount</td>
                                <td>
                                    &#8377;{cart2.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4"><a href='http://localhost:3004' className='checkout'>Checkout</a></td> 
                            </tr>
                        </tfoot>
                    </table>
                    <br /><br /><br /><br />
                </div>
            </div>

            <br /><br /><br />
        </>
    )

}