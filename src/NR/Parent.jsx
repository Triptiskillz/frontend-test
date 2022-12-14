import { Component } from "react";
// import Person from "./Person"
import Persons from "./Persons"
import AddPersons from "./AddPersons"
import Navbar1 from './Navbar'
import DeletePerson from './DeletePerson'
// import Course from './Course';
import { Routes, Route } from "react-router-dom";
class Parent extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <Navbar1 />
                <Routes>
                    <Route path="/car/add" element={<AddPersons />} />
                    <Route path="/car/:id/delete" element={<DeletePerson />} />
                    <Route path="/car/:id/edit" element={<AddPersons />} />
                    {/* <Route path="/customers/:id" element={<Person />} /> */}
                    <Route path="/car" element={<Persons />} />
                    <Route path="/" element={<Persons />} />
                </Routes>
            </div>
        )
    }
}
export default Parent

