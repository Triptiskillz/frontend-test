import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import http from './httpService.js'
import queryString from "query-string";
import LeftPanelOptions from './LeftPanelOptions.jsx';
import LeftPanelOptionRD from './LeftPanelOptionRD.jsx'
function Persons() {
  let history = useNavigate();

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [person, setPerson] = useState(null)

  useEffect(() => {
    let fetchPerson = async () => {
      let queryParams = queryString.parse(location.search);
      let searchStr = makeSearchString(queryParams)
      console.log(searchStr)
      let res = await http.get(`?${searchStr}&api-key=test`);
      console.log(res)
      setPerson(res.data.response)
    }
    fetchPerson()
  }, [])


  let hanldePage = (incr) => {
    let queryParams = queryString.parse(location.search);
    let { page = 1 } = queryParams;
    let newPage = +page + incr;
    queryParams.page = newPage;
    callURL('/home', queryParams);

  }
  const callURL = (url, options) => {
    let searchString = makeSearchString(options);
    history({
      pathname: url,
      search: searchString,
    })
  }
  const makeSearchString = (options) => {
    let { page, orderBy, q } = options;
    // console.log(options)
    let arr = "";
    // arr = addToQueryString(arr, "page", page)
    // arr = addToQueryString(arr, "orderBy", orderBy)
    arr = addToQueryString(arr, "q", q)
    // console.log(orderBy)
    // console.log(q)

    return arr
  }
  const addToQueryString = (str, paraName, paraValue) =>
  // console.log(str, paraName, paraValue)
    paraValue
      ? str
        ? `${str}&${paraName}=${paraValue}`
        : `${paraName}=${paraValue}`
      : str;
  const handleOptionChange = (options) => {
    options.page = "1"
    callURL('/home', options);

  }
  // console.log(person)
  // const { pageSize=0, total=0, results = {} } = person

  let orderBy = ["None","newest", "oldest", "relevance"]
  let q = ['Business', 'Technology', 'Politics', 'LifeStyle']
  let queryParams = queryString.parse(location.search);

  let { page = "1" } = queryParams;
  let pagenum = +page
  let startIndex = (pagenum - 1) * person?.pageSize;
  let endIndex = person?.results.length > startIndex + person?.pageSize - 1
    ? startIndex + person?.pageSize - 1
    : person?.results.length - 1;
// console.log(queryParams)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className=' text-center border bg-light p-2 m-4'>
            <b>Order By</b>
            <LeftPanelOptions
              options={queryParams}
              orderBys={orderBy}
              // bestsellers={bestseller}
              // ages={ages}
              OnOptionChange={handleOptionChange}
            />
          </div>
          <div className=' border bg-light p-2 m-4'>
            <LeftPanelOptionRD
              options={queryParams}
              sections={q}
              OnOptionChange={handleOptionChange}
            />
          </div>
        </div>
        <div className='col-9'>
          <div className='form-group mt-2'>
            <div className='row'>
              <div className='col-10'>
                <div className="search">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                    results
                  />
                </div>
                </div>
                <div className='col-2'>
                  <button className='btn btn-primary'>
                    Submit
                  </button>
               
              </div>
            </div>
          </div>
          <br/>
          <h6>{startIndex + 1} to {endIndex + 1} of {person?.total}</h6>
          <div className='row bg-primary text-light'>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {person?.results?.filter((items) => {
              if (searchTerm == "") {
                return items;
              } else if (
                items.webTitle.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return items;
              }
            }).map((pr, index) => (
              <div class=" col mb-4 text-center">
                <div class="card-body p-2" style={{ backgroundColor: "lightblue" }}>
                  {pr.webTitle}
                  <br />
                  <h6>Source:
                    {pr.sectionName}<br />
                    {pr.webPublicationDate}
                  </h6>
                  <Link to={`/home/${pr.id}`}>Preview</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-2 ">
              {startIndex > 0 ? <button
                className='btn btn-primary btn-sm mt-2 mb-2 '
                onClick={() => hanldePage(-1)}
              >Prev</button> : ""}
            </div>
            <div className="col-8"></div>
            <div className="col-2">
              {endIndex < person?.total ? <button className='btn btn-primary btn-sm mt-2 mb-2'
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