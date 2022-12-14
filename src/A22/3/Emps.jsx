import React, { Component } from "react";
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import LeftPanelOptions from "./LeftPanelOptions";
import LeftPanelOptionCB from "./LeftPanelOptionCB";

function Emps({ emps, display }) {
    // render() {
    let history = useNavigate();
    const location = useLocation();
    let { page } = useParams()
    const queryParams = queryString.parse(location.search);
    let size = 3;
    let pagenum = +page;

    const filterParams = (arr, queryParams) => {
        let { dept, designation } = queryParams;
        arr = filterParam(arr, "dept", dept)
        arr = filterParam(arr, "designation", designation)
        return arr

    }

    const filterParam = (arr, name, value) => {
        if (!value) return arr;
        let valuesArr = value.split(",");
        let arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1[name]));
        return arr1;

    }

    const addToQueryString = (str, paraName, paraValue) =>
        paraValue
            ? str
                ? `${str}&${paraName}=${paraValue}`
                : `${paraName}=${paraValue}`
            : str;

    const handleOptionChange = (options) => {
        calURL("/employees/1", options);
    }
    const calURL = (url, options) => {
        let searchString = makeSearchString(options);
        history({
            pathname: url,
            search: searchString,
        })
    }

    const makeSearchString = (options) => {
        let { dept, designation } = options;
        let arr = "";
        arr = addToQueryString(arr, "dept", dept)
        arr = addToQueryString(arr, "designation", designation)
        return arr
    }
    const makeAllOption = (arr) => {
        let json = {};
        json.dept = getDifferntValues(arr, "dept")
        json.designation = getDifferntValues(arr, "designation")
        return json;
    }

    const getDifferntValues = (arr, name) =>
        arr.reduce((acc, curr) => acc.find((val) => val === curr[name]) ? acc : [...acc, curr[name]],
            [])

    let allOptions = makeAllOption(emps);

    let emps1 = filterParams(emps, queryParams)

    let searchString = makeSearchString(queryParams)

    let startIndex = (pagenum - 1) * size;
    let endIndex = emps1.length > startIndex + size - 1
        ? startIndex + size - 1
        : emps1.length - 1;
    let emps2 = emps1.length > 4 ? emps1.filter((lt, index) => index >= startIndex && index <= endIndex)
        : emps1
    return (

        <div className="container">
            <div className="row">
                <div className="col-3">
                    {/* <LeftPanelOptions options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} /> */}

                    <LeftPanelOptionCB options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} />

                </div>
                <div className="col-9">
                <h4>List of Employees</h4>
            <h6>Showing {startIndex + 1} to {endIndex + 1} of {emps1.length}</h6>

            {emps2.map((pr,index) => (
                <div className="row" key={index}>
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

            {/* <div className="row">
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
            </div> */}
            <div className="row">
                <div className="col-2">{startIndex > 0 ? <Link to={`/employees/${pagenum - 1}?${searchString}`}>Prev</Link> : ""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < emps1.length - 1 ? <Link to={`/employees/${pagenum + 1}?${searchString}`}>Next</Link> : ""}</div>
            </div>
                </div>
            </div>
        </div>
    )
    // }
}
export default Emps