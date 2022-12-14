import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Stores({ store, display }) {
    // render() {
    const { value, page } = useParams()
    let size = 4;
    let pagenum = +page;
    console.log(size,page)
    let prod =
        display
            ? store.filter((pr) => pr[display] === value)
            : store;
    let startIndex = (pagenum - 1) * size;
    let endIndex = prod.length > startIndex + size - 1
        ? startIndex + size - 1
        : prod.length - 1;
        // console.log(startIndex,endIndex)
    let prod1 = prod.length > 3 ? prod.filter((lt, index) => index >= startIndex && index <= endIndex)
        : prod
    return (
        <div className="container">
            <h4>Welcome to the Store page</h4>
            {prod1.map((pr) => (
                <div className="row">
                    <div className="col-3 border">
                        <Link to={`/store/${pr.id}`}>{pr.id}</Link></div>
                    <div className="col-3 border">
                        <Link to={`/location/${pr.location}/1`}> {pr.location}</Link>
                    </div>
                    <div className="col-3 border">
                        {pr.email}
                    </div>
                    <div className="col-3 border">{pr.mobile}</div>
                </div>
            ))}
               <div className="row">
                <div className="col-2">{startIndex > 0 ? <Link to={`/stores/${pagenum - 1}`}>Prev</Link> : ""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < prod.length - 1 ? <Link to={`/stores/${pagenum + 1}`}>Next</Link> : ""}</div>
            </div>
        </div>
    )
    // }
}
export default Stores