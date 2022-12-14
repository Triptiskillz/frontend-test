import React, { Component,useState } from "react";
import { Link, useParams, useNavigate  } from 'react-router-dom';
function AddStore({ productInfo, onSubmit }) {
    const [prodInfo, setproductInfo] = useState(productInfo);
    let his = useNavigate();
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...prodInfo}
        input.name === 'inStock'
            ? (s1[input.name] = input.checked)
            : (s1[input.name] = input.value)
            setproductInfo(s1)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(prodInfo)
        his('/stores/1')
    }
 
    let { id, location, email, mobile} = prodInfo
    return (
        <div className="container">
            <div className='form-group'>
                <label>Product Id</label>
                <input
                    type="text"
                    className='form-control'
                    id="id"
                    name='id'
                    value={id}
                    placeholder="Enter the Product Id"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Location</label>
                <input
                    type="text"
                    className='form-control'
                    id="location"
                    name='location'
                    value={location}
                    placeholder="Enter the location"
                    onChange={handleChange}
                />
            </div>   <div className='form-group'>
                <label>Email</label>
                <input
                    type="text"
                    className='form-control'
                    id="email"
                    name='email'
                    value={email}
                    placeholder="Enter the email"
                    onChange={handleChange}
                />
            </div>   <div className='form-group'>
                <label>Mobile Number</label>
                <input
                    type="text"
                    className='form-control'
                    id="mobile"
                    name='mobile'
                    value={mobile}
                    placeholder="Enter the mobile number"
                    onChange={handleChange}
                />
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>
                
                Submit</button>
        </div>
    )
}
export default AddStore