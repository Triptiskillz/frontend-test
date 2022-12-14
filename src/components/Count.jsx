import { Component } from "react";
class Counter extends Component {
    state = { customer: this.props.customer }
    handleChange = (e) => {
      let s1 = { ...this.state }
      s1.customer[e.currentTarget.name] = e.currentTarget.value;
      this.setState(s1);
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.OnSubmit(this.state.customer);
    }
    render() {
      let { name,course,year,total} = this.state.customer
      return (
        <div className='container'>
          {/* <h5>{this.props.edit ?"Edit Course Details":"Enter Details of Course"}</h5> */}
          <div className='form-group'>
            <label>Name</label>
            <input
              type="text"
              className='form-control'
              id="Name"
              name='name'
              value={name}
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Course</label>
            <input
              type="text"
              className='form-control'
              id="course"
              name='course'
              value={course}
              placeholder="Enter course"
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Year</label>
            <input
              type="text"
              className='form-control'
              id="year"
              name='year'
              value={year}
              placeholder="Enter Year"
              onChange={this.handleChange}
            />
          </div>
          <button 
          className='btn btn-primary m-2' 
          onClick={this.handleSubmit}>
            {this.props.edit ?"Update":"Submit"}</button>
        </div>
      )
    }

}
export default Counter
