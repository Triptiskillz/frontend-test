import React, { Component } from "react";
import Offices from './Offices'
import Office from './Office'
import Home from './Home'
import Navbar from './Navbar'
import Emps from './Emps'
import Emp from './Emp'
import Dept from './Dept'
import { Routes, Route } from "react-router-dom";
import About from './About'
class Parent extends Component {
    state = {
        emps: [{ id: "JX103", name: "Jack Wilson", dept: "Technology", designation: "Manager", }, { id: "JX125", name: "Mary Gomes", dept: "Operations", designation: "Vice President", }, { id: "JX086", name: "George Mason", dept: "Finance", designation: "Trainee", }, { id: "JX259", name: "Jim Smith", dept: "HR", designation: "Executive", }, { id: "JX009", name: "Tim Watson", dept: "Marketing", designation: "Manager", }, { id: "JX188", name: "Anna Gates", dept: "Technology", designation: "Trainee", }, { id: "JX423", name: "Bob Andrews", dept: "Technology", designation: "Trainee", }, { id: "JX525", name: "Ted Cotton", dept: "Technology", designation: "Vice President", }, {
            id: "JX636", name: "William Smith", dept: "Finance", designation: "Executive",
        }, { id: "JX749", name: "Billy Norton", dept: "Finance", designation: "Executive", }, { id: "JX859", name: "Julia Smith", dept: "Marketing", designation: "Executive", }, { id: "JX968", name: "Meg Conte", dept: "Technology", designation: "Trainee", }, { id: "JX156", name: "Corey Andrews", dept: "Technology", designation: "Manager", }, { id: "JX157", name: "Larry King", dept: "Operations", designation: "Manager", }, { id: "JX058", name: "Michael Mason", dept: "Finance", designation: "Manager", }, { id: "JX269", name: "Wally Smith", dept: "HR", designation: "Executive", }, { id: "JX080", name: "Tara Reid", dept: "Marketing", designation: "Manager", }, { id: "JX191", name: "Alfred Myers", dept: "Technology", designation: "Trainee", },]
        , offices: [{ id: 1, city: "SanFrancisco", address: "1600 Amphitheatre Pkwy, Mountain View, CA 94043", }, { id: 2, city: "Bengaluru", address: "Swami Vivekananda Rd, Sadanandanagar, Bennigana Halli, Bengaluru", }, { id: 3, city: "London", address: "Belgrave House, 76 Buckingham Palace Rd, Belgravia, London", },]

    };

    render() {
        const { emps, offices } = this.state

        return (
            <div className="container">
                <Navbar />
                {/* <Router> */}
                <Routes>

                    <Route path="/office/:id" element={<Office offices={offices} />} />
                    {/* <Route path="/brand/:value" element={<Products product={products} display="brand" />} /> */}
                    {/* <Route path="/category/:value" element={<Products product={products} display="category" />} /> */}

                    {/* <Route path="/:page" element={<Emps emps={emps} />} /> */}
                    {/* <Route path="/home" element={<Home />} /> */}
                    <Route path="/about" element={<About/>} />
                    <Route path="/offices" element={<Offices offices={offices} />} />
                    <Route path="/employees/:page" element={<Emps emps={emps} />} />
                    {/* <Route path="/:category/:value/:page" element={<Stores store={store} display="location" />} /> */}

                    <Route path="/employee/:id" element={<Emp emps={emps} />} />
                    <Route path="/employee/dept/:value" element={<Dept emps={emps}  />} />
                    {/* <Route path="/stores/1" element={<Stores store={store}/>} /> */}

                </Routes>
                {/* </Router> */}
            </div>
        )
    }
}
export default Parent

