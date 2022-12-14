import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Emp({emps}) {
    // render() {
         let { id } = useParams()
        let prod = emps.find((pr) => pr.id == id);
        return (
            <div className="container">
                <h4>Employee Details</h4>
                Employee id: {prod.id}
                <br />
                Name: {prod.name}
                <br />
                Department: 
                <Link to ={`/employee/dept/${prod.dept}`}> {prod.dept} </Link>
                <br />
                Designation: {prod.designation}
                <br />
            </div>
        )
    // }
}
export default Emp