import React from "react";
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import queryString from "query-string";
import LeftPanelOptions from "./LeftPanelOptions";
import LeftPanelOptionCB from "./LeftPanelOptionCB";
function Laptops({ laptops }) {
    let history = useNavigate();
    const location = useLocation();
    let { page } = useParams()
    const queryParams = queryString.parse(location.search);
    let size = 3;
    let pagenum = +page;
    const filterParams = (arr, queryParams) => {
        let { brand, ram, processor, hardDisk, rating } = queryParams;
        arr = filterParam(arr, "brand", brand)
        arr = filterParam(arr, "ram", ram)
        arr = filterParam(arr, "processor", processor)
        arr = filterParam(arr, "hardDisk", hardDisk)
        arr = filterParam(arr, "rating", rating)
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

 const handleOptionChange =(options)=>{
    calURL("/all/1",options);
 }
 const calURL=(url,options)=>{
    let searchString =makeSearchString(options);
    history({
        pathname: url,
        search: searchString,
    })
 }

    const makeSearchString = (options) => {
        let { brand, ram, processor, hardDisk, rating } = options;
        let arr = "";
        arr = addToQueryString(arr, "brand", brand)
        arr = addToQueryString(arr, "ram", ram)
        arr = addToQueryString(arr, "processor", processor)
        arr = addToQueryString(arr, "hardDisk", hardDisk)
        arr = addToQueryString(arr, "rating", rating)
        return arr
    }
    const makeAllOption = (arr) => {
        let json = {};
        json.brand = getDifferntValues(arr, "brand")
        json.ram = getDifferntValues(arr, "ram")
        json.processor = getDifferntValues(arr, "processor")
        json.hardDisk = getDifferntValues(arr, "hardDisk")
        json.rating = getDifferntValues(arr, "rating")
        return json;
    }

    const getDifferntValues = (arr, name) =>
        arr.reduce((acc, curr) => acc.find((val) => val === curr[name]) ? acc : [...acc, curr[name]],
            [])

    let allOptions = makeAllOption(laptops);

    let laptops1 = filterParams(laptops, queryParams)

    let searchString = makeSearchString(queryParams)

    let startIndex = (pagenum - 1) * size;
    let endIndex = laptops1.length > startIndex + size - 1
        ? startIndex + size - 1
        : laptops1.length - 1;
    let laptops2 = laptops1.length > 3 ? laptops1.filter((lt, index) => index >= startIndex && index <= endIndex)
        : laptops1
    // let filterText = !category ? "None" : `${category}=${value}`;


    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    {/* <LeftPanelOptions options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} /> */}
                    
                    <LeftPanelOptionCB options={queryParams} allOptions={allOptions} OnOptionChange={handleOptionChange} />

                </div>
                <div className="col-9">
                    <h6>Showing {startIndex + 1} to {endIndex + 1} of {laptops1.length}</h6>
                    <h6>Filter: { }</h6>
                    <div className="row">
                        {laptops2.map((l) => (
                            <div className="col-4 border bg-light " key={l.model}>
                                Model: <Link to={`/laptop/${l.model}`}>{l.model}</Link>
                                <br />
                                Brand: <Link to={`/all/1?brand=${l.brand}`}>{l.brand}</Link>
                                <br />
                                RAM: <Link to={`/all/1?ram=${l.ram}`}>{l.ram}</Link>
                                <br />
                                Processor: <Link to={`/all/1?processor=${l.processor}`}>{l.processor}</Link>
                                <br />
                                Hard Disk: <Link to={`/all/1?hardDisk=${l.hardDisk}`}>{l.hardDisk}</Link>
                                <br />
                                Raing: <Link to={`/all/1?rating=${l.rating}`}>{l.rating}</Link>
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-2">{startIndex > 0 ? <Link to={`/all/${pagenum - 1}?${searchString}`}>Prev</Link> : ""}</div>
                        <div className="col-8"></div>
                        <div className="col-2">{endIndex < laptops1.length - 1 ? <Link to={`/all/${pagenum + 1}?${searchString}`}>Next</Link> : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Laptops