import { Component } from "react";

import Navbar1 from './Navbar'
import ComA from './ComA'
import ComB from './ComB'
import { Routes, Route } from "react-router-dom";
class Parent extends Component {

    render() {

        return (
            <div className="container">

                <Navbar1 />
                {/* <Router> */}
                <Routes>
                    <Route path="/comA" element={<ComA/>} />
                    <Route path="/comB/:name" element={<ComB/>} />

                </Routes>
                {/* </Router> */}
            </div>
        )
    }
}
export default Parent

