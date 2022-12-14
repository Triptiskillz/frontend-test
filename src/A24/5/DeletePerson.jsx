import React,{useEffect,useState} from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom';
import http from './httpService.js'
function DeletePerson() {
    let { id } = useParams()
    let history = useNavigate();
      const componentDidMount = async () => {
        let response = await http.deleteApi(`/personApp/persons/${id}`)
        history("/persons")
      }
      componentDidMount()
    return ""
  }
  
  export default DeletePerson