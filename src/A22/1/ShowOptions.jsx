import React, { Component } from "react";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string"

function ShowOptions({ option, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...option }
        options[input.name] = input.value;
        OnOptionChange(options)
    }
    let { minPrice = '', maxPrice = '', inStock = '' } = option
    let prices = [0, 25, 50, 75, 100];
    let stocks = [
        { display: "In Stock", value: 'yes' },
        { display: "Out of Stock", value: 'no' }
    ]
    return (
        <div className="row">
            <div className="col-4">
                <div className='form-group'>
                    <select
                        type="text"
                        className='form-control'
                        id="minPrice"
                        name='minPrice'
                        value={minPrice}
                        onChange={handleChange}
                    >
                        <option value=''>Select Min Price</option>
                        {prices.map((pr,index) => (
                            <option key={index}>{pr}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className='form-group'>
                    <select
                        type="text"
                        className='form-control'
                        id="maxPrice"
                        name='maxPrice'
                        value={maxPrice}
                        onChange={handleChange}
                    >
                        <option value=''>Select Max Price</option>
                        {prices.map((pr,index) => (
                            <option key={index}>{pr}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className='form-group'>
                    <select
                        type="text"
                        className='form-control'
                        id="inStock"
                        name='inStock'
                        value={inStock}
                        onChange={handleChange}
                    >
                        <option value=''>Select Stock</option>
                        {stocks.map((pr,index) => (
                            <option value={pr.value} key={index}>{pr.display}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ShowOptions