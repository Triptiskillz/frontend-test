// state = {
//     persons: [
//       { name: "Jack", age: 23 },
//       { name: "Mary", age: 28 }
//     ],
//     view: 0,
//     editPersonIndex:-1,
//   }
//   handlePerson = (person) => {
//     let s1 ={...this.state};
//     s1.editPersonIndex>=0
//     ?
//     (s1.persons[s1.editPersonIndex]=person)
//     :
//     s1.persons.push(person);
//     s1.view =0;
//     s1.editPersonIndex =-1;
//     this.setState(s1);
//   }

//   showForm =()=>{
//     let s1 ={...this.state};
//     s1.view =1;
//     this.setState(s1);
//   }

//   editPerson =(index)=>{
//     let s1 ={...this.state};
//     s1.view=1;
//     s1.editPersonIndex=index
//     this.setState(s1);
//   }
//   render() {
//     let person = { name: '', age: '' };
//     let { persons, view ,editPersonIndex} = this.state;
//     return view === 0 ?
//       (
//         <div className='container'>
//           {persons.map((p1,index) => (
//             <div className='row'>
//               <div className='col-4 border'>{p1.name}</div>
//               <div className='col-4 border'>{p1.age}</div>
//               <div className='col-4 border'>
//                 <button className='btn btn-warning btn-sm' onClick={()=>this.editPerson(index)}>Edit</button>
//               </div>
//             </div>
//           ))}
//           <div className='btn btn-primary' onClick={()=>this.showForm()}>Add New Person</div>
//         </div>
//       )
//       :
//       (<Counter 
//         person={editPersonIndex >=0 ?persons[editPersonIndex]:person} 
//         OnSubmit={this.handlePerson} 
//         edit={editPersonIndex >=0}
//         />
//       );
//   }



//   state = { person: this.props.person }
//   handleChange = (e) => {
//     let s1 = { ...this.state }
//     s1.person[e.currentTarget.name] = e.currentTarget.value;
//     this.setState(s1);
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.OnSubmit(this.state.person);
//   }
//   render() {
//     let { name, age,des ,Fac } = this.state.person
//     return (
//       <div className='container'>
//         <h5>{this.props.edit ?"Edit Details of Person":"Enter Details of Person"}</h5>
//         <div className='form-group'>
//           <label>Name</label>
//           <input
//             type="text"
//             className='form-control'
//             id="name"
//             name='name'
//             value={name}
//             placeholder="Enter name"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className='form-group'>
//           <label>Age</label>
//           <input
//             type="text"
//             className='form-control'
//             id="age"
//             name='age'
//             value={age}
//             placeholder="Enter age"
//             onChange={this.handleChange}
//           />
//         </div>
//         <button 
//         className='btn btn-primary' 
//         onClick={this.handleSubmit}>
//           {this.props.edit ?"Update":"Submit"}</button>
//       </div>
//     )
//   }




// task 3

// state = {
//     persons: [],
//     view: 0,
//     editPersonIndex: -1,
//   }
//   handlePerson = (person) => {

//     let s1 = { ...this.state };
//     s1.editPersonIndex >= 0
//       ?
//       (s1.persons[s1.editPersonIndex] = person)
//       :
//       s1.persons.push(person);
//     s1.view = 0;
//     console.log(s1.persons)
//     s1.editPersonIndex = -1;
//     this.setState(s1);
//   }

//   showForm = () => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     this.setState(s1);
//   }

//   editPerson = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     s1.editPersonIndex = index
//     this.setState(s1);
//   }
//   render() {
//     let person = { name: '' };
//     let { persons, view, editPersonIndex } = this.state;
//     return view === 0 ?
//       (
//         <div className='container mt-4'>
//           <div className='btn btn-primary' onClick={() => this.showForm()}>Add Course</div>
//           <h4>List of Courses</h4>
//           {persons.length == 0 ? <>
//             <p>There are ZERO Courses</p>
//           </>
//             :
//             <>
//               {persons.map((p1, index) => (
//                 <div className='row'>
//                   <ul>
//                     <li>{p1.name}
//                       <button className='btn btn-warning btn-sm' onClick={() => this.editPerson(index)}>Edit</button>
//                     </li>
//                   </ul>
//                 </div>
//               ))}
//             </>
//           }

//         </div>
//       )
//       :
//       (<Counter
//         person={editPersonIndex >= 0 ? persons[editPersonIndex] : person}
//         OnSubmit={this.handlePerson}
//         edit={editPersonIndex >= 0}
//       />
//       );
//   }

// state = { person: this.props.person }
// handleChange = (e) => {
//   let s1 = { ...this.state }
//   s1.person[e.currentTarget.name] = e.currentTarget.value;
//   this.setState(s1);
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.OnSubmit(this.state.person);
// }
// render() {
//   let { name} = this.state.person
//   return (
//     <div className='container'>
//       {/* <h5>{this.props.edit ?"Edit Details of Person":"Enter Details of Person"}</h5> */}
//       <div className='form-group'>
//         <label>Add a Course</label>
//         <input
//           type="text"
//           className='form-control'
//           id="name"
//           name='name'
//           value={name}
//           placeholder="Enter name"
//           onChange={this.handleChange}
//         />
//       </div>
//       <button 
//       className='btn btn-primary' 
//       onClick={this.handleSubmit}>
//         {this.props.edit ?"Update":"Submit"}</button>
//     </div>
//   )
// }


// Task 1.b


// state = {
//     persons: [
//       { courseName: "Javascript", faculty: "Bill", lectures: 20, students: [] },
//       { courseName: "React", faculty: "Steve", lectures: 23, students: [] }

//     ],
//     view: 0,
//     editPersonIndex: -1,
//     viewCourseIndex: -1,
//   }
//   handlePerson = (person) => {

//     let s1 = { ...this.state };
//     s1.editPersonIndex >= 0
//       ?
//       (s1.persons[s1.editPersonIndex] = person)
//       :
//       s1.persons.push(person);
//     s1.view = 0;
//     console.log(s1.persons)
//     s1.editPersonIndex = -1;
//     this.setState(s1);
//   }

//   showForm = () => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     this.setState(s1);
//   }

//   editPerson = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     s1.editPersonIndex = index
//     this.setState(s1);
//   }
//   deletePerson = (index) => {
//     let s1 = { ...this.state };
//     s1.persons.splice(index, 1)
//     this.setState(s1);
//   }
//   viewCourseDetails = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 2;
//     s1.viewCourseIndex = index
//     this.setState(s1);
//   }
//   handleStudent =(stu)=>{
//     let s1 = { ...this.state };
//   s1.persons[s1.viewCourseIndex].students.push(stu)
//   s1.view=2;
//     this.setState(s1);
//   }
//   showCourseDetails = () => {
//     let { persons, viewCourseIndex,view } = this.state;
//     let { courseName, faculty, lectures, students } = persons[viewCourseIndex];
//     return (
//       <div className='container'>
//         <h5>Course Name: {courseName}</h5>
//         <h5>Faculty: {faculty}</h5>
//         <h5>Number of lectures:{lectures}</h5>
//         <h5>Number of students:{students.length}</h5>
//         {students.length === 0 ? (
//           ""
//         ) : (
//           <>{students.map((st) => (
//             <div className='row'>
//               <div className='col-6 border'>{st.id}</div>
//               <div className='col-6 border'>{st.name}</div>
//             </div>
//           ))}</>
//         )}
//         {view===2 ?(
//         <button className='btn btn-primary mt-2'
//           onClick={() => this.showStudentForm()}
//         >
//           Enroll More Students
//         </button>
//         ):(
//           <StudentFrom person={{}} onSubmit={this.handleStudent}/>
//         )}
//         <br />
//         <button className='btn btn-primary mt-2'
//           onClick={() => this.showCourseList()}
//         >
//           Show List of Courses
//         </button>
//       </div>
//     )
//   }
//   showStudentForm = ()=>{
//     let s1 = { ...this.state };
//     s1.view = 3;
//     this.setState(s1);
//   }
//   showCourseList = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 0;
//     s1.viewCourseIndex = -1;
//     this.setState(s1);
//   }
//   render() {
//     let person = { courseName: '', faculty: '', lectures: '',students:[] };
//     let { persons, view, editPersonIndex, viewCourseIndex } = this.state;
//     return view === 0 ?
//       (
//         <div className='container mt-4'>
//           {persons.length == 0 ? <>
//             <p>There are ZERO Courses</p>
//           </>
//             :
//             <>
//               {persons.map((p1, index) => (
//                 <div className='row'>
//                   <div className='col-3 border'>{p1.courseName}</div>
//                   <div className='col-3 border'>{p1.faculty}</div>
//                   <div className='col-1 border'>{p1.lectures}</div>
//                   <div className='col-1 border' onClick={() => this.viewCourseDetails(index)}>{p1.students.length}</div>
//                   <div className='col-4 border'>
//                     <button className='btn btn-warning btn-sm m-1' onClick={() => this.editPerson(index)}>Edit</button>
//                     <button className='btn btn-danger btn-sm' onClick={() => this.deletePerson(index)}>Delete</button>

//                   </div>
//                 </div>
//               ))}
//             </>
//           }
//           <div className='btn btn-primary mt-4' onClick={() => this.showForm()}>Add New Course</div>
//         </div>
//       )
//       : view === 1 ?
//         (<Counter
//           person={editPersonIndex >= 0 ? persons[editPersonIndex] : person}
//           OnSubmit={this.handlePerson}
//           edit={editPersonIndex >= 0}
//         />
//         ) : view === 2 ?
//           this.showCourseDetails()
//           : this.showCourseDetails()
//       ;
//   }
// }
// state = { person: this.props.person }
// handleChange = (e) => {
//   let s1 = { ...this.state }
//   s1.person[e.currentTarget.name] = e.currentTarget.value;
//   this.setState(s1);
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.OnSubmit(this.state.person);
// }
// render() {
//   let { courseName,faculty,lectures} = this.state.person
//   return (
//     <div className='container'>
//       <h5>{this.props.edit ?"Edit Course Details":"Enter Details of Course"}</h5>
//       <div className='form-group'>
//         <label>Course Name</label>
//         <input
//           type="text"
//           className='form-control'
//           id="courseName"
//           name='courseName'
//           value={courseName}
//           placeholder="Enter course name"
//           onChange={this.handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Faculty</label>
//         <input
//           type="text"
//           className='form-control'
//           id="faculty"
//           name='faculty'
//           value={faculty}
//           placeholder="Enter Faculty"
//           onChange={this.handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Lecture</label>
//         <input
//           type="text"
//           className='form-control'
//           id="lectures"
//           name='lectures'
//           value={lectures}
//           placeholder="Enter lecture"
//           onChange={this.handleChange}
//         />
//       </div>
//       <button 
//       className='btn btn-primary' 
//       onClick={this.handleSubmit}>
//         {this.props.edit ?"Update":"Submit"}</button>
//     </div>
//   )
// }

// state = { person: this.props.person }
// handleChange = (e) => {
//     let s1 = { ...this.state }
//     s1.person[e.currentTarget.name] = e.currentTarget.value;
//     this.setState(s1);
// }

// handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.person);
// }
// render() {
//     let { id, name } = this.state.person
//     return (
//         <div className='container'>
//             <h5>Enroll Student in Course</h5>
//             <div className='form-group'>
//                 <label>Student ID</label>
//                 <input
//                     type="text"
//                     className='form-control'
//                     id="id"
//                     name='id'
//                     value={id}
//                     placeholder="Enter Student id"
//                     onChange={this.handleChange}
//                 />
//             </div>
//             <div className='form-group'>
//                 <label> Student Name</label>
//                 <input
//                     type="text"
//                     className='form-control'
//                     id="name"
//                     name='name'
//                     value={name}
//                     placeholder="Enter name"
//                     onChange={this.handleChange}
//                 />
//             </div>
//             <button
//                 className='btn btn-primary'
//                 onClick={this.handleSubmit}>Submit
//                 </button>
//         </div>
//     )
// }