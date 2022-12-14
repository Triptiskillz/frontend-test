import React, { Component } from "react";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string"
import ShowOptions from "./ShowOptions";
function Products({ product, display }) {
    let history = useNavigate();
    const location = useLocation();
    const handleClick = (br) => {
        history(`/brand/${br}`)
    }

    const handleOptionChange = (options) => {
        callURL('/products', options);
    }
    const callURL = (url, options) => {
        let searchStr = makeSearchString(options);
        history({
            pathname: url,
            search: searchStr,
        })
    }
    const makeSearchString = (options) => {
        let { minPrice, maxPrice, inStock } = options
        let searchStr ='';
         searchStr = addToQueryString(searchStr, "minPrice", minPrice);
         searchStr = addToQueryString(searchStr, "maxPrice", maxPrice);
         searchStr = addToQueryString(searchStr, "inStock", inStock);
         return searchStr;
    }
    const addToQueryString =(str,paraName,paraValue)=>
    paraValue ? str?`${str}&${paraName}=${paraValue}`
    :`${paraName}=${paraValue}`
    :str;

    const queryParams = queryString.parse(location.search);
    console.log("Query", queryParams)
    const { value } = useParams()
    let prod =
        display
            ? product.filter((pr) => pr[display] === value)
            : product;
    let brands = product.reduce(
        (acc, curr) =>
            acc.find((a1) => a1 === curr.brand) ? acc : [...acc, curr.brand],
        []
    );
    let { minPrice, maxPrice, inStock } = queryParams;
    prod = minPrice ? prod.filter((p) => p.price >= +minPrice)
        : prod;
    prod = maxPrice ? prod.filter((p) => p.price <= +maxPrice)
        : prod;
    prod = inStock ? prod.filter((pr) =>
        inStock === "yes" ? pr.inStock
            : inStock === 'no'
                ? !pr.inStock
                : false
    )
        : prod;

    return (
        <div className="container">
            <h4>Welcome to the Products page</h4>

            <h6>
                <ShowOptions option={queryParams} OnOptionChange={handleOptionChange} />
            </h6>
            {/* <h6>{brands.map((br) => (<button className="btn btn-primary btn-sm m-2"
                onClick={() => { handleClick(br) }}
            >{br}</button>))}</h6> */}
            {prod.map((pr,index) => (
                <div className="row" key={index}>
                    <div className="col-2 border">
                        <Link to={`/product/${pr.id}`}>{pr.id}</Link></div>
                    <div className="col-2 border">
                        <Link to={`/brand/${pr.brand}`}> {pr.brand}</Link>
                    </div>
                    <div className="col-2 border">
                        <Link to={`/category/${pr.category}`}> {pr.category}</Link>
                    </div>
                    <div className="col-2 border">{pr.Product}</div>
                    <div className="col-2 border">{pr.price}</div>
                    <div className="col-2 border">{pr.inStock == true ? "true" : "false"}</div>
                </div>
            ))}
        </div>
    )
    // }
}
export default Products