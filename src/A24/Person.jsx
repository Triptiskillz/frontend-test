import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import http from './httpService.js'

function Person() {
  let { id } = useParams()
  const [person, setPerson] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await http.get(`/svr/students/${id}`)
      let { data } = response
      setPerson(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      <h4>Details of the Student</h4>
      Id: {person.id}
      <br />
      Name: {person.name}
      <br />
      Course: {person.course}
      <br />
      Grade: {person.grade}
      <br />
      City: {person.city}
      <br/>
      <Link  className='text-decoration-none' to={`/students/${id}/delete`}>Delete</Link> 
      <Link className='text-decoration-none'  to={`/students/${id}/edit`}>Edit</Link>

    </div>
  )
}

export default Person