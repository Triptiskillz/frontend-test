import React, { Component } from "react";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string"

function ShowOptiosSt({ option, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...option }
        options[input.name] = input.value;
        OnOptionChange(options)
    }
    let { location='' } = option
    let locat = ["Delhi", "Mumbai","Bengaluru"];
    return (
        <div className="row">
            <div className="col-4">
                <div className='form-group'>
                    <select
                        type="text"
                        className='form-control'
                        id="location"
                        name='location'
                        value={location}
                        onChange={handleChange}
                    >
                        <option value=''>Select Location</option>
                        {locat.map((pr) => (
                            <option key={pr}>{pr}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ShowOptiosSt