import { Component } from "react";
import Person from "./Person"
import Persons from "./Persons"
import AddPersons from "./AddPersons"
import Navbar1 from './Navbar'
import DeletePerson from './DeletePerson'
import Course from './Course';
import { Routes, Route } from "react-router-dom";
class Parent extends Component {
    state = {
        person: { name: "", age: "", city: "", company: "" },
        cities: ["London", "Paris", "New Delhi", "Bangalore"],
        companies: ["Apple", "Google", "Facebook", "Microsoft", "Tasle"],
        edit: false
    };
    handleAddEmp = (pr) => {
        console.log(pr)
        let s1 = { ...this.state };
        s1.mobiles.push(pr);
        this.setState(s1);
    }
    render() {
        const { person, cities, companies, edit } = this.state

        return (
            <div className="container">

                <Navbar1 />
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
                    <Route path="/students/add" element={<AddPersons/>}/>
                    <Route path="/students/:id/delete" element={<DeletePerson />} />
                    <Route path="/students/:id/edit" element={<AddPersons />} />
                    <Route path="/students/course/:name" element={<Course/>}/>
                    <Route path="/students/:id" element={<Person />} />
                    <Route path="/students" element={<Persons />} />
                    <Route path="/" element={<Persons />} />

                    {/* <Route path="/mobiles/Realme/" element={<Realme mobiles ={mobiles}/>} /> */}
                    {/* <Route path="/mobiles/Oppo/" element={<Oppo mobiles ={mobiles}/>} /> */}

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

