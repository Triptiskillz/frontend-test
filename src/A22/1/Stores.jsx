import React, { Component } from "react";
import { Link, useParams,useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string"
import ShowOptiosSt from "./ShowOptiosSt";

function Stores({ store, display }) {
    let history = useNavigate();
    const location1 = useLocation();
    const handleOptionChange = (options) => {
        callURL('/stores/1', options);
    }
    const callURL = (url, options) => {
        let searchStr = makeSearchString(options);
        history({
            pathname: url,
            search: searchStr,
        })
    }
    const makeSearchString = (options) => {
        let { location } = options
        let searchStr ='';
         searchStr = addToQueryString(searchStr, "location", location);
         return searchStr;
    }
    const addToQueryString =(str,paraName,paraValue)=>
    paraValue ? str?`${str}&${paraName}=${paraValue}`
    :`${paraName}=${paraValue}`
    :str;

    const queryParams = queryString.parse(location1.search);
    console.log("Query", queryParams)

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


        let { location } = queryParams;
        prod1 = location ? prod1.filter((p) => p.location == location)
            : prod1;
    let searchString = makeSearchString(queryParams)

    return (
        <div className="container">
            <h4>Welcome to the Store page</h4>
            <h6>
                <ShowOptiosSt option={queryParams} OnOptionChange={handleOptionChange} />
            </h6>
            {prod1.map((pr,index) => (
                <div className="row" key={index}>
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
                <div className="col-2">{startIndex > 0 ? <Link to={`/stores/${pagenum - 1}?${searchString}`}>Prev</Link> : ""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex < prod.length - 1 ? <Link to={`/stores/${pagenum + 1}?${searchString}`}>Next</Link> : ""}</div>
            </div>
        </div>
    )
    // }
}
export default Stores