import React, { useState, useEffect,useMemo } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts(props) {
    const [prodInfo, setproductInfo] = useState([
        {
            person: { name: "", age: "", city: "", company: "" },
            cities: ["London", "Paris", "New Delhi", "Bangalore"],
            companies: ["Apple", "Google", "Facebook", "Microsoft", "Tasle"],
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
            let resp = await http.get(`/personApp/persons/${id}`);
            let { data } = resp;
            // console.log(data)
            setproductInfo({ person: data, edit: true })
        } else {
            let person = { name: "", age: "", city: "", company: "" }
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
        s1.person[input.age] = input.value;
        s1.person[input.city] = input.value;
        s1.person[input.company] = input.value;

        console.log(s1)
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        let { data } = response
        console.log(data)
        his('/persons')
    }

    let putData = async (url, obj) => {
        let response = await http.put(url, obj)
        let { data } = response
        console.log(data)
        his('/persons')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { person, edit } = prodInfo
        edit ? putData(`/personApp/persons/${person.id}`, person)
            : postData('/personApp/persons', person)
    }

    let { person = {} } = prodInfo
    let cities = ["London", "Paris", "New Delhi", "Bangalore"]
    let companies = ["Apple", "Google", "Facebook", "Microsoft", "Tasle"]
    let { age, name, city, company } = person
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