import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
import queryString from "query-string";
import LeftPanelOptions from './LeftPanelOptions.jsx';
function Persons() {
  let history = useNavigate();
  const location = useLocation();
  let { cate } = useParams()
  console.log(cate)
  const [person, setPerson] = useState([])
  let fetchPerson = async () => {
    let queryParams = queryString.parse(location.search);
    let searchStr = makeSearchString(queryParams)
    let response = await http.get(`/personApp/persons?${searchStr}`);
    let { data } = response
    setPerson(data)

  }

  let hanldePage = (incr) => {
    let queryParams = queryString.parse(location.search);
    let { page = "1" } = queryParams;
    let newPage = +page + incr;
    queryParams.page = newPage;
    callURL('/persons', queryParams);

  }
  const callURL = (url, options) => {
    let searchString = makeSearchString(options);
    history({
      pathname: url,
      search: searchString,
    })
  }
  const makeSearchString = (options) => {
    let { page, city, company, minAge } = options;
    let arr = "";
    arr = addToQueryString(arr, "page", page)
    arr = addToQueryString(arr, "city", city)
    arr = addToQueryString(arr, "company", company)
    arr = addToQueryString(arr, "minAge", minAge)
    return arr
  }
  const addToQueryString = (str, paraName, paraValue) =>
    paraValue
      ? str
        ? `${str}&${paraName}=${paraValue}`
        : `${paraName}=${paraValue}`
      : str;
  const handleOptionChange = (options) => {
    options.page="1"
    callURL('/persons', options);

  }
  const { startIndex, endIndex, numOfItems, persons = [] } = person
  let cities = ["London", "Paris", "New Delhi", "Bangalore"]
  let companies = ["Apple", "Google", "Facebook", "Microsoft", "Tasle"]
  let ages = [24, 30, 35, 40, 45, 50]
  let queryParams = queryString.parse(location.search);
  fetchPerson()
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-3'>
          <LeftPanelOptions
            options={queryParams}
            cities={cities}
            companies={companies}
            ages={ages}
            OnOptionChange={handleOptionChange}
          />
        </div>
        <div className='col-9'>
          <h4>List of Persons</h4>
          <h6>Showing {startIndex} to {endIndex} of {numOfItems}</h6>
          {persons.map((pr) => (
            <div className='row' key={pr.id}>
              <div className='col-2 border'>
                <Link to={`/persons/${pr.id}`}>{pr.id}</Link>
              </div>
              <div className='col-2 border'> {pr.name}</div>
              <div className='col-2 border'> {pr.age}</div>
              <div className='col-2 border'>{pr.city}</div>
              <div className='col-2 border'>{pr.company}</div>
            </div>
          ))}
          <div className="row">
            <div className="col-2 ">
              {startIndex > 1 ? <button
                className='btn btn-primary btn-sm mt-2 mb-2 '
                onClick={() => hanldePage(-1)}
              >Prev</button> : ""}
            </div>
            <div className="col-8"></div>
            <div className="col-2">
              {endIndex < numOfItems ? <button className='btn btn-primary btn-sm mt-2 mb-2'
                onClick={() => hanldePage(1)}
              >Next</button> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Persons