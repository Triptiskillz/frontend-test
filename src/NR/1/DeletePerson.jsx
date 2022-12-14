import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import http from './httpService.js'
function DeletePerson() {
  let { id } = useParams()
  let history = useNavigate();
  useEffect(() => {
  const componentDidMount = async () => {
    let response = await http.deleteApi(`/customers/${id}`)
    history("/customers")
  }
  componentDidMount()
}, [])
  return ""
}

export default DeletePerson