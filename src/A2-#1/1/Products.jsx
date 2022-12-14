import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Products( { product,display } ){
    // render() {
        const {value} = useParams()
        console.log(display)
        let prod =
        display
        ?product.filter((pr)=>pr[display]===value)
        : product;
        return (
            <div className="container">
                <h4>Welcome to the Products page</h4>
                {prod.map((pr) => (
                    <div className="row">
                        <div className="col-3 border">
                            <Link to={`/product/${pr.id}`}>{pr.id}</Link></div>
                        <div className="col-3 border">
                            <Link to ={`/brand/${pr.brand}`}> {pr.brand}</Link>
                           </div>
                        <div className="col-3 border">
                        <Link to ={`/category/${pr.category}`}> {pr.category}</Link>
                          </div>
                        <div className="col-3 border">{pr.Product}</div>
                    </div>
                ))}
            </div>
        )
    // }
}
export default Products