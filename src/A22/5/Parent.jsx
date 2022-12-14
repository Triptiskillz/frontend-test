import { Component } from "react";
import Oppo from './Oppo'
import Realme from './Realme'
import Samsung from './Samsung'
import Xiaomi from './Xiaomi'
import Brand from './Brand'

import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
class Parent extends Component {
    state = {
        mobiles:[{name: "Mi A1",brand: "Xiaomi",RAM: "4GB",ROM: "64GB",price: 9999},{name: "Realme 2",brand: "Realme",RAM: "3GB",ROM: "32GB",price: 7999},{name: "On5",brand: "Samsung",RAM: "3GB",ROM: "64GB",price: 8499},{name: "F5",brand: "Oppo",RAM: "6GB",ROM: "128GB",price: 16999},{name: "Mi A3",brand: "Xiaomi",RAM: "6GB",ROM: "128GB",price: 18999},{name: "Realme 3",brand: "Realme",RAM: "4GB",ROM: "64GB",price: 9999},{name: "On7",brand: "Samsung",RAM: "4GB",ROM: "64GB",
        price: 11999},{name: "F7",brand: "Oppo",RAM: "6GB",ROM: "128GB",price: 18199},{name: "RedMi 5",brand: "Xiaomi",RAM: "3GB",ROM: "32GB",price: 7499},{name: "Realme Pro",brand: "Realme",RAM: "4GB",ROM: "64GB",price: 10299},{name: "Galaxy 9",brand: "Samsung",RAM: "6GB",ROM: "128GB",price: 35999},{name: "F3 Basic",brand: "Oppo",RAM: "3GB",ROM: "32GB",price: 8599}]

    };
    handleAddEmp =(pr)=>{
        console.log(pr)
        let s1={...this.state};
        s1.emps.push(pr);
        this.setState(s1);
    }
    render() {
        const {mobiles } = this.state
     
        return (
            <div className="container">

                <Navbar />
                {/* <Router> */}
                <Routes>

                    {/* <Route path="/office/:id" element={<Office offices={offices} />} /> */}
                    {/* <Route path="/brand/:value" element={<Products product={products} display="brand" />} /> */}
                    {/* <Route path="/category/:value" element={<Products product={products} display="category" />} /> */}
                    {/* <Route path="/addemp" element={<AddEmp empInfo={{}} */}
                        {/* onSubmit={this.handleAddEmp} />} /> */}

                    {/* <Route path="/:page" element={<Emps emps={emps} />} /> */}
                    {/* <Route path="/home" element={<Home />} /> */}
                    {/* <Route path="/about" element={<About/>} /> */}
                    {/* <Route path="/offices" element={<Offices offices={offices} />} /> */}
                    <Route path="/mobiles/" element={<Brand mobiles ={mobiles}/>} />
                    <Route path="/mobiles/Xiaomi/" element={<Xiaomi mobiles ={mobiles}/>} />
                    <Route path="/mobiles/Sumsung/" element={<Samsung mobiles ={mobiles}/>} />
                    <Route path="/mobiles/Realme/" element={<Realme mobiles ={mobiles}/>} />
                    <Route path="/mobiles/Oppo/" element={<Oppo mobiles ={mobiles}/>} />
                    
                    {/* <Route path="/:category/:value/:page" element={<Stores store={store} display="location" />} /> */}

                    {/* <Route path="/employee/:id" element={<Emp emps={emps} />} /> */}
                    {/* <Route path="/employee/dept/:value" element={<Dept emps={emps}  />} /> */}
                    {/* <Route path="/stores/1" element={<Stores store={store}/>} /> */}

                </Routes>
                {/* </Router> */}
            </div>
        )
    }
}
export default Parent

