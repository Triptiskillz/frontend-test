import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Offices( { offices,display } ){
    // render() {
        const {value} = useParams()
        let prod =
        display
        ?offices.filter((pr)=>pr[display]===value)
        : offices;
        return (
            <div className="container">
                <h4>List of Offices</h4>
                {prod.map((pr,index) => (
                    <div className="row" key={index}>
                        <div className="col-3 border bg-light">
                            <Link to={`/office/${pr.city}`}>{pr.city}</Link></div>
                        <div className="col-9 border bg-light">{pr.address}</div>
                    </div>
                ))}
            </div>
        )
    // }
}
export default Offices