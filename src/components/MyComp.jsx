import React, { Component } from 'react'
import Counter from './Count';
import Navbar from './Navbar';
import StudentFrom from './StudentFrom';
import ProductTable from './ProductTable';
class MyComp extends Component {
  state = {
    customer: [
      {name: 'Sam', course: 'MBA',maths:'',english:'',computer:'',science:'', year: '2014',}
    ],
    view: 0,
    editPersonIndex: -1,
    viewCourseIndex: -1,
  }

  showList = () => {
    let s1 = { ...this.state };
    s1.view = 1;
    this.setState(s1);
  }
  handlePerson = (person) => {

    let s1 = { ...this.state };
    s1.editPersonIndex >= 0
      ?
      (s1.customer[s1.editPersonIndex] = person)
      :
      s1.customer.push(person);
    s1.view = 1;
    s1.editPersonIndex = -1;
    this.setState(s1);
  }
  handleMark = (person) => {
    let s1 = { ...this.state };
    s1.editPersonIndex >= 0
      ?
      (s1.customer[s1.editPersonIndex] = person)
      :
      s1.customer.push(person);
    s1.view = 1;

    s1.editPersonIndex = -1;
    this.setState(s1);
  }
  showForm = () => {
    let s1 = { ...this.state };
    s1.view = 2;
    this.setState(s1);
  }

  editPerson = (index) => {
    let s1 = { ...this.state };
    s1.view = 2;
    s1.editPersonIndex = index
    this.setState(s1);
  }


  enterMark = (index) => {
    let s1 = { ...this.state };
    s1.view = 3;
    s1.editPersonIndex = index
    this.setState(s1);
  }
  render() {
    let customers = { name: '', course: '',maths:'',english:'',computer:'',science:'', year: '',};
    let { customer, view, editPersonIndex, viewCourseIndex } = this.state;
    // console.log(customer.length)
    return (
      <div className='container mt-4'>
        <div className='btn btn-primary m-2' onClick={() => this.showForm()}>New Customer</div>
        <div className='btn btn-primary m-2' onClick={() => this.showList()}>List of Customers</div>
        {view === 0 ? (<h2>Welcome to the Student Management System</h2>) : ""}
        {view === 1 ?
          <>
            <div className='container mt-4'>
                  <div className='row bg-dark text-light'>
                    <div className='col-3'>Name</div>
                    <div className='col-2'>Course</div>
                    <div className='col-2'>Year</div>
                    <div className='col-2'>Total Marks</div>
                    <div className='col-3'></div>
                  </div>
                  {customer.map((p1, index) => (
                    <div className='row'>
                      <div className='col-3 border'>{p1.name}</div>
                      <div className='col-2 border'>{p1.course}</div>
                      <div className='col-2 border'>{p1.year}</div>
                      <div className='col-2 border'>
                        {p1.maths== ''||p1.english== ''||p1.science== ''||p1.computer== '' ? "No Data" : (+p1.maths)+(+p1.english)+(+p1.science)+(+p1.computer)}
                      </div>
                      <div className='col-3 border'>
                        {((+p1.maths)+(+p1.english)+(+p1.science)+(+p1.computer)) === 0 ?
                        <>
                        <button className='btn btn-info text-light btn-sm m-1' onClick={() => this.enterMark(index)}>Enter</button>
                        
                        </> :
                        <>
                        <button className='btn btn-info text-light btn-sm m-1' onClick={() => this.enterMark(index)}>Edit</button>

                        </>
                        }
                      </div>
                    </div>
                  ))}
            </div>
          </>
          : view === 2 ?
            <>
              <Counter
                customer={editPersonIndex >= 0 ? customer[editPersonIndex] : customers}
                OnSubmit={this.handlePerson}
                edit={editPersonIndex >= 0}
              />
            </>
            : view === 3 ?
              <>
                <StudentFrom
                  customer={editPersonIndex >= 0 ? customer[editPersonIndex] : customers}
                  onSubmit={this.handleMark}
                  edit={editPersonIndex >= 0}
                />
              </>
              : ""
        }

      </div>
    )
  }
}

export default MyComp