import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import http from './httpService.js'

function Product() {
  let { id } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await http.get(`/productApp/products/${id}`)

      let {data} = response   
        setProducts(data)
      
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>

      Product Id: {products.id}
      <br/>
      Name: {products.name}
      <br/>
      Price: {products.price}
      <br/>
    </div>
  )
}

export default Product