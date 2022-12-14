// import React, { Component } from 'react'
// import Child1 from "./Child1.jsx"
// class Parent1 extends Component {
//     state = {
//         person: [
//             {
//                 name: "Williams",
//                 age: 27,
//                 country: "",
//                 gender: "Male",
//                 passport: true,
//                 license: "",
//                 city: "",
//                 passportNumber: "FGRRT54234",
//                 designation: "",
//                 techsKnown: [],
//                 workEx:"",
//                 manager :'',
//                 server:[]
//             },
//             {
//                 name: "Anna",
//                 age: 31,
//                 country: "",
//                 gender: 'Female',
//                 passport: false,
//                 license: "",
//                 city: "",
//                 passportNumber: "FGRRT54234",
//                 designation: "",
//                 techsKnown: [],
//                 workEx:"",
//                 manager :'',
//                 server:[],
//             },
//         ],
//         view: 0,
//         editPersonIndex: -1,
//     }

//     handleSubmit = (person) => {
//         let s1 = { ...this.state };
//         s1.editPersonIndex >= 0
//             ? (s1.person[s1.editPersonIndex] = person)
//             : s1.person.push(person);
//         s1.view = 0;
//         s1.editPersonIndex = -1;

//         this.setState(s1);
//     }
//     showForm = () => {
//         let s1 = { ...this.state };
//         s1.view = 1;
//         s1.editPersonIndex = -1;
//         console.log(s1)
//         this.setState(s1);
//     }
//     editPerson = (index) => {
//         let s1 = { ...this.state };
//         s1.view = 1;
//         s1.editPersonIndex = index
//         this.setState(s1);
//     }
//     render() {
//         let { person, view, editPersonIndex } = this.state;
//         return (
//             <>

//                 <div className='container mt-4'>
//                     {view === 0 ? (
//                         <>
//                             {person.map((p1, index) => (

//                                 <div className='row'>

//                                     <div className='col-4 border'>{p1.name}</div>
//                                     <div className='col-4 border'>{p1.age}</div>
//                                     <div className='col-4 border'>
//                                         <button className='btn btn-danger text-light btn-sm m-1' onClick={() => this.enterMark(index)}>Delete</button>
//                                         <button className='btn btn-warning text-dark btn-sm m-1' onClick={() => this.editPerson(index)}>Edit</button>

//                                     </div>
//                                 </div>
//                             ))}
//                             <div className='btn btn-primary mt-4' onClick={() => this.showForm()}>Add New Person</div>
//                         </>
//                     ) : (
//                         <Child1
//                             person={editPersonIndex >= 0 ? person[editPersonIndex] : {}}
//                             onsubmit={this.handleSubmit}
//                             edit={editPersonIndex >= 0}
//                         />
//                     )}


//                 </div>
//             </>
//         )
//     }
// }
// export default Parent1

// import React, { Component } from 'react'

// class Child1 extends Component {
//     state = {
//         person: this.props.person,
//         countries: [
//             "United States of America",
//             "Canada",
//             "India",
//             "United Kingdom",
//         ],
//         errors: {},
//         managerList: ["Meg Smith", "Bill Watson", "Tim Gates", "George Cook", "Larry Gomes"],
//         workExp: ['Fresher', '0-1 years', '1-3 years', '3-5 years', '5+ years'],
//         countryList: [
//             {
//                 country: "United States of America",
//                 cities: ['New York', 'Los Angeles', 'Seattle', 'San Francisco'],
//             },
//             {
//                 country: "Canada",
//                 cities: ['Toronto', 'Los Angeles', 'Seattle', 'San Francisco'],
//             },
//             {
//                 country: "India",
//                 cities: ['New Delhi', 'Los Angeles', 'Seattle', 'San Francisco'],
//             },
//             {
//                 country: "United Kingdom",
//                 cities: ['London', 'Los Angeles', 'Seattle', 'San Francisco'],
//             }
//         ],
//         servers: [
//             "Development", "Deployment", "Alpha Test", "Beta Test", "BackUp"
//         ],
//         designations: [
//             "Developer",
//             "Senior Developer",
//             "Team Lead",
//             "Architect",
//             "Delivery Manager",
//         ],
//         techs: ["React", "Javascript", "JQuery", "AngularJS"]
//     };
//     handleChange = (e) => {
//         const { currentTarget: input } = e;
//         let s1 = { ...this.state };
//         console.log(input.type)
//         // input.type === "checkbox"
//         input.name === "techsKnown"
//             ? (s1.person.techsKnown = this.updateCBs(input.checked, input.value, s1.person.techsKnown))
//             : input.name === "server"
//                 ? (s1.person.server = this.updateCBs(input.checked, input.value, s1.person.server))

//                 // (s1.person[input.name] = input.checked)
//                 : (s1.person[input.name] = input.value);
//         if (input.name === 'country') s1.person.city = '';
//         if (!s1.person.passport) s1.person.passportNumber = "";
//         this.handleValidate(e);
//         this.setState(s1);
//     }

//     updateCBs = (checked, value, arr) => {
//         if (checked) {
//             arr.push(value)
//         } else {
//             let index = arr.findIndex((e) => e === value);
//             if (index >= 0) arr.splice(index, 1)
//         }
//         return arr;
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         let errors = this.validateAll();
//         if (this.isValid(errors)) {
//             this.props.onsubmit(this.state.person)

//         } else {
//             let s1 = { ...this.state }
//             s1.errors = errors;
//             this.setState(s1)
//         }
//     }

//     handleValidate = (e) => {
//         let { currentTarget: input } = e;
//         let s1 = { ...this.state };
//         switch (input.name) {
//             case "name":
//                 s1.errors.name = this.validateName(input.value);
//                 break;
//             case "age":
//                 s1.errors.age = this.validateAge(input.value);
//                 break;
//             case "country":
//                 s1.errors.country = this.validateCountry(input.value);
//                 break;
//             default:
//                 break;
//         }
//         this.setState(s1)

//     }
//     isValid = (errors) => {
//         let keys = Object.keys(errors);
//         let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0)
//         return count === 0;
//     }
//     isFormValid = () => {
//         let errors = this.validateAll();
//         return this.isValid(errors);
//     }
//     validateAll = () => {
//         let { name, age, country } = this.state.person
//         let errors = {};
//         errors.name = this.validateName(name);
//         errors.age = this.validateAge(age);
//         errors.country = this.validateCountry(country);

//         return errors;
//     }
//     validateName = (name) =>
//         !name
//             ? "Name must be entered"
//             : name.length < 5
//                 ? "Name should have minimum 5 characters"
//                 : "";
//     validateAge = (age) =>
//         !age
//             ? "Age must be entered"
//             : age < 21 || age > 75
//                 ? "Age should be between 21 and 75"
//                 : "";
//     validateCountry = (country) =>
//         !country
//             ? "Country must be selected"
//             : "";

//     render() {
//         let { name,
//             age,
//             country,
//             gender,
//             passport,
//             license,
//             city,
//             passportNumber,
//             designation,
//             techsKnown = [],
//             workEx,
//             manager,
//             server = [],
//         } = this.state.person;

//         let { errors, countries, countryList, designations, techs, workExp, servers, managerList } = this.state;
//         let citie = country ? countryList.find((c1) => c1.country === country).cities : [];
//         // console.log(citie)
//         return (
//             <>
//                 <div className='container mt-4'>
//                     <h5>Enter New Details</h5>
//                     <div className='form-group'>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             className='form-control'
//                             id="name"
//                             name='name'
//                             value={name}
//                             placeholder="Enter Name"
//                             onChange={this.handleChange}
//                             onBlur={this.handleValidate}
//                         />
//                         {errors.name ? (<span className='text-danger'>{errors.name}</span>) : ("")}
//                     </div>
//                     <div className='form-group'>
//                         <label>Age</label>
//                         <input
//                             type="text"
//                             className='form-control'
//                             id="age"
//                             name='age'
//                             value={age}
//                             placeholder="Enter Age"
//                             onChange={this.handleChange}
//                             onBlur={this.handleValidate}

//                         />
//                         {errors.age ? (<span className='text-danger'>{errors.age}</span>) : ("")}

//                     </div>
//                     {/* <div className='form-group'>
//                         <label>Work experience</label>
//                         <select className='form-control'
//                             name='workEx'
//                             value={workEx}
//                             onChange={this.handleChange} >
//                             <option disabled value="" >Select the year</option>
//                             {workExp.map((c1) => (
//                                 <option>
//                                     {c1}
//                                 </option>
//                             ))}
//                         </select>
//                     </div> */}
//                     <div className='form-group'>
//                         <label>Country</label>
//                         <select className='form-control'
//                             name='country'
//                             value={country}
//                             onChange={this.handleChange}
//                             onBlur={this.handleValidate}

//                         >
//                             <option  value="">Select the country</option>
//                             {countries.map((c1) => (
//                                 <option value={c1}>
//                                     {c1}
//                                 </option>
//                             ))}
//                         </select>
//                         {errors.country ? (<span className='text-danger'>{errors.country}</span>) : ("")}

//                     </div>
//                     {/* {country ? (<div className='form-group'>
//                         <label>City</label>
//                         <select className='form-control'
//                             name='city'
//                             value={city}
//                             onChange={this.handleChange} >
//                             <option disabled value="" >Select the City</option>
//                             {citie.map((c1) => (
//                                 <option>
//                                     {c1}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>) : ""}
//                     <div className='form-check form-check-inline'>
//                         <input

//                             className='form-check-input'
//                             type="radio"
//                             name="gender"
//                             value="Male"
//                             checked={gender === "Male"}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>Male</label>
//                     </div>
//                     <div className='form-check form-check-inline'>
//                         <input

//                             className='form-check-input'
//                             type="radio"
//                             name="gender"
//                             value="Female"
//                             checked={gender === "Female"}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>Female</label>
//                     </div>
//                     <div className='form-check'>
//                         <input className='form-check-input'
//                             type="checkbox"
//                             name="passport"
//                             checked={passport}
//                             value={passport}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>Passport</label>
//                     </div>
//                     {passport ? (
//                         <div className='form-group'>
//                             <label>Passport Number</label>
//                             <input
//                                 type="text"
//                                 className='form-control'
//                                 id="passportNumber"
//                                 name='passportNumber'
//                                 value={passportNumber}
//                                 placeholder="Enter Passport Number"
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     ) : ("")}
//                     <div className='form-check'>
//                         <input className='form-check-input'
//                             type="checkbox"
//                             name="license"
//                             checked={license}
//                             value={license}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>License</label>
//                     </div>
//                     <label className='form-check-label font-weight-bold'>Choose the Designation</label><br />

//                     {designations.map((d1) => (
//                         <div className='form-check form-check-inline'>
//                             <input
//                                 className='form-check-input'
//                                 type="radio"
//                                 name="designation"
//                                 value={d1}
//                                 checked={designation === d1}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))}

//                     <br />
//                     <label className='form-check-label font-weight-bold'>Choose the Technologies</label><br />

//                     {techs.map((d1) => (
//                         <div className='form-check form-check-inline'>
//                             <input
//                                 className='form-check-input'
//                                 type="checkbox"
//                                 name="techsKnown"
//                                 value={d1}
//                                 // {console.log(techsKnown.findIndex((tech) => tech === d1) >= 0)}
//                                 checked={techsKnown.findIndex((tech) => tech === d1) >= 0}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))}
//                     <br />
//                     <label className='form-check-label font-weight-bold'>Choose the manager</label><br />

//                     {managerList.map((d1) => (
//                         <div className='form-check form-check-inline'>
//                             <input
//                                 className='form-check-input'
//                                 type="radio"
//                                 name="manager"
//                                 value={d1}
//                                 checked={manager === d1}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))}

//                     <br />
//                     <label className='form-check-label font-weight-bold'>Choose the servers </label><br />

//                     {servers.map((d1) => (
//                         <div className='form-check form-check-inline'>
//                             <input
//                                 className='form-check-input'
//                                 type="checkbox"
//                                 name="server"
//                                 value={d1}
//                                 // {console.log(techsKnown.findIndex((tech) => tech === d1) >= 0)}
//                                 checked={server.findIndex((tech) => tech === d1) >= 0}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))} */}
//                     <br />
//                     <button
//                         className='btn btn-primary m-2'
//                         onClick={this.handleSubmit}
//                         disabled={!this.isFormValid()}
//                     >
//                         Submit</button>
//                 </div>
//             </>
//         )
//     }
// }
// export default Child1