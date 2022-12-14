import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import http from './httpService.js'

function Person() {
  let { id } = useParams()
  const [person, setPerson] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await http.get(`/sporticons/details/${id}`)
      let { data } = response
      setPerson(data)
    }
    fetchProducts()
  }, [])
  let{details={}}=person
  let {dob,info}=details
  return (
    <div className='container mt-4'>
      <h4>
        {person.name}
      </h4>
      <h6>Date Of Birth: {dob}</h6>
      <h6>Sport: {person.sport}</h6>
      <h6>Country: {person.country}</h6>
      {info}
      <h6><Link>{person.sport} Star</Link></h6>
      <br />
    </div>
  )
}

export default Person