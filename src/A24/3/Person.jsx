import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import http from './httpService.js'

function Person() {
  let { bookid } = useParams()
  let id = +bookid
  const [person, setPerson] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await http.get(`/booksapp/book/${id}`)
      let { data } = response
      setPerson(data)
    }
    fetchProducts()
  }, [])
  let { books = {} } = person
  console.log(books)
  return (
    <div className='container mt-4'>
      <h4>
        Book: {person.name}
      </h4>
      <div className='row border'>
        <div className='col-4'>Author:</div>
        <div className='col-8'>{person.author}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Genre:</div>
        <div className='col-8'>{person.genre}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Description:</div>
        <div className='col-8'>{person.description}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Blurb:</div>
        <div className='col-8'>{person.blurb}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Review:</div>
        <div className='col-8'>{person.review}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Price:</div>
        <div className='col-8'>{person.price}</div>
      </div>
      <div className='row border'>
        <div className='col-4'>Rating:</div>
        <div className='col-8'>{person.avgrating}</div>
      </div>
      <br />
    </div>
  )
}

export default Person