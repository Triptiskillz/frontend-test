import React, { Component } from "react";
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import LeftPanelOptions from "./LeftPanelOptions";
import LeftPanelOptionCB from "./LeftPanelOptionCB";
import LeftPanelOptionRD from './LeftPanelOptionRD'
function Oppo({ mobiles, display }) {
    let MobleArry = []
    let n = mobiles.map((e) => {
        if (e.brand == "Oppo") {
            MobleArry.push(e)
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
            let { RAM, ROM ,price} = queryParams;
            arr = filterParam(arr, "RAM", RAM)
            arr = filterParam(arr, "ROM", ROM)
            arr = filterParam1(arr, "price", price)
            return arr
    
        }
    
        const filterParam = (arr, name, value) => {
            if (!value) return arr;
            let valuesArr = value.split(",");
            let arr1 = arr.filter((a1) => valuesArr.find((val) =>
                val === a1[name]
             ));
            return arr1;
    
        }
        const filterParam1 = (arr, name, value) => {
            if (!value) return arr;
            let valuesArr = value.split(",");
            let arr1 = arr.filter((a1) => valuesArr.find((val) =>{
                if(val=='Below' && a1.price<10000){
                    console.log(val=='Below' && a1.price<10000)
                    console.log(val,a1.price)
                    return a1;
                }else if(val=='More' && a1.price>10000){
                    console.log(val,a1.price)
                    return a1;
                }
            }
             ));
            //  console.log(arr1)
            return arr1;
    
        }
        const addToQueryString = (str, paraName, paraValue) =>
            paraValue
                ? str
                    ? `${str}&${paraName}=${paraValue}`
                    : `${paraName}=${paraValue}`
                : str;
    
        const handleOptionChange = (options) => {
            calURL("/mobiles/Oppo", options);
        }
        const calURL = (url, options) => {
            let searchString = makeSearchString(options);
            history({
                pathname: url,
                search: searchString,
            })
        }
    
        const makeSearchString = (options) => {
            let { RAM, ROM,price } = options;
            let arr = "";
            arr = addToQueryString(arr, "RAM", RAM)
            arr = addToQueryString(arr, "ROM", ROM)
            arr = addToQueryString(arr, "price", price)
            return arr
        }
        const makeAllOption = (arr) => {
            let json = {};
            json.RAM = getDifferntValues(arr, "RAM")
            json.ROM = getDifferntValues(arr, "ROM")
            return json;
        }
    
        const getDifferntValues = (arr, name) =>
            arr.reduce((acc, curr) => acc.find((val) => val === curr[name]) ? acc : [...acc, curr[name]],
                [])
    
        let allOptions = makeAllOption(mobiles);
    
        let emps1 = filterParams(MobleArry, queryParams)
    
        let searchString = makeSearchString(queryParams)
    
        let startIndex = (pagenum - 1) * size;
    
        let endIndex = emps1.length > startIndex + size - 1
            ? startIndex + size - 1
            : emps1.length - 1;
    
        // let emps2 = emps1.length > 1 ? emps1.filter((lt, index) => index >= startIndex && index <= endIndex)
        //     : emps1
    
        return (
    
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {/* <LeftPanelOptions options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} /> */}
    
                        <LeftPanelOptionCB options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} />
                        <LeftPanelOptionRD options={queryParams}  OnOptionChange={handleOptionChange} />
    
                    </div>
                    <div className="col-9">
                        {emps1.map((e) => (
                            <>
                                <div className="row ">
                                    <div className="col-3 border ">
                                        {e.name}
                                    </div>
                                    <div className="col-2 border">
                                        {e.brand}
                                    </div>
                                    <div className="col-2 border ">
                                        {e.RAM}
                                    </div>
                                    <div className="col-3 border">
                                        {e.ROM}
                                    </div>
                                    <div className="col-2 border ">
                                        {e.price}
                                    </div>
                                </div>
    
                            </>
    
                        ))}
                    </div>
                </div>
            </div>
        )
        // }
    }
export default Oppo