// state = {
//     counters: [
//       { id: 12, alphabet: "A", count: 1 },
//       { id: 23, alphabet: "B", count: 2 },
//       { id: 7, alphabet: "C", count: 0 },
//       { id: 16, alphabet: "D", count: 0 },
//     ],
//     data: '',
//   }
//   handleDelect = (id) => {
//     let s1 = { ...this.state };
//     let index = s1.counters.findIndex((c1) => c1.id === id);
//     s1.counters.splice(index, 1);
//     this.setState(s1);
//   }
//   handleReset = () => {
//     let s1 = { ...this.state };
//     const arr1 = s1.counters.map((c1) => ({
//       id: c1.id,
//       alphabet: c1.alphabet,
//       count: 0,

//     }))
//     s1.counters = arr1;
//     s1.data=""
//     this.setState(s1)
//   }
//   handleIncrement = (id) => {
//     let s1 = { ...this.state };
//     let counter = s1.counters.find((c1) => c1.id === id);
//     counter.count++;
//     s1.data += counter.alphabet;
//     this.setState(s1);
//   }

//   render() {
//     const { counters,data } = this.state;
//     return (
//       <>
//         {counters.map((c1) => (
//           <Counter counter={c1} onDelete={this.handleDelect} onIncrement={this.handleIncrement} />
//         ))}
//         <button className='btn btn-primary' onClick={() => this.handleReset()}>
//           Reset All
//         </button>
//         <h6>Alphabets ={data}</h6>
//       </>
//     )
//   }

//   state = {
//     value: this.props.counter.count,
// };
// render() {
//     const { counter,onDelete,onIncrement} = this.props;
//     const { alphabet,count,id}=counter;
//     return (
//         <>
//             <h6>
//                 Conuter= {alphabet}, Count={count}
//             </h6>
//             <button className="btn btn-primary btn-sm m-2"
//                 onClick={() =>onIncrement(id)}
//             >
//                 Increment
//             </button>
//             <button className="btn btn-danger btn-sm m-2"
//                 onClick={() => onDelete(id)}
//             >
//                 Delete
//             </button>
//         </>
//     )
// }


// state = {
//     photos: [
//       {
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jLNb2Uyqar4vLjYu7Ms3YXLIRLcZch7koA&usqp=CAU',
//         likes: 23, dislike: 2, myOption: ''
//       },
//       {
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jLNb2Uyqar4vLjYu7Ms3YXLIRLcZch7koA&usqp=CAU',
//         likes: 23, dislike: 44, myOption: ''
//       },
//       {
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jLNb2Uyqar4vLjYu7Ms3YXLIRLcZch7koA&usqp=CAU',
//         likes: 2, dislike: 4, myOption: 'like'
//       },
//       {
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jLNb2Uyqar4vLjYu7Ms3YXLIRLcZch7koA&usqp=CAU',
//         likes: 23, dislike: 4, myOption: 'dislike'
//       },
//     ],
//   }
//   handleLike = (index) => {
//     let s1 = { ...this.state };
//     let photo = s1.photos[index];
//     let { likes, dislike, myOption } = photo
//     if (myOption === 'like') {
//       likes--;
//       myOption = "";
//     } else if (myOption === 'dislike') {
//       likes++;
//       dislike--;
//       myOption = 'like'
//     } else {
//       likes++;
//       myOption = 'like'
//     }
//     photo.likes = likes;
//     photo.dislike = dislike;
//     photo.myOption = myOption;
//     this.setState(s1)
//   }

//   handleDislike = (index) => {
//     let s1 = { ...this.state };
//     let photo = s1.photos[index];
//     let { likes, dislike, myOption } = photo
//     if (myOption === 'dislike') {
//       dislike--;
//       myOption = "";
//     } else if (myOption === 'like') {
//       likes--;
//       dislike++;
//       myOption = 'dislike'
//     } else {
//       dislike++;
//       myOption = 'dislike'
//     }
//     photo.likes = likes;
//     photo.dislike = dislike;
//     photo.myOption = myOption;
//     this.setState(s1)
//   }
//   handleDeleted = (id) => {
//     let s1 = { ...this.state };
//     // let index = s1.photos.findIndex((c1) => c1.id === id);
//     s1.photos.splice(id, 1);
//     this.setState(s1);
//   }
//   render() {
//     let { photos } = this.state;
//     return (
//       <>
//         <div className='container'>
//           <div className='row'>
//             {photos.map((p1, index) => (
//               <Counter
//                 photo={p1}
//                 index={index}
//                 onLike={this.handleLike}
//                 onDislike={this.handleDislike}
//                 onDeleted={this.handleDeleted} />
//             ))}
//           </div>
//         </div>
//       </>
//     )
//   }
//   bgColor = (param) =>
//   param === 'like'
//       ? "bg-success"
//       : param === "dislike"
//           ? "bg-warning"
//           : "bg-light";

// render() {
//   console.log('hello')
//   let { photo, onLike, onDislike, index,onDeleted } = this.props;
//   console.log(photo)
//   let { img, likes, dislike, myOption } = photo;
//   return (
//       <>
//           <div className={"col-4 border text-center " + this.bgColor(myOption)}>
//               <img src={img}></img>
//               <br />
//               <i className={myOption === "like" ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
//                   onClick={() => onLike(index)}
//               >
//                   {likes}
//               </i>
//               <i className={myOption === "dislike" ? "fas fa-thumbs-down" : "far fa-thumbs-down"}
//                   onClick={() => onDislike(index)}>
//                   {dislike}
//               </i>
//               <i class="fas fa-trash-alt"   onClick={() => onDeleted(index)}></i>
//           </div>
//       </>
//   )
// }

// state = {
//     visitors: [
//       { id: 101, name: 'Jack', status: 'Outside' },
//       { id: 102, name: 'Steve', status: 'Outside' },
//       { id: 103, name: 'Anna', status: 'Outside' },
//       { id: 104, name: 'Kathy', status: 'Outside' },
//       { id: 105, name: 'Meg', status: 'Outside' },
//       { id: 106, name: 'Bod', status: 'Outside' },
//     ],
//     queue:[],
//   };
//   getIndsideCount =()=>
//     this.state.visitors.reduce(
//       (acc,curr)=>acc+(curr.status==="Inside"?1:0),0
//     )
  
//   handleEnter=(id)=>{
//     let s1={...this.state};
//     let vis =s1.visitors.find((v1)=>v1.id===id);
//     let InsideCount =this.getIndsideCount()
//     if(InsideCount ===2){
//       vis.status="Waiting";
//       s1.queue.push(vis)
//     }else vis.status ="Inside";
//     this.setState(s1)
//   }
//   handleExit=(id)=>{
//     let s1={...this.state};
//     let vis =s1.visitors.find((v1)=>v1.id===id);
//     vis.status ="Outside"
//     if(s1.queue.length>0){
//       let v1 =s1.queue.shift();
//       v1.status="Inside"
//     }
//     this.setState(s1)
//   }
//   render() {
//     const { visitors,queue } = this.state;
//     return (
//       <div className='container'>
//         <h4>Inside ={this.getIndsideCount()} Queue={queue.length}</h4>
//         {visitors.map((v1) => (
//           <Counter visitor={v1}
//           onEnter={this.handleEnter}
//           onExit={this.handleExit} />
//         ))}
//         <h4>
//           Queue
//         </h4>
//         {queue.map((q1)=>(
//           <li>{q1.name}</li>
//         ))}
//       </div>
//     )
//   }
// getButton = (s, onEnter, onExit, id) =>
// s === 'Outside' ? (<button className="btn btn-success btn-sm"
//     onClick={() => onEnter(id)}
// >Enter</button>)
//     : s === 'Inside' ? (<button className="btn btn-warning btn-sm"
//         onClick={() => onExit(id)}
//     >Exit</button>)
//         : s === 'Waiting' ? (<button className="btn btn-warning btn-sm"
//             onClick={() => onExit(id)}
//         >Exit</button>)
//             : ("");

// getRowColor = (s) =>
// s === "Outside"
//     ? "bg-dark text-white"
//     : s === "Inside"
//         ? "bg-secondary text-white"
//         : "bg-light"

// render() {
// let { visitor, onEnter, onExit } = this.props;
// let { id, name, status } = visitor;
// return (
//     <>
//         <div className={"row border m-1 " + this.getRowColor(status)}>
//             <div className="col-3">{id}</div>
//             <div className="col-3">{name}</div>
//             <div className="col-3">{status}</div>
//             <div className="col-3">{this.getButton(status, onEnter, onExit, id)}</div>
//         </div>
//     </>
// )
// }


// Task 2


// myComp part

// state = {
//     PlayerSystem: [
//       { score: 11, name: 'Jack' },
//       { score: 22, name: 'Steve' },
//       { score: 23, name: 'Anna' },
//       { score: 41, name: 'Kathy' },
//       { score: 15, name: 'Meg' },
//       { score: 26, name: 'Bod' },
//     ],
//   };
//   handleAdd = (id) => {
//     let s1 = { ...this.state };
//     let scores = s1.PlayerSystem.find((c1,index) => index === id);
//     scores.score++;
//     console.log(scores)
//     this.setState(s1);
//   }
//   render() {
//     const { PlayerSystem } = this.state;
//     return (
//       <div className='container'>
//         <h4>List of Names</h4>
//         {PlayerSystem.map((v1, index) => (
//           <Counter list={v1}
//             index={index}
//             onAdd={this.handleAdd}
//           />
//         ))}

//       </div>
//     )
//   }
// Count Part
//   render() {
//     let { list, onAdd,index } = this.props;
//     let { score, name } = list;
//     return (
//         <>
//             <div className="bg-light p-1 col-6 m-2">
//                 <p className="text-primary">Name: {name}</p>
//                 <p className="text-primary">Score: {score}</p>
//                 <button className="btn btn-success btn-sm"
//                     onClick={() => onAdd(index)}
//                 >1 Point</button>
//             </div>

//         </>
//     )
// }



// Task 3 


// myComp part
// render() {
//     let count = 10;
//     let qty = 24;
//     return (
//       <>
//         <Counter
//           count={count} qty={qty}
//         />
//         <div className='container'>
//           <h6>Count={count}</h6>
//           <h6>Quantity={qty}</h6>
//         </div>
//       </>
//     )
//   }
// Count Part
// render() {
//     let { count, qty } = this.props;
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <a className="navbar-brand" href="#">MySystem</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Products <span className="badge badge-pill badge-success">{count}</span></a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Quantity <span className="badge badge-pill badge-success">{count}</span></a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>

//         </>
//     )
// }



// Task 4


// myComp part



// state = {
//     Book: [
//       { title: "Harry Potter", name: 'Jack' },
//       { title: "War and peace", name: 'Steve' },
//       { title: "Malgudi Days", name: 'Anna' },
//       { title: "Gitan jail", name: 'Kathy' },
//     ],
//     issue: []
//   };
//   handleIssue = (id) => {
//     let s1 = { ...this.state };
//     let vis = s1.Book.find((v1, index) => index === id);
//     s1.issue.push(vis)
//     s1.Book.splice(vis, 1)
//     this.setState(s1)
//   }
//   onReturn =(id)=>{
//     let s1 = { ...this.state };
//     let vis = s1.Book.find((v1, index) => index === id);
//     s1.Book.push(vis)
//     s1.issue.splice(vis, 1)
//     this.setState(s1)
//   }
//   render() {
//     let { Book, issue } = this.state
//     return (
//       <>


//         <div className='container'>
//           <Navbar count ={issue.length} booklen ={Book.length}/>
//           <h3 className='text-center'>Book in Library</h3>
//           <div className='row   ml-2 '>
//             {Book.length != 0 ?
//               <>
//                 {Book.map((b, index) => (
//                   <Counter
//                     book={b}
//                     index={index}
//                     onIssue={this.handleIssue}
//                   />
//                 ))}
//               </>
//               : <><h4>Library is Empty</h4></>
//             }

//             <h4>Issued Books</h4>
//             {issue.map((i, index) => (
//               <li> {i.title}
//                 <button type="button"
//                   onClick={() => this.onReturn(index)}
//                 >Return</button></li>
//             ))}
//           </div>
//         </div>
//       </>
//     )
//   }

//   // Count Part
//   render() {
//     let { book,onIssue,index } = this.props;
//     let { title, name } = book;
//     return (
//         <>
//             <div className="col-5 p-3 m-1 text-center bg-danger text-white">
//                 <h5>{title}</h5>
//                 <p>{name}</p>
//                 <button type="button" className="btn btn-light"
//                 onClick={() => onIssue(index)}
//                 >Issue</button>
//             </div>

//         </>
//     )
// }




// state = {
//     mobiles: [
//       { title: "Redmi 6", gb: 'Upto 63GB', des: 'Dual Rear Cam | 3000mAh', price: 7499 },
//       { title: "Realme 3", gb: 'Upto 4GB', des: 'Dual Rear Cam | 4230mAh', price: 8999 },
//       { title: "Honor 7S", gb: '2GB|16GB', des: 'Face Unlock | 3020mAh', price: 5499 },
//       { title: "Samsung J6", gb: '3GB| 32GB', des: '14.22cm HD | 3000mAh', price: 6999 },
//       { title: "Moto One", gb: 'Upto3 GB', des: 'Extra 2000 off on Exchange', price: 6999 },
//       { title: "Nokia 6.1", gb: 'Upto3 GB', des: 'Full HD Display | SD 630', price: 6999 },
//     ],
//     cart: []
//   };
//   handleCart = (id) => {
//     let s1 = { ...this.state };
//     let vis = s1.mobiles.find((v1, index) => index === id);

//     let vis1 = s1.cart.find((v1, index) => v1.title === vis.title);
//     console.log(vis1)
//     if (vis1) {
//       vis1.qty++;

//     } else {

//       let json = { ...vis, qty: 1 }
//       s1.cart.push(json)
//     }

//     this.setState(s1)
//   }
//   onRemove = (id) => {
//     let s1 = { ...this.state };
//     s1.cart.splice(id, 1)
//     this.setState(s1)
//   }
//   render() {
//     let { mobiles, cart } = this.state
//     let { qty } = cart
//     let total = cart.reduce((acc, curr) => {
//       return acc + curr.qty
//     }, 0)
//     let totalamt = cart.reduce((acc, curr) => {
//       return acc + curr.price
//     }, 0)
//     return (
//       <>


// Task 5


// myComp part


//         <div className='container'>
//           <h3 className='text-center'>Exciting Deals on Mobiles</h3>
//           <div className='row   ml-2 '>

//             {mobiles.map((b, index) => (
//               <Counter
//                 book={b}
//                 index={index}
//                 onCart={this.handleCart}
//               />
//             ))}


//             <h4>Cart</h4>
//             {cart.length != 0 ?
//               <>
//                 {cart.map((i, index) => (
//                   <li> {i.title} , Quantity:{i.qty}
//                     <button type="button"
//                       onClick={() => this.onRemove(index)}
//                     >Remove from Cart</button></li>
//                 ))}

//                 <p>Number of item in cart: {total} </p>
//                 <p>Value of Cart = {totalamt * total}</p>
//               </>
//               : <><h6>Cart is Empty</h6></>
//             }

//           </div>

//         </div>
//       </>
//     )
//   }


//   // Count Part

// render() {
//     let { book, onCart, index } = this.props;
//     let { title, gb, des, price } = book;
//     return (
//         <>
//             <div className="col-3 p-3 m-1 text-center bg-success text-white">
//                 <h5>{title}({gb})</h5>
//                 <p>{des}</p>
//                 <button type="button" className="btn btn-light"
//                     onClick={() => onCart(index)}
//                 >Just {price}</button>
//             </div>

//         </>
//     )
// }


// state = {
//     email:
//       [{ id: 121, sent: false, from: "tweets@twitter.com", to: "jack@test.com", subject: "18 tweets from those you follow", text: "Go to your twitter page and see the tweets from those you follow.", folder: "Social", read: true, },
//       { id: 141, sent: true, from: "jack@test.com", to: "mary@test.com", subject: "Bug 461 in Customer Flow", text: "When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.", folder: "Sent", read: false, },
//       { id: 158, sent: false, from: "email@facebook.com", to: "jack@test.com", subject: "New post from William Jones", text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.", folder: "Social", read: true, },
//       { id: 177, sent: true, from: "jack@test.com", to: "williams@test.com", subject: "Movie tomorrow", text: "Avengers Endgame is releasing tomorrow. Wanna see.", folder: "Sent", read: false, },
//       { id: 179, sent: false, from: "williams@test.com", to: "jack@test.com", subject: "Re: Movie tomorrow", text: "The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.", folder: "Inbox", read: false, },
//       { id: 194, sent: false, from: "retweet@twitter.com", to: "jack@test.com", subject: "Your tweet has been retweeted by Thomas", text: "Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.", folder: "Social", read: false, },
//       { id: 204, sent: true, from: "mary@test.com", to: "jack@test.com", subject: "To do on Friday", text: "Test the bugs on the employee form in Release 0.7.9 and fix them.", folder: "Inbox", read: false, },
//       { id: 255, sent: true, from: "mary@test.com", to: "jack@test.com", subject: "Release 0.8.4 deployed", text: "Release 0.8.4 has been deployed in the test environment.", folder: "Inbox", read: false, },
//       { id: 278, sent: false, from: "mary@test.com", to: "jack@test.com", subject: "Re: Bug 461 in Customer Flow", text: "The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary", folder: "Inbox", read: false, },
//       { id: 281, sent: true, from: "jack@test.com", to: "mary@test.com", subject: "Re: Re: Bug 461 in Customer Flow", text: "Bug 461 has been closed.\nRegards,\nJack", folder: "Sent", read: false, },
//       { id: 289, sent: false, from: "email@facebook.com", to: "jack@test.com", subject: "5 Shares, 2 Posts from your friends", text: "Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.", folder: "Social", read: true, },]
//     , active: 0,
//     show: true,
//     hide: false,
//     info: {}
//   };


//   filter = (num) => {

//     let str = { ...this.state };
//     let a = str.email.filter((e) => {
//       if (num == 'All') {
//         str.active = 0;
//         return e
//       } else if (num == 'Inbox' && e.folder == num) {
//         str.active = 1;
//         return e
//       } else if (num == 'Social' && e.folder == num) {
//         str.active = 2;
//         return e
//       }
//       else if (num == 'Sent' && e.folder == num) {
//         str.active = 3;
//         return e
//       }
//     })

//     str.email = a
//     this.setState(str)
//   }
//   handleDetail = (id) => {
//     let str = { ...this.state };
//     let vis = str.email.find((v1, index) => index === id);
//     str.info = vis;
//     str.show = false
//     this.setState(str)
//   }
//   handleBack = () => {
//     let str = { ...this.state };
//     // str.info = "";
//     str.show = true
//     this.setState(str)
//   }
//   handleRemove = (id) => {
//     let str = { ...this.state };
//     let vis = str.email.find((v1, index) => v1.id === id);
//     str.email.splice(vis, 1)
//     str.show = true
//     this.setState(str)
//   }
//   render() {
//     let { email, active, show, info } = this.state
//     let { id, sent, from, to, subject, text, folder, read } = info;

//     let active1 = active == 0 ? "text-dark bg-light p-2" : "text-light p-2"
//     let active2 = active == 1 ? "text-dark bg-light p-2" : "text-light p-2"
//     let active3 = active == 2 ? "text-dark bg-light p-2  " : "text-light p-2"
//     let active4 = active == 3 ? "text-dark bg-light p-2" : "text-light p-2"
//     let count1 = 0
//     let count = 0
//     let a = email.map((e) => {
//       return e.sent == true ? count1++ : '';
//     })
//     let a1 = email.map((e) => {
//       return count++;
//     })
//     return (
//       <>
//         <Navbar count={count} count1={count1} />

//         <div className='container mt-4'>

//           <div className='row'>
//             <div class="col-2 pl-4  bg-secondary text-light">
//               <h4>Folder</h4>

//               <p className={active1} onClick={() => { this.filter('All') }}>All</p><br />
//               <p className={active2} onClick={() => { this.filter('Inbox') }}>Inbox</p><br />
//               <p className={active3} onClick={() => { this.filter('Social') }}>Social</p><br />
//               <p className={active4} onClick={() => { this.filter('Sent') }}>Sent</p>
//             </div>
//             <div class="col-10">
//               {show ?
//                 <>
//                   {email.map((b, index) => (
//                     <ProductTable
//                       email={b}
//                       index={index}
//                       onDetail={this.handleDetail}
//                     />
//                   ))}</>
//                 :
//                 <>

//                   <div class="card rounded-0">
//                     <div class="d-flex justify-content-between">
//                       <div class="mr-auto p-2">
//                         <i onClick={() => { this.handleBack() }} class='fas fa-arrow-left'></i>
//                       </div>
//                       <div class="p-2">
//                         <i onClick={() => { this.handleRemove(id) }} class='fas fa-trash-alt float-right'></i>
//                       </div>
//                     </div>
//                     <hr />
//                     <div class="card-body">
//                       From: {from}
//                       <br />
//                       To: {to}
//                       <br />
//                       Subject: {subject}
//                       <br />
//                       {text}
//                       <br />
//                       Regards,
//                       <br />
//                       {from.substring(0, from.indexOf('@'))}
//                     </div>

//                   </div>
//                 </>}

//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }

// render() {
//     let { email, index,onDetail } = this.props;
//     let { id, sent, from, to, subject, text, folder, read  } = email;
//     return (
//         <>
//             <div className='row mb-1 border p-1 bg-light' onClick={() => onDetail(index)} >
//                 {sent == true ?
//                     <>
//                         <div className='col-2 p-2'><i class='fas fa-envelope'></i></div>
//                         <div className='col-3 p-2 fw-bold'>To: {to}</div>
//                         <div className='col-7 p-2 fw-bold'>{subject}</div>
//                     </>
//                     :
//                     <>

//                         <div className='col-2 p-2 '><i class="fas fa-envelope-open"></i></div>
//                         <div className='col-3 p-2 ' >{from}</div>
//                         <div className='col-7 p-2'>{subject}</div>


//                     </>
//                 }

//             </div>
//         </>
//     )
// }