import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts(props) {
    const [prodInfo, setproductInfo] = useState([
        {
            person: { Cusid: "", name: "", age: "", gender: "", payment: "", city: "" },
            cities: ["Delhi", "Noida", "Gurgaon", "Jaipur"],
            payment: ["Credit Card", "Debit Card", "Wallet"],
            gender: ["Male", "Female"],
            edit: false
        },
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
            let resp = await http.get(`/customers/${id}`);
            let { data } = resp;
            console.log(data)
            setproductInfo({ person: data, edit: true })
        } else {
            let person = { Cusid: "", name: "", age: "", gender: "", payment: "", city: "" }
            setproductInfo({ person: person, edit: false })
        }

    }
    // useMemo(() => {
    //     if (prodInfo !== props) { fetchData() };
    // }, [prodInfo]);


    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...prodInfo }
        s1.person[input.Cusid] = input.value;
        s1.person[input.name] = input.value;
        s1.person[input.age] = input.value;
        s1.person[input.gender] = input.value;
        s1.person[input.payment] = input.value;
        s1.person[input.city] = input.value;

        console.log(s1)
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        let { data } = response
        console.log(data)
        his('/customers')
    }

    let putData = async (url, obj) => {
        let response = await http.put(url, obj)
        let { data } = response
        console.log(data)
        his('/customers')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { person, edit } = prodInfo
        edit ? putData(`/customers/${person.Cusid}`, person)
            : postData('/customers', person)
    }

    let { person = {}, edit } = prodInfo
    let { Cusid, name, age, gender, payment, city } = person
    console.log(person)
    let cities = ["Delhi", "Noida", "Gurgaon", "Jaipur"]
    let paymentlist = ["Credit Card", "Debit Card", "Wallet"]
    let genderlist = ["Male", "Female"]
    return (
        <div className="container">
            <div className='form-group'>
                <label>ID</label>
                <input
                    type="text"
                    className='form-control'
                    name='Cusid'
                    value={Cusid}
                    placeholder="Enter id"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input
                    type="text"
                    className='form-control'
                    name='name'
                    value={name}
                    placeholder="Enter name"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Age</label>
                <input
                    type="text"
                    className='form-control'
                    name='age'
                    value={age}
                    placeholder="Enter grade"
                    onChange={handleChange}
                />
            </div>
            {paymentlist.map((d1) => (
                <div className='form-check form-check-inline'>
                    <input
                        className='form-check-input'
                        type="radio"
                        name="payment"
                        value={d1}
                        checked={payment === d1}
                        onChange={handleChange}
                    />
                    <label className='form-check-label'>{d1}</label>
                </div>))}
            <br />
            {genderlist.map((d1) => (
                <div className='form-check form-check-inline'>
                    <input
                        className='form-check-input'
                        type="radio"
                        name="gender"
                        value={d1}
                        checked={gender === d1}
                        onChange={handleChange}
                    />
                    <label className='form-check-label'>{d1}</label>
                </div>))}

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
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>
                Submit</button>
        </div>
    )
}

export default AddProducts