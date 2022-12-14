import React, { useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts({ productInfo, onSubmit }) {
    const [prodInfo, setproductInfo] = useState(productInfo);

    let his = useNavigate();


    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...prodInfo }
        input.name === 'inStock'
            ? (s1[input.name] = input.checked)
            : (s1[input.name] = input.value)
            console.log(s1)
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        console.log(response)
        his('/persons')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/personApp/persons', prodInfo)
    }
    let person = { name: "", age: "", city: "", company: "" }
    let cities = ["London", "Paris", "New Delhi", "Bangalore"]
    let companies = ["Apple", "Google", "Facebook", "Microsoft", "Tasle"]

    let { age, name, city, company } = prodInfo
    return (
        <div className="container">
            <div className='form-group'>
                <label>Product Id</label>
                <input
                    type="text"
                    className='form-control'
                    id="name"
                    name='name'
                    value={name}
                    placeholder="Enter Name"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Age</label>
                <input
                    type="text"
                    className='form-control'
                    id="age"
                    name='age'
                    value={age}
                    placeholder="Enter age"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mt-2'>
                <select
                    className='form-control'
                    name='city'
                    value={city}
                    onChange={handleChange}
                >
                    <option value=''>Select city</option>
                    {cities.map((pr) => (
                        <option value={pr}>{pr}</option>
                    ))}
                </select>
            </div>
            <div className='form-group mt-2'>
                <select
                    className='form-control'
                    name='company'
                    value={company}
                    onChange={handleChange}
                >
                    <option value=''>Select company</option>
                    {companies.map((pr) => (
                        <option value={pr}>{pr}</option>
                    ))}
                </select>
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>

                Submit</button>
        </div>
    )
}

export default AddProducts