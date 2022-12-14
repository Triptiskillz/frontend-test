import React, { Component,useState } from "react";
import { Link, useParams, useNavigate  } from 'react-router-dom';
function AddProduct({ productInfo, onSubmit }) {
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
        his('/products')
    }
 
    let { id, brand, category, Product, price, inStock } = prodInfo
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
                <label>Brand</label>
                <input
                    type="text"
                    className='form-control'
                    id="brand"
                    name='brand'
                    value={brand}
                    placeholder="Enter the brand"
                    onChange={handleChange}
                />
            </div>   <div className='form-group'>
                <label>Category</label>
                <input
                    type="text"
                    className='form-control'
                    id="category"
                    name='category'
                    value={category}
                    placeholder="Enter the category"
                    onChange={handleChange}
                />
            </div>   <div className='form-group'>
                <label>Product Name</label>
                <input
                    type="text"
                    className='form-control'
                    id="Product"
                    name='Product'
                    value={Product}
                    placeholder="Enter the product name"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input
                    type="text"
                    className='form-control'
                    id="price"
                    name='price'
                    value={price}
                    placeholder=" Enter the price"
                    onChange={handleChange}
                />
            </div>
            <div className='form-check '>
                <input
                    className='form-check-input'
                    type="checkbox"
                    name="inStock"
                    value={inStock}
                    checked={inStock}
                    onChange={handleChange}
                />
                <label className='form-check-label'>In Stock</label>
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>
                
                Submit</button>
        </div>
    )
}
export default AddProduct