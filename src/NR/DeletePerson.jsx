import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import http from './httpService.js'
function DeletePerson() {
  let history = useNavigate();
  let { id } = useParams()
  useEffect(() => {
  const componentDidMount = async () => {
    let response = await http.deleteApi(`/cars/${id}`)
    history("/car")
  }
  componentDidMount()
}, [])
  return ""
}

export default DeletePerson