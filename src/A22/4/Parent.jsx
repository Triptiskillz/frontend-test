import { Component } from "react";
import Android from './Android'
import Angular from './Angular'
import React from './React'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
class Parent extends Component {
    state = {
        resume:[{name: "Amit",course: "BTech",year: 2019,status: "Studying",tech: "React"},{name: "Praveen",course: "BSc",year: 2020,status: "Studying",tech: "Angular"},{name: "Namita",course: "MCA",year: 2021,status: "Studying",tech: "Android"},{name: "Anuradha",course: "MTech",year: 2019,status: "Studying",tech: "Android"},{name: "Kavita",course: "BCA",year: 2020,status: "Studying",tech: "React"},{name: "Manish",course: "BTech",year: 2016,status: "Working",tech: "React"},{name: "Gautam",course: "BTech",year: 2017,status: "Working",
        tech: "Angular"},{name: "Radhika",course: "MCA",year: 2016,status: "Working",tech: "React"},
        {name: "Charu",course: "MTech",year: 2018,status: "Searching",tech: "Android"},{name: "Divya",course: "BCA",year: 2019,status: "Preparing",tech: "Angular"},{name: "Pradeep",course: "BTech",year: 2016,status: "Working",tech: "React"},{name: "Siddhartha",course: "MCA",year: 2016,status: "Working",tech: "Angular"},{name: "Prachi",course: "MCA",year: 2016,status: "Searching",tech: "Android"},{name: "Charu",course: "MTech",year: 2018,status: "Preparing",
        tech: "React"},{name: "Harsh",course: "BSc",year: 2019,status: "Preparing",tech: "Angular"}]

    };
    handleAddEmp =(pr)=>{
        console.log(pr)
        let s1={...this.state};
        s1.emps.push(pr);
        this.setState(s1);
    }
    render() {
        const { emps, resume } = this.state
     
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
                    <Route path="/job/android/" element={<Android resume ={resume}/>} />
                    <Route path="/job/angular/" element={<Angular resume ={resume}/>} />
                    <Route path="/job/react/" element={<React resume ={resume}/>} />
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

