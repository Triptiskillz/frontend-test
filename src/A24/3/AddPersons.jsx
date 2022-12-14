import React, { useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts({ productInfo, onSubmit }) {
    const [prodInfo, setproductInfo] = useState(productInfo);
    const [errors, setErrors] = useState({})
    let his = useNavigate();


    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...prodInfo }
        input.name === 'newarrival' || input.name === 'bestseller'
            ? (s1[input.name] = input.value)
            : (s1[input.name] = input.value)
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        his('/books')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

            postData('/booksapp/book', prodInfo)

       

    }



    let person = {
        name: "",
        author: "",
        year: "",
        genre: "",
        newarrival: "",
        bestseller: "",
        publisher: "",
        price: "",
        blurb: "",
        description: "",
        avgrating: "",
        review: "",
        language: ""
    }
    let languages = ['English', 'French', 'Latin', 'Other']
    let genres = ['Fiction', 'Children', 'Mystery', 'Management']
    let bestsellers = ['Yes', 'No']
    let newarrivals = ['Yes', 'No']
    let { name,
        author,
        year,
        genre,
        newarrival,
        bestseller,
        publisher,
        price,
        blurb,
        description,
        avgrating,
        review,
        language } = prodInfo
    return (
        <div className="container text-center mt-4">
            <h2 className='text-center'>Create a new book</h2>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Name</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="name"
                            name='name'
                            value={name}
                            onChange={handleChange}
                        />
                        {errors.name ? (<span className='text-danger'>{errors.name}</span>) : ("")}
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Author</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="author"
                            name='author'
                            value={author}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Description</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="description"
                            name='description'
                            value={description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Blurb</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="blurb"
                            name='blurb'
                            value={blurb}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Review</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="review"
                            name='review'
                            value={review}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Price</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="price"
                            name='price'
                            value={price}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Year</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="year"
                            name='year'
                            value={year}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Publisher</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="publisher"
                            name='publisher'
                            value={publisher}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Rating</label>
                    </div>
                    <div className='col-8'>
                        <input
                            type="text"
                            className='form-control'
                            id="avgrating"
                            name='avgrating'
                            value={avgrating}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Genre</label>
                    </div>
                    <div className='col-8'>
                        <select
                            className='form-control'
                            name='genre'
                            value={genre}
                            onChange={handleChange}
                        >
                            <option value=''>Select Genres</option>
                            {genres.map((pr) => (
                                <option value={pr}>{pr}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>Language</label>
                    </div>
                    <div className='col-8'>
                        <select
                            className='form-control'
                            name='language'
                            value={language}
                            onChange={handleChange}
                        >
                            <option value=''>Select Language</option>
                            {languages.map((pr) => (
                                <option value={pr}>{pr}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>BestSeller</label>
                    </div>
                    <div className='col-8'>
                        {bestsellers.map((opt) => (
                            <div className='form-check' >
                                <input key={opt}
                                    className='form-check-input'
                                    name="bestseller"
                                    type="radio"
                                    value={opt}
                                    onChange={handleChange}
                                />
                                <lable className='form-check-label'>{opt}</lable>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='form-group mt-2'>
                <div className='row'>
                    <div className='col-2'>
                        <label>NewArrival</label>
                    </div>
                    <div className='col-8'>
                        {newarrivals.map((opt) => (
                            <div className='form-check' key={opt}>
                                <input
                                    className='form-check-input'
                                    name="newarrival"
                                    type="radio"
                                    value={opt}
                                    onChange={handleChange}
                                />
                                <lable className='form-check-label'>{opt}</lable>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}
                >
                Create Book</button>
        </div>
    )
}

export default AddProducts