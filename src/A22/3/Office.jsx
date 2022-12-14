import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Office({ offices }) {
    // render() {
    let { id } = useParams()
    let prod = offices.find((pr) => pr.city == id);
 
    return (
        <div className="container">
            <h4>Welcome to the office of JX Company in {prod.city}</h4>
            Address: {prod.address}
            <br />
        </div>
    )
    // }
}
export default Office