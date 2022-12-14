import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
import queryString from "query-string";
import LeftPanelOptions from './LeftPanelOptions.jsx';
function Persons() {

  let history = useNavigate();

  const location = useLocation();

  const [person, setPerson] = useState([])

  let fetchPerson = async () => {
    let queryParams = queryString.parse(location.search);
    let searchStr = makeSearchString(queryParams)
    let response = await http.get(`/customers?${searchStr}`);
    let { data } = response
    setPerson(data)

  }

  // let hanldePage = (incr) => {
  //   let queryParams = queryString.parse(location.search);
  //   let { page = "1" } = queryParams;
  //   let newPage = +page + incr;
  //   queryParams.page = newPage;
  //   callURL('/customers', queryParams);

  // }
  const callURL = (url, options) => {
    let searchString = makeSearchString(options);
    history({
      pathname: url,
      search: searchString,
    })
  }
  const makeSearchString = (options) => {
    let { city, gender, payment,city1, payment1} = options;
    let arr = "";
    arr = addToQueryString(arr, "city", city)
    arr = addToQueryString(arr, "gender", gender)
    arr = addToQueryString(arr, "payment", payment)
    arr = addToQueryString(arr, "sort", city1)
    arr = addToQueryString(arr, "sort", payment1)
    return arr
  }
  const addToQueryString = (str, paraName, paraValue) =>
    paraValue
      ? str
        ? `${str}&${paraName}=${paraValue}`
        : `${paraName}=${paraValue}`
      : str;
  const handleOptionChange = (options) => {
    options.page = "1"
    callURL('/customers', options);

  }

  let handleOnSort = (options) => {
    console.log('hello')
    callURL('/customers', options);

  }
  let cities = ["Delhi", "Noida", "Gurgaon", "Jaipur"]
  let paymentlist = ["Credit Card", "Debit Card", "Wallet"]
  let genderlist = ["Male", "Female"]
  let queryParams = queryString.parse(location.search);
let {city,payment}=person
let city1=city
let payment1 =payment
  fetchPerson()
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-3'>
          <LeftPanelOptions
            options={queryParams}
            cities={cities}
            paymentlist={paymentlist}
            genderlist={genderlist}
            OnOptionChange={handleOptionChange}
          />
        </div>
        <div className='col-9'>
          <div className='row bg-dark text-light'>
            <div className='col-1 border'>Id</div>
            <div className='col-2 border'>Name</div>
            <div className='col-2 border' onClick={() => handleOnSort(city1)} > City</div>
            <div className='col-1 border'>Age</div>
            <div className='col-2 border'>Gender</div>
            <div className='col-2 border' onClick={() => handleOnSort(payment1)} > Payment</div>
            <div className='col-1 border'></div>
            <div className='col-1 border'></div>
          </div>
          {person.map((pr) => (
            <div className='row' key={pr.Cusid}>
              <div className='col-1 border'>{pr.Cusid}</div>
              <div className='col-2 border'> {pr.name}</div>
              <div className='col-2 border'> {pr.city}</div>
              <div className='col-1 border'>{pr.age}</div>
              <div className='col-2 border'>{pr.gender}</div>
              <div className='col-2 border'> {pr.payment}</div>
              <div className='col-1 border'>
                <button type="button" class="btn btn-warning">
                  <Link className='text-decoration-none' to={`/customers/${pr.Cusid}/edit`}>Edit</Link></button>
              </div>
              <div className='col-1 border'>
                <button type="button" class="btn btn-danger">
                  <Link className='text-light  text-decoration-none' to={`/customers/${pr.Cusid}/delete`}>Delete</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Persons