import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Modules/Footer';
import Gallery from './Modules/Gallery';
import Header from './Modules/Header';
import Home from './Modules/Home';
import Cardslide from './Modules/Cardslide';
import About from './Modules/About';
import Contact from './Modules/Contact';
import Product from './Modules/Product';
import Cart from './Modules/Cart';
import Login from './Modules/Login';
import Catagory from './Modules/Catagory';
import Kajukatlipage from './Modules/Kajukatlipage';
import Dryfruitspage from './Modules/Dryfruitspage';
import Gheesweets from './Modules/Gheesweets';
import Othersweet from './Modules/Othersweet';
import Adminpage from './Modules/Adminpage';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductFrom';
import Admin from './Modules/Admin';

function App() {

    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
        alert("Product added");
    }

    const handleShow = (value) => {
        setShowCart(value)
    }


    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddOrUpdateProduct = async (product) => {
        try {
            if (selectedProduct) {
                // Update product
                await axios.put(`http://localhost:5000/api/products/${selectedProduct._id}`, product);
            } else {
                // Add new product
                await axios.post('http://localhost:5000/api/products', product);
            }
            setSelectedProduct(null);  // Clear the form
            fetchProducts();  // Reload product list
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);  // Pass the selected product to the form
    };

    return (
        <>
            <Router>
                <Header count={cart.length} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/Cardslide" element={<Cardslide />} />
                    <Route path='/product' element={<Product addToCart={addToCart} />} />
                    <Route path='/cart' element={<Cart cart={cart} />} />
                    <Route path='/catagory' element={<Catagory />} />
                    <Route path='/kajukatlipage' element={<Kajukatlipage addToCart={addToCart} />} />
                    <Route path='/dryfruit' element={<Dryfruitspage addToCart={addToCart} />} />
                    <Route path='/gheesweet' element={<Gheesweets addToCart={addToCart} />} />
                    <Route path='/othersweet' element={<Othersweet addToCart={addToCart} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/ProductForm' element={<ProductForm selectedProduct={selectedProduct} onSubmit={handleAddOrUpdateProduct} />} />
                    <Route path='/ProductTable' element={<ProductTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />} />
                    <Route path='/AdminPage' element={<Adminpage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;