import React, { Component } from "react";
import Products from './Products'
import Product from './Product'
import Home from './Home'
import Navbar from './Navbar'
import Stores from './Stores'
import Store from './Store'
import { Routes, Route } from "react-router-dom";
import Contact from './Contact'
class Parent extends Component {
    state = {
        products: [{
            id: "A101",
            brand: "Pepsi",
            category: "Chocolates",
            Product: "Pepsi 300ml",
        },
        {
            id: "A102",
            brand: "Coca cola",
            category: "Beverges",
            Product: "Diet Coke 300ml",
        },
        {
            id: "A103",
            brand: "Pepsi",
            category: "Chocolates",
            Product: "Pepsi 300ml",
        },
        {
            id: "A104",
            brand: "Coca cola",
            category: "Beverges",
            Product: "Diet Coke 300ml",
        },
        {
            id: "A105",
            brand: "Pepsi",
            category: "Beverges",
            Product: "Pepsi 300ml",
        },
        {
            id: "A106",
            brand: "Coca cola",
            category: "Chocolates",
            Product: "Diet Coke 300ml",
        }
        ],
        contact: {
            email: "mail@myportal.com",
            address: "402, 4th Floor, Tower D1"
        },
        store: [
            { id: 101, location: "Delhi", email: "store101@email.com", mobile: "2734672371" }, { id: 102, location: "Mumbai", email: "store102@email.com", mobile: "4645757441" }, { id: 103, location: "Delhi", email: "store103@email.com", mobile: "983452887" }, { id: 104, location: "Bengaluru", email: "store104@email.com", mobile: "782234663" }, { id: 108, location: "Delhi", email: "store108@email.com", mobile: "850003461" }, { id: 114, location: "Bengaluru", email: "store114@email.com", mobile: "900346731" }, { id: 125, location: "Delhi", email: "store125@email.com", mobile: "95134274005" }, { id: 129, location: "Mumbai", email: "store129@email.com", mobile: "9823574623" }, { id: 141, location: "Mumbai", email: "store141@email.com", mobile: "89239472385" }, { id: 156, location: "Bengaluru", email: "store157@email.com", mobile: "965746731" }, { id: 21, location: "Delhi", email: "store021@email.com", mobile: "959530041" }, { id: 277, location: "Mumbai", email: "store277@email.com", mobile: "8900673411" }, { id: 89, location: "Bengaluru", email: "store89@email.com", mobile: "782234663" }, { id: 120, location: "Delhi", email: "store120@email.com", mobile: "850003461" }, { id: 255, location: "Bengaluru", email: "store255@email.com", mobile: "900346731" }, { id: 17, location: "Delhi", email: "store17@email.com", mobile: "95134274005" }, { id: 27, location: "Mumbai", email: "store27@email.com", mobile: "9823574623" },]
    };

    render() {
        const { products, contact,store } = this.state

        return (
            <div className="container">
                <Navbar />
                {/* <Router> */}
                <Routes>
                    <Route path="/product/:id" element={<Product product={products} />} />
                    <Route path="/brand/:value" element={<Products product={products} display="brand" />} />
                    <Route path="/category/:value" element={<Products product={products} display="category" />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact contact={contact} />} />
                    <Route path="/products" element={<Products product={products} />} />
                    <Route path="/stores/:page" element={<Stores store={store} />} />
                    <Route path="/:category/:value/:page" element={<Stores store={store} display="location" />} />

                    <Route path="/store/:id" element={<Store store={store} />} />
                    {/* <Route path="/location/:value" element={<Stores store={store} />} /> */}
                    {/* <Route path="/stores/1" element={<Stores store={store}/>} /> */}
                
                </Routes>
                {/* </Router> */}
            </div>
        )
    }
}
export default Parent

