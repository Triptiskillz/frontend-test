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
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        console.log(response)
        his('/products')
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/productApp/products',prodInfo)
    }

    let { id, name, price } = prodInfo
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
                    placeholder="Enter Product Id"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Product Name</label>
                <input
                    type="text"
                    className='form-control'
                    id="name"
                    name='name'
                    value={name}
                    placeholder="Enter Product Name"
                    onChange={handleChange}
                />
            </div>   <div className='form-group'>
                <label>Product Price</label>
                <input
                    type="text"
                    className='form-control'
                    id="price"
                    name='price'
                    value={price}
                    placeholder="Enter Product Price"
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

export default AddProducts