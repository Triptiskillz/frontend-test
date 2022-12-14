import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import http from './httpService.js'
function Products() {
  const [products, setProducts] = useState([])
    let fetchProducts = async () => {
      let response = await http.get('/productApp/products')
      let {data} = response   
        setProducts(data)
      
    }
    fetchProducts()

  return (
    <div className='container'>
      <h4>Welcome to the PRODUCTS page</h4>
      {products.map((pr)=>(
        <div className='row' key={pr.id}>
          <div className='col-2 border'>
            <Link to ={`/products/${pr.id}`}>{pr.id}</Link>
          </div>
          <div className='col-2 border'> {pr.name}</div>
          <div className='col-2 border'> {pr.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Products