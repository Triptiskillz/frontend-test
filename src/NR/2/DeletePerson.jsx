import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import http from './httpService.js'
function DeletePerson() {
  let history = useNavigate();
  let { id } = useParams()

  const componentDidMount = async () => {
    let response = await http.deleteApi(`/cars/${id}`)
    history("/cars")
  }
  componentDidMount()
  return ""
}

export default DeletePerson