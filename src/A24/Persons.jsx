import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
function Persons() {

  const [person, setPerson] = useState([])

  let fetchPerson = async () => {
    let response = await http.get(`/svr/students`);
    let { data } = response
    setPerson(data)
  }

  fetchPerson()
  return (
    <div className='container'>
      <h2>Welcome to the STUDENTS page</h2>
      <div className='row'>
        {person.map((pr) => (
          <div className='row' key={pr.id}>
            <div className='col-1 border'>
              <Link to={`/students/${pr.id}`}>{pr.id}</Link>
            </div>
            <div className='col-2 border'> {pr.name}</div>
            <div className='col-2 border'> {pr.course}</div>
            <div className='col-1 border'>{pr.grade}</div>
            <div className='col-2 border'>{pr.city}</div>
            <div className='col-2 border'>
              <button type="button" class="btn btn-warning">
                 <Link className='text-decoration-none'  to={`/students/${pr.id}/edit`}>Edit</Link></button>
            </div>
            <div className='col-2 border'>
              <button type="button" class="btn btn-danger">
                <Link  className='text-light  text-decoration-none' to={`/students/${pr.id}/delete`}>Delete</Link>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Persons