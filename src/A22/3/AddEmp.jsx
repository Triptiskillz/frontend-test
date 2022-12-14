import React, { Component,useState } from "react";
import { Link, useParams, useNavigate  } from 'react-router-dom';
function AddEmp({ empInfo, onSubmit }) {
    const [EmpInfo, setempInfo] = useState(empInfo);
    let his = useNavigate();
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...EmpInfo}
        input.name === 'inStock'
            ? (s1[input.name] = input.checked)
            : (s1[input.name] = input.value)
            setempInfo(s1)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(EmpInfo)
        his('/employees/1')
    }
 
    let { id, name, dept, designation } = EmpInfo
    return (
        <div className="container">
            <div className='form-group'>
                <label>Id</label>
                <input
                    type="text"
                    className='form-control'
                    id="id"
                    name='id'
                    value={id}
                    placeholder="Enter the  Id"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input
                    type="text"
                    className='form-control'
                    id="name"
                    name='name'
                    value={name}
                    placeholder="Enter the name"
                    onChange={handleChange}
                />
            </div> 
              <div className='form-group'>
                <label>Dept</label>
                <input
                    type="text"
                    className='form-control'
                    id="dept"
                    name='dept'
                    value={dept}
                    placeholder="Enter the dept"
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label>Designation</label>
                <input
                    type="text"
                    className='form-control'
                    id="designation"
                    name='designation'
                    value={designation}
                    placeholder=" Enter the designation"
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
export default AddEmp