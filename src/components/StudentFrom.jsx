import { Component } from "react";
class StudentFrom extends Component {
    state = { customer: this.props.customer }
    handleChange = (e) => {
        let s1 = { ...this.state }
        s1.customer[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.customer);
    }
    render() {
      let { maths,english,computer,science} = this.state.customer
        return (
            <div className='container'>
                <h5>Enter marks for {this.props.customer.name}</h5>
                <div className='form-group'>
                    <label>Maths</label>
                    <input
                        type="text"
                        className='form-control'
                        id="maths"
                        name='maths'
                        value={maths}
                        placeholder="Enter Maths Mark"
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label> English</label>
                    <input
                        type="text"
                        className='form-control'
                        id="english"
                        name='english'
                        value={english}
                        placeholder="Enter English marks"
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label> Computer</label>
                    <input
                        type="text"
                        className='form-control'
                        id="computer"
                        name='computer'
                        value={computer}
                        placeholder="Enter computer marks"
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Science</label>
                    <input
                        type="text"
                        className='form-control'
                        id="science"
                        name='science'
                        value={science}
                        placeholder="Enter science marks"
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    className='btn btn-primary m-2'
                    onClick={this.handleSubmit}>Submit
                    </button>
            </div>
        )
    }

}
export default StudentFrom
