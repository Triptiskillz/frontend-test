import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import http from './httpService.js'

function Person() {
  let { id } = useParams()
  const [person, setPerson] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await http.get(`/personApp/persons/${id}`)
      let { data } = response
      setPerson(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      <h4>Details of the person</h4>
      Id: {person.id}
      <br />
      Name: {person.name}
      <br />
      Age: {person.age}
      <br />
      City: {person.city}
      <br />
      Company: {person.company}
      <br />
      <Link to={`/persons/${id}/delete`}>Delete</Link><br/>
      <Link to={`/persons/${id}/edit`}>Edit</Link>

    </div>
  )
}

export default Person