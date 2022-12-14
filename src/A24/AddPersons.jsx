import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'

function AddProducts(props) {
    const [prodInfo, setproductInfo] = useState([
        {
            person: { name: "", course: "", grade: "", city: "" },
            cities: ["London", "Paris", "New Delhi", "Bangalore"],
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
            let resp = await http.get(`/svr/students/${id}`);
            let { data } = resp;
            // console.log(data)
            setproductInfo({ person: data, edit: true })
        } else {
            let person = { name: "", course: "", grade: "", city: "" }
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
        s1.person[input.course] = input.value;
        s1.person[input.grade] = input.value;
        s1.person[input.city] = input.value;

        console.log(s1)
        setproductInfo(s1)
    };

    let postData = async (url, obj) => {
        let response = await http.post(url, obj)
        let { data } = response
        console.log(data)
        his('/students')
    }

    let putData = async (url, obj) => {
        let response = await http.put(url, obj)
        let { data } = response
        console.log(data)
        his('/students')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { person, edit } = prodInfo
        edit ? putData(`/svr/students/${person.id}`, person)
            : postData('/svr/students/', person)
    }

    let { person = {}, edit } = prodInfo
    let { course, name, grade, city } = person
    let cities = ["London", "Paris", "New Delhi", "Bangalore"]
    console.log(edit)
    return (
        <div className="container">
            {edit ==true? (<>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type="text"
                        className='form-control'
                        id="name"
                        name='name'
                        value={name}
                        placeholder="Enter Name"
                        onChange={handleChange}
                        readOnly={true}
                    />
                </div>
            </>) : (<>
                <div className='form-group'>
                    <label>Name</label>
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
            </>)}

            <div className='form-group'>
                <label>Course</label>
                <input
                    type="text"
                    className='form-control'
                    id="course"
                    name='course'
                    value={course}
                    placeholder="Enter course"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Grade</label>
                <input
                    type="text"
                    className='form-control'
                    id="grade"
                    name='grade'
                    value={grade}
                    placeholder="Enter grade"
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
            <button
                className='btn btn-primary m-2'
                onClick={handleSubmit}>
                Submit</button>
        </div>
    )
}

export default AddProducts