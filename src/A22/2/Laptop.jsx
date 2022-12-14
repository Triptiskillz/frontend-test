import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Laptop( { laptops } ){
        const {model} = useParams()
        let laptop =laptops.find((l)=> l.model == model)
        return (
            <div className="container">
               <h4>Model : {laptop.model}</h4>
               <img src={laptop.image}/>
               <h6>Brand : {laptop.brand}</h6>
               <h6>RAM : {laptop.ram}</h6>
               <h6>Processor : {laptop.processor}</h6>
               <h6>Hard Disk : {laptop.hardDisk}</h6>
               <h6>Rating : {laptop.rating}</h6>

            </div>
        )

}
export default Laptop