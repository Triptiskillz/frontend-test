import React,{useEffect,useState} from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom';
import http from './httpService.js'
function DeletePerson() {
    let { id } = useParams()
    let history = useNavigate();
      const componentDidMount = async () => {
        let response = await http.deleteApi(`/svr/students/${id}`)
        history("/students")
      }
      componentDidMount()
    return ""
  }
  
  export default DeletePerson