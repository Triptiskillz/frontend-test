// state = {
//     person: {
//         name: "",
//         age: "",
//         country: "",
//         gender: "",
//         passport: "",
//         license: "",
//         city: "",
//         passportNumber: "",
//         designation: "",
//         techsKnown: [],
//     },
//     countries: [
//         "United States of America",
//         "Canada",
//         "India",
//         "United Kingdom",
//     ],
//     countryList: [
//         {
//             country: "United States of America",
//             cities: ['New York', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "Canada",
//             cities: ['Toronto', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "India",
//             cities: ['New Delhi', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "United Kingdom",
//             cities: ['London', 'Los Angeles', 'Seattle', 'San Francisco'],
//         }
//     ],
//     designations: [
//         "Developer",
//         "Senior Developer",
//         "Team Lead",
//         "Architect",
//         "Delivery Manager",
//     ],
//     techs: ["React", "Javascript", "JQuery", "AngularJS"]
// };
// handleChange = (e) => {
//     const { currentTarget: input } = e;
//     let s1 = { ...this.state };
//     input.type === "checkbox"
//         ?input.name==="techsKnown"
//         ?(s1.person.techsKnown =this.updateCBs(input.checked,input.value,s1.person.techsKnown))
//         :(s1.person[input.name] = input.checked)
//         :
//         (s1.person[input.name] = input.value);
//     if (input.name === 'country') s1.person.city = '';
//     if (!s1.person.passport) s1.person.passportNumber = "";
//     this.setState(s1);
// }

// updateCBs =(checked,value,arr)=>{
//     if(checked){
//         arr.push(value)
//     }else{
//         let index =arr.findIndex((e)=>e===value);
//         if (index>=0) arr.splice(index,1)
//     }
//     return arr;
// }

// handleSubmit = (e) => {
//     e.preventDefault();
// }
// render() {
//     let { name,
//         age,
//         country,
//         gender,
//         passport,
//         license,
//         city,
//         passportNumber,
//         designation,
//         techsKnown
//     } = this.state.person;
//     const { countries, countryList, designations, techs } = this.state;
//     const cities = country ? countryList.find((c1) => c1.country === country).cities : [];
//     return (
//         <>
//             <div className='container mt-4'>
//                 <h5>Enter New Details</h5>
//                 <div className='form-group'>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className='form-control'
//                         id="name"
//                         name='name'
//                         value={name}
//                         placeholder="Enter Name"
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label>Age</label>
//                     <input
//                         type="text"
//                         className='form-control'
//                         id="age"
//                         name='age'
//                         value={age}
//                         placeholder="Enter Age"
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label>Country</label>
//                     <select className='form-control'
//                         name='country'
//                         value={country}
//                         onChange={this.handleChange} >
//                         <option disabled value="" >Select the country</option>
//                         {countries.map((c1) => (
//                             <option>
//                                 {c1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 {country ? (<div className='form-group'>
//                     <label>City</label>
//                     <select className='form-control'
//                         name='city'
//                         value={city}
//                         onChange={this.handleChange} >
//                         <option disabled value="" >Select the City</option>
//                         {cities.map((c1) => (
//                             <option>
//                                 {c1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>) : ""}
//                 <div className='form-check form-check-inline'>
//                     <input

//                         className='form-check-input'
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={gender === "Male"}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Male</label>
//                 </div>
//                 <div className='form-check form-check-inline'>
//                     <input

//                         className='form-check-input'
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={gender === "Female"}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Female</label>
//                 </div>
//                 <div className='form-check'>
//                     <input className='form-check-input'
//                         type="checkbox"
//                         name="passport"
//                         checked={passport}
//                         value={passport}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Passport</label>
//                 </div>
//                 {passport ? (
//                     <div className='form-group'>
//                         <label>Passport Number</label>
//                         <input
//                             type="text"
//                             className='form-control'
//                             id="passportNumber"
//                             name='passportNumber'
//                             value={passportNumber}
//                             placeholder="Enter Passport Number"
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                 ) : ("")}
//                 <div className='form-check'>
//                     <input className='form-check-input'
//                         type="checkbox"
//                         name="license"
//                         checked={license}
//                         value={license}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>License</label>
//                 </div>
//                 <label className='form-check-label font-weight-bold'>Choose the Designation</label><br />

//                 {designations.map((d1) => (
//                     <div className='form-check form-check-inline'>
//                         <input
//                             className='form-check-input'
//                             type="radio"
//                             name="designation"
//                             value={d1}
//                             checked={designation === d1}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}

// <br/>
//                 <label className='form-check-label font-weight-bold'>Choose the Technologies</label><br />

//                 {techs.map((d1) => (
//                     <div className='form-check form-check-inline'>
//                         <input
//                             className='form-check-input'
//                             type="checkbox"
//                             name="techsKnown"
//                             value={d1}
//                             checked={techsKnown.findIndex((tech)=>tech===d1)>=0}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}
//                 <br />
//                 <button
//                     className='btn btn-primary m-2'
//                     onClick={this.handleSubmit}>
//                     Submit</button>
//             </div>
//         </>
//     )
// }
// }



//  Task 1

// state = {
//     person: [
//         {
//             name: "Williams",
//             age: 27,
//             country: "",
//             gender: "Male",
//             passport: true,
//             license: "",
//             city: "",
//             passportNumber: "FGRRT54234",
//             designation: "",
//             techsKnown: [],
//         },
//         {
//             name: "Anna",
//             age: 31,
//             country: "",
//             gender: 'Female',
//             passport: false,
//             license: "",
//             city: "",
//             passportNumber: "FGRRT54234",
//             designation: "",
//             techsKnown: [],
//         },
//     ],
//     view: 0,
//     editPersonIndex: -1,
// }

// handleSubmit = (person) => {
//     let s1 = { ...this.state };
//     s1.editPersonIndex >= 0
//         ? (s1.person[s1.editPersonIndex] = person)
//         : s1.person.push(person);
//     s1.view = 0;
//     s1.editPersonIndex = -1;
   
//     this.setState(s1);
// }
// showForm = () => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     s1.editPersonIndex = -1;
//     console.log(s1)
//     this.setState(s1);
// }
// editPerson = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     s1.editPersonIndex = index
//     this.setState(s1);
// }
// render() {
//     let { person, view, editPersonIndex } = this.state;
//     return (
//         <>

//             <div className='container mt-4'>
//                 {view === 0 ? (
//                     <>
//                         {person.map((p1, index) => (

//                             <div className='row'>

//                                 <div className='col-4 border'>{p1.name}</div>
//                                 <div className='col-4 border'>{p1.age}</div>
//                                 <div className='col-4 border'>
//                                     <button className='btn btn-danger text-light btn-sm m-1' onClick={() => this.enterMark(index)}>Delete</button>
//                                     <button className='btn btn-warning text-dark btn-sm m-1' onClick={() => this.editPerson(index)}>Edit</button>

//                                 </div>
//                             </div>
//                         ))}
//                         <div className='btn btn-primary mt-4' onClick={() => this.showForm()}>Add New Person</div>
//                     </>
//                 ) : (
//                     <Child
//                         person={editPersonIndex >= 0 ? person[editPersonIndex] : {}}
//                         onsubmit={this.handleSubmit}
//                         edit={editPersonIndex >= 0}
//                     />
//                 )}


//             </div>
//         </>
//     )
// }
// state = {
//     person: this.props.person,
//     countries: [
//         "United States of America",
//         "Canada",
//         "India",
//         "United Kingdom",
//     ],
//     countryList: [
//         {
//             country: "United States of America",
//             cities: ['New York', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "Canada",
//             cities: ['Toronto', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "India",
//             cities: ['New Delhi', 'Los Angeles', 'Seattle', 'San Francisco'],
//         },
//         {
//             country: "United Kingdom",
//             cities: ['London', 'Los Angeles', 'Seattle', 'San Francisco'],
//         }
//     ],
//     designations: [
//         "Developer",
//         "Senior Developer",
//         "Team Lead",
//         "Architect",
//         "Delivery Manager",
//     ],
//     techs: ["React", "Javascript", "JQuery", "AngularJS"]
// };
// handleChange = (e) => {
//     const { currentTarget: input } = e;
//     let s1 = { ...this.state };
//     console.log(s1.person.techsKnown)
//     input.type === "checkbox"
//         ? input.name === "techsKnown"
//             ? (s1.person.techsKnown = this.updateCBs(input.checked, input.value, s1.person.techsKnown = []))
//             : (s1.person[input.name] = input.checked)
//         :
//         (s1.person[input.name] = input.value);
//     if (input.name === 'country') s1.person.city = '';
//     if (!s1.person.passport) s1.person.passportNumber = "";
//     this.setState(s1);
// }

// updateCBs = (checked, value, arr) => {
//     if (checked) {
//         arr.push(value)
//     } else {
//         let index = arr.findIndex((e) => e === value);
//         if (index >= 0) arr.splice(index, 1)
//     }
//     return arr;
// }

// handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onsubmit(this.state.person)
// }
// render() {
//     let { name,
//         age,
//         country,
//         gender,
//         passport,
//         license,
//         city,
//         passportNumber,
//         designation,
//         techsKnown = [],
//     } = this.state.person;

//     let { countries, countryList, designations, techs } = this.state;
//     let citie = country ? countryList.find((c1) => c1.country === country).cities : [];
//     // console.log(citie)
//     return (
//         <>
//             <div className='container mt-4'>
//                 <h5>Enter New Details</h5>
//                 <div className='form-group'>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className='form-control'
//                         id="name"
//                         name='name'
//                         value={name}
//                         placeholder="Enter Name"
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label>Age</label>
//                     <input
//                         type="text"
//                         className='form-control'
//                         id="age"
//                         name='age'
//                         value={age}
//                         placeholder="Enter Age"
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label>Country</label>
//                     <select className='form-control'
//                         name='country'
//                         value={country}
//                         onChange={this.handleChange} >
//                         <option disabled value="" >Select the country</option>
//                         {countries.map((c1) => (
//                             <option>
//                                 {c1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 {country ? (<div className='form-group'>
//                     <label>City</label>
//                     <select className='form-control'
//                         name='city'
//                         value={city}
//                         onChange={this.handleChange} >
//                         <option disabled value="" >Select the City</option>
//                         {citie.map((c1) => (
//                             <option>
//                                 {c1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>) : ""}
//                 <div className='form-check form-check-inline'>
//                     <input

//                         className='form-check-input'
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={gender === "Male"}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Male</label>
//                 </div>
//                 <div className='form-check form-check-inline'>
//                     <input

//                         className='form-check-input'
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={gender === "Female"}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Female</label>
//                 </div>
//                 <div className='form-check'>
//                     <input className='form-check-input'
//                         type="checkbox"
//                         name="passport"
//                         checked={passport}
//                         value={passport}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>Passport</label>
//                 </div>
//                 {passport ? (
//                     <div className='form-group'>
//                         <label>Passport Number</label>
//                         <input
//                             type="text"
//                             className='form-control'
//                             id="passportNumber"
//                             name='passportNumber'
//                             value={passportNumber}
//                             placeholder="Enter Passport Number"
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                 ) : ("")}
//                 <div className='form-check'>
//                     <input className='form-check-input'
//                         type="checkbox"
//                         name="license"
//                         checked={license}
//                         value={license}
//                         onChange={this.handleChange}
//                     />
//                     <label className='form-check-label'>License</label>
//                 </div>
//                 <label className='form-check-label font-weight-bold'>Choose the Designation</label><br />

//                 {designations.map((d1) => (
//                     <div className='form-check form-check-inline'>
//                         <input
//                             className='form-check-input'
//                             type="radio"
//                             name="designation"
//                             value={d1}
//                             checked={designation === d1}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}

//                 <br />
//                 <label className='form-check-label font-weight-bold'>Choose the Technologies</label><br />

//                 {techs.map((d1) => (
//                     <div className='form-check form-check-inline'>
//                         <input
//                             className='form-check-input'
//                             type="checkbox"
//                             name="techsKnown"
//                             value={d1}
//                             // {console.log(techsKnown.findIndex((tech) => tech === d1) >= 0)}
//                             checked={techsKnown.findIndex((tech) => tech === d1) >= 0}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}
//                 <br />
//                 <button
//                     className='btn btn-primary m-2'
//                     onClick={this.handleSubmit}>
//                     Submit</button>
//             </div>
//         </>
//     )
// }


//task1 

// import React, { Component } from 'react'
// import Child from "./Child"
// class Parent extends Component {
//     state = {
//         laptops: [
//             {
//                 model: "AX4581",
//                 brand: "Acer",
//                 ram: "4GB",
//                 hardDisk: "500GB",
//                 rating: "3",
//                 processor: "i3",
//             },
//             {
//                 model: "HB2881",
//                 brand: "HP",
//                 ram: "4GB",
//                 hardDisk: "250GB",
//                 rating: "4",
//                 processor: "i3",
//             },
//             {
//                 model: "DM811",
//                 brand: "Dell",
//                 ram: "4GB",
//                 hardDisk: "1TB",
//                 rating: "3",
//                 processor: "i3",
//             },
//             {
//                 model: "AP629",
//                 brand: "Acer",
//                 ram: "6GB",
//                 hardDisk: "1TB",
//                 rating: "2",
//                 processor: "i3",
//             },
//             {
//                 model: "AT820",
//                 brand: "Acer",
//                 ram: "8GB",
//                 hardDisk: "1TB",
//                 rating: "4",
//                 processor: "i5",
//             },
//             {
//                 model: "HK008",
//                 brand: "HP",
//                 ram: "6GB",
//                 hardDisk: "250GB",
//                 rating: "3",
//                 processor: "i5",
//             },
//             {
//                 model: "MAir11",
//                 brand: "Apple",
//                 ram: "4GB",
//                 hardDisk: "128GB",
//                 rating: "4",
//                 processor: "i5",
//             },
//             {
//                 model: "MPro24X",
//                 brand: "Apple",
//                 ram: "8GB",
//                 hardDisk: "256GB",
//                 rating: "4",
//                 processor: "i7",
//             },
//             {
//                 model: "DL390",
//                 brand: "Dell",
//                 ram: "6GB",
//                 hardDisk: "500GB",
//                 rating: "3",
//                 processor: "i3",
//             },
//             {
//                 model: "AM954",
//                 brand: "Acer",
//                 ram: "8GB",
//                 hardDisk: "1TB",
//                 rating: "3",
//                 processor: "i7",
//             },
//             {
//                 model: "AB234",
//                 brand: "Acer",
//                 ram: "4GB",
//                 hardDisk: "250GB",
//                 rating: "2",
//                 processor: "i3",
//             },
//             {
//                 model: "HC874",
//                 brand: "HP",
//                 ram: "8GB",
//                 hardDisk: "1TB",
//                 rating: "1",
//                 processor: "i7",
//             },
//         ],
//         optionsArray: {
//             brand: ["Acer", "HP", "Dell", "Apple"],
//             ram: ["4GB", "6GB", "8GB"],
//             rating: ["1", "2", "3", "4"],
//             processor: ["i3", "i5", "i7"],
//             hardDisk: ["128GB","250GB","256GB","500GB","1TB"],
//         },
//         optionsSel: {
//             brand: '',
//             ram: '',
//             processor: [],
//             rating: [],
//             hardDisk:[]
//         },
//     }
//     showLaptops = () => {
//         const { laptops, optionsSel } = this.state
//         const { brand, ram, processor, rating,hardDisk } = optionsSel
//         let laptop1 = processor.length > 0 ?
//             laptops.filter((lt) => processor.findIndex((br) => br == lt.processor) >= 0)
//             : laptops;

//             let laptop2 = hardDisk.length > 0 ?
//             laptop1.filter((lt) => hardDisk.findIndex((br) => br == lt.hardDisk) >= 0)
//             : laptop1;

//             let laptop3 = rating.length > 0 ?
//             laptop2.filter((lt) => rating.findIndex((br) => br == lt.rating) >= 0)
//             : laptop2;

//             let laptop4 = brand.length > 0 ?
//             laptop3.filter((lt) => lt.brand === brand)
//             : laptop3;

//             let laptop5 = ram.length > 0 ?
//             laptop4.filter((lt) => lt.ram === ram)
//             : laptop4;

//         return (
//             <div className='container'>
//                 <h4>Selected Laptops</h4>
//                 {laptop5.map((lt) => (
//                     <div className='row'>
//                         <div className='col-2 border'>{lt.model}</div>
//                         <div className='col-2 border'>{lt.brand}</div>
//                         <div className='col-2 border'>{lt.ram}</div>
//                         <div className='col-2 border'>{lt.hardDisk}</div>
//                         <div className='col-2 border'>{lt.rating}</div>
//                         <div className='col-2 border'>{lt.processor}</div>

//                     </div>
//                 ))}
//             </div>
//         )
//     }
//     handleChangeOption = (optionsSel) => {
//         let s1 = { ...this.state };
//         s1.optionsSel = optionsSel;
//         this.setState(s1);
//     }
//     handleClear = () => {
//         let s1 = { ...this.state };
//         s1.optionsSel = {
//             brand: '',
//             ram: '',
//             processor: [],
//             rating: [],
//             hardDisk:[]

//         }
//         this.setState(s1);
//     }
//     render() {
//         let { laptops, optionsArray, optionsSel } = this.state;
//         return (
//             <>

//                 <div className='container mt-4'>

//                     <div className='row'>
//                         <div className='col-3 border bg-light'>
//                             <Child
//                                 optionsSel={optionsSel}
//                                 optionsArray={optionsArray}
//                                 onChangeOption={this.handleChangeOption}
//                                 onClear={this.handleClear}
//                             />
//                         </div>
//                         <div className='col-9 border'>{this.showLaptops()}</div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default Parent

// import React, { Component } from 'react'

// class Child extends Component {
//     handleChange = (e) => {
//         let s1 = { ...this.props.optionsSel };
//         console.log(s1)
//         let { currentTarget: input } = e;
//         input.name === "processor"
//             ? (s1.processor = this.updateCBs(input.checked, input.value, s1.processor))
//             : input.name === "hardDisk"
//                 ? (s1.hardDisk = this.updateCBs(input.checked, input.value, s1.hardDisk))
//                 : input.name === "rating"
//                     ? (s1.rating = this.updateCBs(input.checked, input.value, s1.rating))
//                     : (s1[input.name] = input.value);
//         this.props.onChangeOption(s1);

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
//     render() {
//         let { optionsSel, optionsArray } = this.props

//         return (
//             <>
//                 <div className='container'>
//                     <h6> Choose Options</h6>
//                     <button className='btn btn-warning btn-sm'
//                         onClick={this.props.onClear}>Clear All</button>
//                     <br />
//                     {this.showsetect(
//                         "Brand",
//                         optionsArray.brand,
//                         "brand",
//                         optionsSel.brand
//                     )}
//                     {this.showsetect(
//                         "RAM",
//                         optionsArray.ram,
//                         "ram",
//                         optionsSel.ram
//                     )}

//                     {this.showCheckboxes(
//                         "Processor",
//                         optionsArray.processor,
//                         "processor",
//                         optionsSel.processor
//                     )}

//                     {this.showCheckboxes(
//                         "HardDisk",
//                         optionsArray.hardDisk,
//                         "hardDisk",
//                         optionsSel.hardDisk
//                     )}
//                     {this.showCheckboxes(
//                         "Rating",
//                         optionsArray.rating,
//                         "rating",
//                         optionsSel.rating
//                     )}
//                 </div>
//             </>
//         )
//     }

//     showCheckboxes = (label, arr, name, selArr) => {
//         // console.log(label, arr, name, selArr)
//         return (
//             <>
//                 <label className='form-check-label font-weight-bold'>{label}</label><br />
//                 {arr.map((d1, index) => (
//                     <div className='form-check'>
//                         <input
//                             className='form-check-input'
//                             type="checkbox"
//                             name={name}
//                             value={d1}
//                             checked={selArr.findIndex((t) => t === d1) >= 0}
//                             onChange={this.handleChange}
//                         />
//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}
//             </>
//         )
//     }
//     showsetect = (label, arr, name, selArr) => {
//         let sel = selArr ? 'selected' : ''
//         return (
//             <>
//                 <div className='form-group'>
//                     <label>{label}</label>
//                     <select className='form-control'
//                         name={name}
//                         value={selArr}
//                         onChange={this.handleChange}
//                     >
//                         <option value="" >Select the country</option>
//                         {arr.map((c1) => (
//                             <>
//                                 <option
//                                     value={c1}
//                                 >
//                                     {c1}
//                                 </option>
//                             </>

//                         ))}
//                     </select>
//                 </div>
//             </>
//         )

//     }
//     showRodios = (label, arr, name, selArr) => {
//         // console.log(label, arr, name, selArr)
//         return (
//             <>
//                 <label className='form-check-label weight-bold'>{label}</label><br />
//                 {arr.map((d1) => (
//                     <div className='form-check'>
//                         <input
//                             className='form-check-input'
//                             type="radio"
//                             name={name}
//                             value={d1}
//                             checked={selArr === d1}
//                             onChange={this.handleChange}
//                         />

//                         <label className='form-check-label'>{d1}</label>
//                     </div>))}
//             </>
//         )
//     }
// }

// export default Child