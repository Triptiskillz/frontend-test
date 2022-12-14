import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Product({product}) {
    // render() {
         let { id } = useParams()
        let prod = product.find((pr) => pr.id === id);
        return (
            <div className="container">
                Product Id: {prod.id}
                <br />
                Brand : 
                <Link to ={`/brand/${prod.brand}`}> {prod.brand}</Link>
                <br />
                Category: 
                <Link to ={`/category/${prod.category}`}> {prod.category}</Link>
                <br />
                Name: {prod.product}
                <br />
            </div>
        )
    // }
}
export default Product