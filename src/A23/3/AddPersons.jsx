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
        his('/stars')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/sporticons/star', prodInfo)
    }
    let person = { name: "", age: "", dob: "", country: "", sport: "" }
    let countrie = ["India", "Australia", "Portugal", "Argentina", "Brazil", "France"]
    let sports = ['Cricket', 'Football']
    let { info, name, dob, country, sport } = prodInfo
    return (
        <div className="container">
            <h2 className='text-center'>New Sport Star</h2>
            <div className='form-group'>
                <label>Name</label>
                <input
                    type="text"
                    className='form-control'
                    id="name"
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Info</label>
                <input
                    type="text"
                    className='form-control'
                    id="info"
                    name='info'
                    value={info}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>DOB</label>
                <input
                    type="text"
                    className='form-control'
                    id="dob"
                    name='dob'
                    value={dob}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mt-2'>
                <select
                    className='form-control'
                    name='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value=''>Select Country</option>
                    {countrie.map((pr) => (
                        <option value={pr}>{pr}</option>
                    ))}
                </select>
            </div>
            <div className='form-group mt-2'>
                <select
                    className='form-control'
                    name='sport'
                    value={sport}
                    onChange={handleChange}
                >
                    <option value=''>Select Sport</option>
                    {sports.map((pr) => (
                        <option value={pr}>{pr}</option>
                    ))}
                </select>
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>

                Create</button>
        </div>
    )
}

export default AddProducts