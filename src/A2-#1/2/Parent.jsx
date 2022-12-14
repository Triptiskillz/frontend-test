import React, { Component } from "react";
import CoursePage from './CoursePage'
import Lecture from './Lecture'
import Lectures from './Lectures'
import Welcome from './Welcome'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
// import Contact from './Contact'
class Parent extends Component {
    state = {
        courses: ['React', 'Angular', 'Javascript'],
        lectures: [
            { course: "React", id: 1, topic: "State" },
            { course: "React", id: 2, topic: "Props" },
            { course: "React", id: 3, topic: "Routhing" },
            { course: "Angular", id: 5, topic: "TypeScipti" },
            { course: "Angular", id: 6, topic: "State" },
            { course: "Angular", id: 7, topic: "State" },
            { course: "Javascript", id: 8, topic: "Map" },
            { course: "Javascript", id: 9, topic: "Spread" },
            { course: "Javascript", id: 10, topic: "Find" },
            { course: "React", id: 11, topic: "Function" },
            { course: "React", id: 12, topic: "State" },

        ]
    };

    render() {
        const { courses, lectures } = this.state

        return (
            <div className="container">
                <Navbar />
                {/* <Router> */}
                <Routes>
                    <Route path="/courses/:courseName" element={<CoursePage lectures={lectures} />} />
                    <Route path="/lecture/:courseName/:lecId" element={<Lecture lectures={lectures} display="brand" />} />
                    {/* <Route path="/category/:value" element={<Products product={products} display="category" />} /> */}

                    <Route path="/" element={<Welcome />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/stores" element={<Lectures  lectures={lectures}  />} />

                    {/* <Route path="/contact" element={<Contact contact={contact} />} /> */}
                    {/* <Route path="/products" element={<Products product={products} />} /> */}
                </Routes>
                {/* </Router> */}
            </div>
        )
    }
}
export default Parent

