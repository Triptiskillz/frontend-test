import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Emps({ emps, display }) {
    // render() {
    const { value, page } = useParams()
    let size = 4;
    let pagenum = +page;
    let prod =
        display
            ? emps.filter((pr) => pr[display] === value)
            : emps;
    let startIndex = (pagenum - 1) * size;
    let endIndex = prod.length > startIndex + size - 1
        ? startIndex + size - 1
        : prod.length - 1;
    // console.log(startIndex,endIndex)
    let prod1 = prod.length > 4 ? prod.filter((lt, index) => index >= startIndex && index <= endIndex)
        : prod
    return (
        <div className="container">
            <h4>List of Employees</h4>
            <h6>Showing {startIndex + 1} to {endIndex + 1} of {prod.length}</h6>

            {prod1.map((pr) => (
                <div className="row">
                    <div className="col-3 border">
                        <Link to={`/employee/${pr.id}`}>{pr.id}</Link>
                    </div>
                    <div className="col-3 border"> {pr.name}
                    </div>
                    <div className="col-3 border">
                        {pr.dept}
                    </div>
                    <div className="col-3 border">{pr.designation}</div>
                </div>
            ))}

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8"></div>
                <div className="col-2">
                <div class="d-flex justify-content-evenly">
                    {endIndex < prod.length - 1 ? <Link to={`/employees/1`}>1</Link> : ""}
                    {endIndex < prod.length - 1 ? <Link to={`/employees/2`}>2</Link> : ""}
                    {endIndex < prod.length - 1 ? <Link to={`/employees/3`}>3</Link> : ""}
                    {endIndex < prod.length - 1 ? <Link to={`/employees/4`}>4</Link> : ""}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">{startIndex > 0 ? <Link to={`/employees/${pagenum - 1}`}>Prev</Link> : ""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < prod.length - 1 ? <Link to={`/employees/${pagenum + 1}`}>Next</Link> : ""}</div>
            </div>
        </div>
    )
    // }
}
export default Emps