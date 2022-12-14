import React, { Component } from "react";
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import LeftPanelOptions from "./LeftPanelOptions";
import LeftPanelOptionCB from "./LeftPanelOptionCB";
import LeftPanelOptionRD from './LeftPanelOptionRD'
function Android({ resume, display }) {
    let reactArry = []
    let n = resume.map((e) => {
        if (e.tech == "Android") {
            reactArry.push(e)
        }
    })
    // render() {
    let history = useNavigate();
    const location = useLocation();
    let { page } = useParams()
    const queryParams = queryString.parse(location.search);
    if (queryParams.page == undefined) {
        var pagenum = 1;

    } else {
        pagenum = +(queryParams.page)
    }

    let size = 6;

    const filterParams = (arr, queryParams) => {
        let { course, status } = queryParams;
        arr = filterParam(arr, "course", course)
        arr = filterParam(arr, "status", status)
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
        calURL("/job/android", options);
    }
    const calURL = (url, options) => {
        let searchString = makeSearchString(options);
        history({
            pathname: url,
            search: searchString,
        })
    }

    const makeSearchString = (options) => {
        let { course, status } = options;
        let arr = "";
        arr = addToQueryString(arr, "course", course)
        arr = addToQueryString(arr, "status", status)
        return arr
    }
    const makeAllOption = (arr) => {
        let json = {};
        json.course = getDifferntValues(arr, "course")
        json.status = getDifferntValues(arr, "status")
        return json;
    }

    const getDifferntValues = (arr, name) =>
        arr.reduce((acc, curr) => acc.find((val) => val === curr[name]) ? acc : [...acc, curr[name]],
            [])

    let allOptions = makeAllOption(resume);

    let emps1 = filterParams(reactArry, queryParams)
    let searchString = makeSearchString(queryParams)
    let startIndex = (pagenum - 1) * size;
    let endIndex = emps1.length > startIndex + size - 1
        ? startIndex + size - 1
        : emps1.length - 1;
    console.log(startIndex)
    let emps2 = emps1.length > 1 ? emps1.filter((lt, index) => index >= startIndex && index <= endIndex)
        : emps1
    return (

        <div className="container">
            <div className="row">
                <div className="col-3">
                    {/* <LeftPanelOptions options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} /> */}

                    <LeftPanelOptionCB options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} />
                    <LeftPanelOptionRD options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} />

                </div>
                <div className="col-9">
                    Job Details
                    <br />
                    Role: Android
                    <br />
                    Courses Done: {queryParams.course}
                    <br />
                    Current Status: {queryParams.status}
                    <br />
                    Page Number :
                    {(queryParams.page == undefined) ? "1" : queryParams.page
                    }

                    {emps2.map((e) => (
                        <>

                            <div className="row ">
                                <div className="col-3 border ">
                                    {e.name}
                                </div>
                                <div className="col-2 border">
                                    {e.course}
                                </div>
                                <div className="col-2 border ">
                                    {e.year}
                                </div>
                                <div className="col-3 border">
                                    {e.status}
                                </div>
                                <div className="col-2 border ">
                                    {e.tech}
                                </div>
                            </div>

                        </>

                    ))}



                    <div className="row">
                        <div className="col-2 ">

                            {startIndex > 0 ? <button className='btn btn-primary btn-sm mt-2 mb-2 '><Link className='text-light' to={`/job/react/?${searchString}&page=${pagenum - 1}`}>Prev</Link> </button> : ""}


                        </div>
                        <div className="col-8"></div>
                        <div className="col-2">

                            {endIndex < emps1.length ? <button className='btn btn-primary btn-sm mt-2 mb-2 '> <Link className='text-light' to={`/job/react/?${searchString}&page=${pagenum + 1}`}>Next</Link>  </button> : ""}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    // }
}
export default Android