import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Dept({ emps }) {
    // render() {
    let { value } = useParams()
    let prod = emps.filter((pr) => pr.dept == value);
    return (
        <div className="container mt-4">
            <h4>List of Employees belonging to {value}</h4>
            {prod.map((pr) => (
                <div className="row">
                    <div className="col-4 border">
                        <Link to={`/employee/${pr.id}`}>{pr.id}</Link>
                    </div>
                    <div className="col-4 border"> {pr.name}
                    </div>
                    <div className="col-4 border">{pr.designation}</div>
                </div>
            ))}
            <div className="row mt-4">
                <h4>List of Department</h4>
                <ul>
                    <li>
                    <Link to={`/employee/dept/Technology`}> Technology </Link>

                    </li>
                    <li>
                    <Link to={`/employee/dept/Operations`}>Operations</Link>

                    </li>
                    <li>
                    <Link to={`/employee/dept/Finance`}>Finance</Link>

                    </li>
                    <li>
                    <Link to={`/employee/dept/HR`}> HR </Link>

                    </li>
                    <li>
                    <Link to={`/employee/dept/Marketing`}> Marketing </Link>

                    </li>
                </ul>
            </div>
        </div>
    )
    // }
}
export default Dept