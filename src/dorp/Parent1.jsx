import React, { Component } from 'react'
import Child1 from "./Child1.jsx"
import Navbar from './Navbar.jsx';
class Parent1 extends Component {
    state = {
        person: [
            {
                name: "Williams",
                description: 'Hello Everyone',
                productCode: 'ACE1243',
                category: "Food",
                price: "5",
                discount: "10%",
            },
            {
                name: "Sam",
                description: 'Nice to meet you',
                productCode: 'WE12QE',
                category: "Electronics",
                price: "50",
                discount: "15%",
            },
        ],
        view: 0,
        editPersonIndex: -1,
    }

    handleSubmit = (person) => {
        let s1 = { ...this.state };
        s1.editPersonIndex >= 0
            ? (s1.person[s1.editPersonIndex] = person)
            : s1.person.push(person);
        s1.view = 0;
        s1.editPersonIndex = -1;

        this.setState(s1);
    }
    showForm = () => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editPersonIndex = -1;
        console.log(s1)
        this.setState(s1);
    }
    editPerson = (index) => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editPersonIndex = index
        this.setState(s1);
    }
    reomePersone = (id) => {
        let s1 = { ...this.state };
        s1.person.splice(id, 1)
        s1.view = 0;
        this.setState(s1);
    }
    render() {
        let { person, view, editPersonIndex } = this.state;
        return (
            <>
                <Navbar count={person.length} />

                <div className='container mt-4'>
                    {view === 0 ? (
                        <>
                            {person.map((p1, index) => (

                                <div className='row'>

                                    <div className='col-2 border'>{p1.name}</div>
                                    <div className='col-2 border'>{p1.description}</div>
                                    <div className='col-2 border'>{p1.productCode}</div>
                                    <div className='col-2 border'>{p1.category}</div>

                                    <div className='col-1 border'>{p1.price}</div>

                                    <div className='col-1 border'>{p1.discount}</div>



                                    <div className='col-2 border'>
                                        <button className='btn btn-danger text-light btn-sm m-1' onClick={() => this.reomePersone(index)}>Delete</button>
                                        <button className='btn btn-warning text-dark btn-sm m-1' onClick={() => this.editPerson(index)}>Edit</button>

                                    </div>
                                </div>
                            ))}
                            <div className='btn btn-primary mt-4' onClick={() => this.showForm()}>Add New Person</div>
                        </>
                    ) : (
                        <Child1
                            person={editPersonIndex >= 0 ? person[editPersonIndex] : {}}
                            onsubmit={this.handleSubmit}
                            edit={editPersonIndex >= 0}
                        />
                    )}


                </div>
            </>
        )
    }
}
export default Parent1