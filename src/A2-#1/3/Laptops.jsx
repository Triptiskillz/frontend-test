import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Laptops({ laptops }) {
    let { category, value, page } = useParams()
    let size = 3;
    let pagenum = +page;
    console.log(page)
    let laptops1 = !category
        ? laptops
        : laptops.filter((pr) => pr[category] === value);


    let startIndex = (pagenum - 1) * size;
    let endIndex = laptops1.length > startIndex + size - 1
        ? startIndex + size - 1
        : laptops1.length - 1;

    let laptops2 = laptops1.length > 3 ? laptops1.filter((lt, index) => index >= startIndex && index <= endIndex)
        : laptops1
    let filterText = !category ? "None" : `${category}=${value}`;


    return (
        <div className="container">
            <h6>Showing {startIndex + 1} to {endIndex + 1} of {laptops1.length}</h6>
            <h6>Filter: {filterText}</h6>
            <div className="row">
                {laptops2.map((l) => (
                    <div className="col-4 border bg-light ">
                        Model: <Link to={`/laptop/${l.model}`}>{l.model}</Link>
                        <br />
                        Brand: <Link to={`/brand/${l.brand}/1`}>{l.brand}</Link>
                        <br />
                        RAM: <Link to={`/ram/${l.ram}/1`}>{l.ram}</Link>
                        <br />
                        Processor: <Link to={`/processor/${l.processor}/1`}>{l.processor}</Link>
                        <br />
                        Hard Disk: <Link to={`/hardDisk/${l.hardDisk}/1`}>{l.hardDisk}</Link>
                        <br />
                        Raing: <Link to={`/rating/${l.rating}/1`}>{l.rating}</Link>
                        <br />
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-2">{startIndex > 0 ? <Link to={`/all/${pagenum - 1}`}>Prev</Link> : ""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < laptops1.length - 1 ? <Link to={`/all/${pagenum + 1}`}>Next</Link> : ""}</div>
            </div>
        </div>
    )

}
export default Laptops