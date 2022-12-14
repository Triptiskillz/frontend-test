import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
import queryString from "query-string";
import LeftPanelOptions from './LeftPanelOptions.jsx';
function Football() {
  let history = useNavigate();
  const location = useLocation();
  const [person, setPerson] = useState([])
  let { cate } = useParams()
  console.log(cate)
  let fetchPerson = async () => {
    let queryParams = queryString.parse(location.search);
    let searchStr = makeSearchString(queryParams)
    console.log(queryParams)
    let response = await http.get(`/sporticons/stars/Football?${searchStr}`);
    let { data } = response
    setPerson(data)

  }

  let hanldePage = (incr) => {
    let queryParams = queryString.parse(location.search);
    let { page = "1" } = queryParams;
    let newPage = +page + incr;
    queryParams.page = newPage;
    callURL('/stars/football', queryParams);

  }
  const callURL = (url, options) => {
    let searchString = makeSearchString(options);
    history({
      pathname: url,
      search: searchString,
    })
  }
  const makeSearchString = (options) => {
    let { page, countries} = options;
    let arr = "";
    arr = addToQueryString(arr, "page", page)
    arr = addToQueryString(arr, "countries", countries)

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
    callURL('/stars/football', options);

  }
  const { pageInfo={},stars = [] } = person
  const { numOfItems,totalItemCount } = pageInfo
  let countrie = ["India", "Australia", "Portugal", "Argentina", "Brazil","France"]
  let queryParams = queryString.parse(location.search);

  let { page = "1" } = queryParams;
  let pagenum = +page
  let startIndex = (pagenum - 1) *numOfItems;
  let endIndex = stars.length > startIndex + numOfItems - 1
    ? startIndex + numOfItems - 1
    : stars.length - 1;
  fetchPerson()
  
  console.log(person)
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-3'>
          <LeftPanelOptions
            options={queryParams}
            // cities={cities}
            countrie={countrie}
            // ages={ages}
            OnOptionChange={handleOptionChange}
          />
        </div>
        <div className='col-9'>
          <div className='row bg-primary text-light'>
            <div className='col-4 border'>
              Name
            </div>
            <div className='col-4 border'> Country</div>
            <div className='col-4 border'> Sport</div>
          </div>
          {stars.map((pr) => (
            <div className='row' key={pr.id}>
              <div className='col-4 border'>
                <Link to={`/stars/${pr.id}`}>{pr.name}</Link>
              </div>
              <div className='col-4 border'> {pr.country}</div>
              <div className='col-4 border'> {pr.sport}</div>
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
              {endIndex < totalItemCount ? <button className='btn btn-primary btn-sm mt-2 mb-2'
                onClick={() => hanldePage(1)}
              >Next</button> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Football