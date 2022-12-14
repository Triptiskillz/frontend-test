
import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts(props) {
    const [prodInfo, setproductInfo] = useState([
        {
            person: { Carid: "", price: "", year: "", kms: "", model: "", color: "" },
            edit: false
        }
    ]);

    let { id } = useParams()
    let his = useNavigate();

    useEffect(() => {
        const ComponentDidMount = async () => {
            fetchData();
        }
        ComponentDidMount()
    }, [])


    const fetchData = async () => {
        if (id) {
            let resp = await http.get(`/cars/${id}`);
            let { data } = resp;
            setproductInfo({ person: data, edit: true })
        } else {
            let person = { price: "", year: "", kms: "", model: "", color: "" }
            setproductInfo({ person: person, edit: false })
        }

    }
    // useMemo(() => {
    //     if (prodInfo !== props) { fetchData() };
    // }, [prodInfo]);


    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...prodInfo }

        s1.person[input.name] = input.value;
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        let { data } = response
        console.log(data)
        his('/car')
    }

    let putData = async (url, obj) => {
        let response = await http.put(url, obj)
        let { data } = response
        console.log(data)
        his('/car')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { person, edit } = prodInfo
        edit ? putData(`/cars/${person.Carid}`, person)
            : postData('/cars', person)
    }

    let { person = {}, edit } = prodInfo
    console.log(edit)
    let { Carid, price, year, kms, model, color } = person
    // console.log(prodInfo)
    let ModelList = ["Swift Dzire VXi", "Etios SMi", "City AXi", "Swift DXi", "Etios VXi", "City ZXi"]
    let ColorList = ["White", "Silver Gray", "Metallic Blue", "Red"]
    return (
        <div className="container">
            <div className='form-group'>
                <label>Car Id</label>
                {edit == true ? (<> <input
                    type="text"
                    className='form-control'
                    name='Carid'
                    value={Carid}
                    placeholder="Enter id"
                    onChange={handleChange}
                    readOnly={true}

                /> </>) : (<> <input
                    type="text"
                    className='form-control'
                    name='Carid'
                    value={Carid}
                    placeholder="Enter id"
                    onChange={handleChange}
                    readOnly={false}

                /> </>)}

            </div>
            <div className='form-group'>
                <label>Price</label>
                <input
                    type="text"
                    className='form-control'
                    name='price'
                    value={price}
                    placeholder="Enter price"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Mileage in Kms</label>
                <input
                    type="text"
                    className='form-control'
                    name='kms'
                    value={kms}
                    placeholder="Enter Mileage"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Year of Manufacture</label>
                <input
                    type="text"
                    className='form-control'
                    name='year'
                    value={year}
                    placeholder="Enter Mileage"
                    onChange={handleChange}
                />
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Model</label>
                        <select className='form-control'
                            name='model'
                            value={model}
                            onChange={handleChange} >
                            <option disabled value="" >Select the Model</option>
                            {ModelList.map((c1) => (
                                <option value={c1}>
                                    {c1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Color</label>
                        <select className='form-control'
                            name='color'
                            value={color}
                            onChange={handleChange} >
                            <option disabled value="" >Select the Color</option>
                            {ColorList.map((c1) => (
                                <option value={c1}>
                                    {c1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default AddProducts