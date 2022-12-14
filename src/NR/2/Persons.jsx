import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
import queryString from "query-string";
import LeftPanelOptions from './LeftPanelOptions.jsx';
import Option from './Option.jsx'
function Persons() {

  let history = useNavigate();

  const location = useLocation();

  const [person, setPerson] = useState([])

  let fetchPerson = async () => {
    let queryParams = queryString.parse(location.search);
    let searchStr = makeSearchString(queryParams)
    let response = await http.get(`/cars?${searchStr}`);
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
    let { fuel, type, sort, maxprice, minprice } = options;
    let arr = "";
    arr = addToQueryString(arr, "fuel", fuel)
    arr = addToQueryString(arr, "type", type)
    arr = addToQueryString(arr, "sort", sort)
    arr = addToQueryString(arr, "minprice", minprice)
    arr = addToQueryString(arr, "maxprice", maxprice)
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
    callURL('/cars', options);

  }


  let fuelList = ["Diesel", "Petrol"]
  let typelist = ["Hatchback", "Sedan"]
  let sortlist = ["price", "year", "kms"]
  let queryParams = queryString.parse(location.search);
  let { city, payment } = person
  let city1 = city
  let payment1 = payment
  fetchPerson()
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-3'>
          <LeftPanelOptions
            options={queryParams}
            fuelList={fuelList}
            typelist={typelist}
            sortlist={sortlist}
            OnOptionChange={handleOptionChange}
          />
        </div>
        <div className='col-9'>
          <h2 className='text-center'>All Cars</h2>
          <div className='row'>
            <div className='col-4'>Price Range</div>
            <div className='col-8'>
              <Option
                options={queryParams}
                OnOptionChange={handleOptionChange}
              />
            </div> 
          </div>
          <br />
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            {person.map((pr) => (
              <div class=" col mb-4 text-center">
                <div class="card-body p-2 bg-warning">
                  <h6>{pr.model}</h6>
                  Price: {pr.price}<br />
                  Color: {pr.color} <br />
                  Mileage: {pr.kms} Kms <br />
                  Manufactactured: {pr.year} <br />

                  <Link className='text-dark text-decoration-none p-4' to={`/cars/${pr.Carid}/edit`}><i class="fa fa-edit"></i></Link>
                  
                  <Link className='text-dark text-decoration-none p-4' to={`/cars/${pr.Carid}/delete`}><i class="fa fa-trash"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Persons