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
    console.log(queryParams)
    let response = await http.get(`/booksapp/books?${searchStr}`);
    let { data } = response
    setPerson(data)

  }

  let hanldePage = (incr) => {
    let queryParams = queryString.parse(location.search);
    let { page = "1" } = queryParams;
    let newPage = +page + incr;
    queryParams.page = newPage;
    callURL('/books', queryParams);

  }
  const callURL = (url, options) => {
    let searchString = makeSearchString(options);
    history({
      pathname: url,
      search: searchString,
    })
  }
  const makeSearchString = (options) => {
    let { page, bestseller,language} = options;
    let arr = "";
    arr = addToQueryString(arr, "page", page)
    arr = addToQueryString(arr, "bestseller", bestseller)
    arr = addToQueryString(arr, "language", language)
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
    callURL('/books', options);

  }
  const { pageInfo={},books = [] } = person
  const { numOfItems,totalItemCount } = pageInfo
  let bestseller = ["Yes","No"]
  let language=['English','French','Latin','Other']
  let queryParams = queryString.parse(location.search);

  let { page = "1" } = queryParams;
  let pagenum = +page
  let startIndex = (pagenum - 1) *numOfItems;
  let endIndex = books.length > startIndex + numOfItems - 1
    ? startIndex + numOfItems - 1
    : books.length - 1;
    console.log(endIndex,totalItemCount)
  fetchPerson()

  return (
    <div className='container'>

      <div className='row'>
        <div className='col-3'>
          <b className='text-center'>Options</b>
          <LeftPanelOptions
            options={queryParams}
            languages={language}
            bestsellers={bestseller}
            OnOptionChange={handleOptionChange}
          />
        </div>
        <div className='col-9'>
          <h6>{startIndex+1} to {endIndex+1} of {totalItemCount}</h6>
          <div className='row bg-primary text-light'>
            <div className='col-3 border'>Title</div>
            <div className='col-2 border'> Author</div>
            <div className='col-2 border'> Language</div>
            <div className='col-2 border'> Genre</div>
            <div className='col-2 border'> Price</div>
            <div className='col-1 border'>Bes..</div>


          </div>
          {books.map((pr) => (
            <div className='row' key={pr.id}>
              <div className='col-3 border'>
                <Link to={`/books/${pr.bookid}`}>{pr.name}</Link>
              </div>
              <div className='col-2 border'> {pr.author}</div>
              <div className='col-2 border'> {pr.language}</div>
              <div className='col-2 border'> {pr.genre}</div>
              <div className='col-2 border'> {pr.price}</div>
              <div className='col-1 border'> {pr.bestseller}</div>


            </div>
          ))}
          <div className="row">
            <div className="col-2 ">
              {startIndex > 0 ? <button
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

export default Persons