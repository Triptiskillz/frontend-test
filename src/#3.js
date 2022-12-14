// state = {
//     persons: [
//       {
//         name: 'Jack',
//         age: 25,
//         skills: "Javascripti,React",
//         email: 'Jack@email.com',
//         mobile: '123874567',

//       },
//       {
//         name: 'Anna',
//         age: 65,
//         skills: "SQL",
//         email: 'Anna@email.com',
//         mobile: '09876567',

//       },
//       {
//         name: 'Steve',
//         age: 35,
//         skills: "Javascripti,NodeJS",
//         email: 'Steve@email.com',
//         mobile: '456784567',
//       }
//     ],
//     indexPerson: -1,
//     showcontact: false,
//   }
//   showIndex = (index) => {
//     let s1 = { ...this.state }
//     s1.indexPerson = index;
//     s1.showcontact =false;
//     this.setState(s1)
//   }
//   showPerson = () => {
//     const { persons, indexPerson, showcontact } = this.state;

//     return (
//       <>
//         Name:{persons[indexPerson].name}<br />
//         Age:{persons[indexPerson].age}<br />
//         Skills:{persons[indexPerson].skills}<br />
//         <button className='btn btn-primary m-2' onClick={() => this.showcontactD()}>Contact Info</button><br />
//         {showcontact ? <>
//           Email:{persons[indexPerson].email}<br />
//           Phone :{persons[indexPerson].mobile}
//         </> : ""}
//       </>

//     )
//   }
//   showcontactD = () => {
//     let s1 = { ...this.state };
//     s1.showcontact = true
//     this.setState(s1)
//   }
//   render() {
//     let { persons, indexPerson } = this.state
//     // console.log(persons)
//     return (
//       <React.Fragment>
//         {persons.map((p1, index) => (
//           <button className='btn btn-primary m-2' onClick={() => this.showIndex(index)}>
//             {p1.name}
//           </button>
//         ))}
//         <br />
//         {indexPerson >= 0 ? this.showPerson() : ''}
//       </React.Fragment>
//     );
//   }

// state = {
//     list1: ['Bod', 'Tim', 'Julia', 'Steve', 'Edwards', 'Geroge', 'Kathy'],
//     list2: [],
//   }
//   list1click =(index)=>{
//     let s1 ={...this.state};
//     let name =s1.list1.splice(index,1);
//     s1.list2.push(name);
//     this.setState(s1);
//   }
//   list2click =(index)=>{
//     let s1 ={...this.state};
//     let name =s1.list2.splice(index,1);
//     s1.list1.push(name);
//     this.setState(s1);
//   }
//   render() {
//     let { list1, list2 } = this.state
//     // console.log(persons)
//     return (
//       <React.Fragment>
//         <div className='row'>
//           <div className='col-4 border'>
//             <h4>List 1</h4>
//             {list1.map((p1, index) => (
//              <span onClick={()=>this.list1click(index)}>
//              {p1}<br/>
//              </span>
//             ))}
//           </div>
//           <div className='col-4 border'>
//           <h4>List 2</h4>
//             {list2.map((p1, index) => (
//              <span>
//              {p1}<button  className='btn btn-danger m-2 btn-sm'  onClick={()=>this.list2click(index)}>x</button>
//              <br/>
//              </span>
//             ))}
//           </div>
//         </div>

//       </React.Fragment>
//     );
//   }

// state = {
//     products: [
//       { name: 'Pepsi', price: 20 },
//       { name: 'Dairy Milk', price: 40 },
//       { name: 'Maggi', price: 50 },
//       { name: 'Snickers', price: 100 },

//     ],
//     cart: [],
//   }
//   showCart = (index) => {
//     const { cart } = this.state;
//     if (cart.length === 0) return <h4>Cart is Empty</h4>;
//     return (
//       <ul>
//         {cart.map((item) => {
//           let { name, price, qty } = item
//           return (<li>{name}, price={price}, qty={qty}</li>)
//         })}
//       </ul>
//     )
//   }
//   addcart = (index) => {
//     let s1 = { ...this.state };
//     let pr = s1.products[index];
//     let x1 = s1.cart.find(c1 => c1.name === pr.name);
//     x1 ? x1.qty = x1.qty + 1 : s1.cart.push({ ...pr, qty: 1 })
//     this.setState(s1)
//   }
//   showProduct = () => {
//     const { products } = this.state;
//     return (
//       <>
//         <div className='row bg-dark text-white'>
//           <div className='col-4'>Name</div>
//           <div className='col-4'>Price</div>
//           <div className='col-4'></div>
//         </div>
//         {products.map((pr, index) => {
//           const { name, price } = pr;
//           return (
//             <>
//               <div className='row border'>
//                 <div className='col-4'>{name}</div>
//                 <div className='col-4'>{price}</div>
//                 <div className='col-4'>
//                   <button className='btn btn-primary btn-sm' onClick={() => this.addcart(index)}>Add</button>
//                 </div>
//               </div>
//             </>
//           )
//         })}
//       </>
//     )
//   }
//   render() {
//     let { list1, list2 } = this.state
//     // console.log(persons)
//     return (
//       <React.Fragment>
//         {this.showCart()}
//         {this.showProduct()}

//       </React.Fragment>
//     );
//   }
// state = {
//     txt: ''
//   }

//   txt = (str) => {
//     let s1 = { ...this.state };
//     s1.txt += str
//     this.setState(s1)
//   }
//   txt1 = () => {
//     let s1 = { ...this.state };
//     s1.txt += 'A'
//     this.setState(s1)
//   }
//   txt2 = () => {
//     let s1 = { ...this.state };
//     s1.txt += 'B'
//     this.setState(s1)
//   }
//   txt3 = () => {
//     let s1 = { ...this.state };
//     s1.txt += 'C'
//     this.setState(s1)
//   }
//   txt4 = () => {
//     let s1 = { ...this.state };
//     s1.txt += 'D'
//     this.setState(s1)
//   }
//   render() {

//     return (
//       <React.Fragment>
//         {/* <button className='btn btn-primary m-2' onClick={() => this.txt1()}>A</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt2()}>B</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt3()}>C</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt4()}>D</button><br /> */}

//         <button className='btn btn-primary m-2' onClick={() => this.txt('A')}>A</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('B')}>B</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('C')}>C</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('D')}>D</button><br />
//         <br />
//         Text = {this.state.txt}
//       </React.Fragment>
//     );
//   }


// state = {
//     txt: ''
//   }

//   txt = (str) => {
//     let s1 = { ...this.state };
//     s1.txt += str
//     this.setState(s1)
//   }
//   BackSpace =()=>{
//     console.log('hello')
//     let s1 = { ...this.state };
//     s1.txt = s1.txt.substring(0, s1.txt.length - 1)
//     this.setState(s1)
//   }
//   BackSpace =()=>{
//     let s1 = { ...this.state };
//     s1.txt = s1.txt.substring(0, s1.txt.length - 1)
//     this.setState(s1)
//   }
//   Clear =()=>{
//     let s1 = { ...this.state };
//     s1.txt = s1.txt.substring(0, s1.length - 1)
//     this.setState(s1)
//   }
//   // txt1 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'A'
//   //   this.setState(s1)
//   // }
//   // txt2 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'B'
//   //   this.setState(s1)
//   // }
//   // txt3 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'C'
//   //   this.setState(s1)
//   // }
//   // txt4 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'D'
//   //   this.setState(s1)
//   // }
//   render() {

//     return (
//       <React.Fragment>
//         {/* <button className='btn btn-primary m-2' onClick={() => this.txt1()}>A</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt2()}>B</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt3()}>C</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt4()}>D</button><br /> */}

//         <button className='btn btn-primary m-2' onClick={() => this.txt('A')}>A</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('B')}>B</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('C')}>C</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt('D')}>D</button><br />
//         <br />
//         Text = {this.state.txt}
//         <br/>
//         <button className='btn btn-primary m-2' onClick={() => this.BackSpace()}>BackSpace</button>
//         <button className='btn btn-primary m-2' onClick={() => this.Clear()}>Clear</button>
//       </React.Fragment>
//     );
//   }


// state = {
//     score1: 0,
//     score2: 0
//   }

//   total = (ch,str) => {
//     let s1 = { ...this.state };
//     if(ch=="A")
//     s1.score1 += str
//     else{
//       s1.score2 += str
//     }
//     this.setState(s1)
//   }
//   Clear = () => {
//     let s1 = { ...this.state };
//     s1.score1 = 0 
//     s1.score2 = 0 
//     this.setState(s1)
//   }
//   // txt1 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'A'
//   //   this.setState(s1)
//   // }
//   // txt2 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'B'
//   //   this.setState(s1)
//   // }
//   // txt3 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'C'
//   //   this.setState(s1)
//   // }
//   // txt4 = () => {
//   //   let s1 = { ...this.state };
//   //   s1.txt += 'D'
//   //   this.setState(s1)
//   // }
//   render() {

//     return (
//       <React.Fragment>
//         {/* <button className='btn btn-primary m-2' onClick={() => this.txt1()}>A</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt2()}>B</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt3()}>C</button>
//         <button className='btn btn-primary m-2' onClick={() => this.txt4()}>D</button><br /> */}
//         <div className='container'>
//           <div className='row'>
//             <div className='col-6 text-center'>
//               <p>Team A</p>
//               <h2 className='mt-4'>{this.state.score1}</h2>
//               <button className='btn btn-warning m-2 btn-sm' onClick={() => this.total('A',3)}>+3 POINTS</button>
//               <br /><button className='btn btn-warning m-2 btn-sm' onClick={() => this.total('A',2)}>+2 POINTS</button>
//               <br /><button className='btn btn-warning m-2 btn-sm' onClick={() => this.total('A',1)}>FREE THROW</button>

//             </div>
//             <div className='col-6 text-center'>
//               <p>Team B</p>
//               <h2 className='mt-4'>{this.state.score2}</h2>
//               <button className='btn btn-warning m-2 btn-sm' onClick={() => this.total("B",3)}>+3 POINTS</button>
//               <br /><button className='btn btn-warning m-2 btn-sm' onClick={() => this.total('B',2)}>+2 POINTS</button>
//               <br /><button className='btn btn-warning m-2 btn-sm' onClick={() => this.total('B',1)}>FREE THROW</button>

//             </div>
//             <button className='btn btn-warning m-2 btn-sm' onClick={() => this.Clear()}>RESET</button>

//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }


// prod: [{ name: "Pepsi", sales: 10 },
// { name: "Coke", sales: 7 },
// { name: "Maggi", sales: 0 },
// { name: "Gems", sales: 15 },
// { name: "5Star", sales: 0 }],
// showtotal: false,
// showbest: false
// }
// sell = (str) => {
// alert(str + " Sold")
// }
// Return = (str) => {
// alert(str + " Returned")
// }
// showtotalValue = () => {
// let s1 = { ...this.state };
// s1.showtotal = true
// s1.showbest = false
// this.setState(s1)
// }
// showbestValue = () => {
// let s1 = { ...this.state };
// s1.showbest = true
// s1.showtotal = false
// this.setState(s1)
// }
// total = () => {
// const { prod } = this.state;
// return prod.reduce((acc, curr) => acc + curr.sales, 0)
// };
// render() {
// let { prod, showtotal, showbest } = this.state
// let { name, sales } = prod
// let totalNum = this.total()
// const prodsort = [...prod];
// prodsort.sort((n1, n2) => {
//   let n3 = n1.sales
//   let n4 = n2.sales
//   if (n3 > n4)
//     return -1
//   else if (n3 < n4)
//     return 1
//   else
//     return 0
// })
// console.log(prodsort)
// return (
//   <React.Fragment>
//     <div className='container'>
//       <h2>Sales Details</h2>
//       <button className='btn btn-primary m-2 btn-sm' onClick={() => this.showtotalValue()}>Total Sales</button>
//       <button className='btn btn-primary m-2 btn-sm' onClick={() => this.showbestValue()}>Best Seller</button>
//       <br />
//       {prod.map((e) => {
//         return (
//           <>
//             <ul>
//               <li>Name: {e.name}, Sales:{e.sales}
//                 <button className='btn btn-primary m-2 btn-sm' onClick={() => this.sell(e.name)}>Sell</button>
//                 {e.sales > 0 ? <> <button className='btn btn-danger m-2 btn-sm' onClick={() => this.Return(e.name)}>Return</button></> : ""}
//               </li>

//             </ul>

//           </>
//         )
//       })}

//       {

//         showtotal ? <><h2>Total sales ={totalNum}</h2></> : ''
//       }
//       {

//         showbest ? <><h2>Best sales ={prodsort[0].sales}</h2></> : ''
//       }
//     </div>
//   </React.Fragment>
// );
// }


// state = {
//     products: [{ name: "Perk", price: 10, sales: 7 },
//     { name: "5Star", price: 15, sales: 9 },
//     { name: "Pepsi", price: 20, sales: 20 },
//     { name: "Maggi", price: 12, sales: 15 },
//     { name: "Coke", price: 20, sales: 50 },
//     { name: "Lindt", price: 80, sales: 4 }],
//     title: "Not Sorted",
//     show: false

//   }
//   sortvalue = (colno) => {
//     let prod = { ...this.state };
//     console.log(prod)
//     if (colno == 0) {
//       prod.name = prod.products.sort((p1, p2) => p1.name.localeCompare(p2.name))
//       prod.title = "Sorted by Name"
//     } else if (colno == 1) {
//       prod.price = prod.products.sort((p1, p2) => (p1.price) - (p2.price))
//       prod.title = "Sorted by Price"
//     } else if (colno == 2) {
//       prod.sales = prod.products.sort((p1, p2) => (p1.sales) - (p2.sales))
//       prod.title = "Sorted by Sales"
//     } else {
//       prod.products = prod.products.sort((p1, p2) => {
//         let value1 = p1.sales * p1.price;
//         let value2 = p2.sales * p2.price;
//         if (value1 > value2)
//           return -1
//         if (value1 < value2)
//           return 1
//         else
//           return 0
//       })
//       prod.title = "Sorted by value"
//     }

//     this.setState(prod)
//   }
//   filter = (num) => {

//     let str = { ...this.state };
//     let a = str.products.filter((e) => {
//       let value = e.sales * e.price
//       if (num == 15 && e.price >= num) {
//         str.title = 'Price>=15'
//         return e.price
//       } else if (num == 10 && e.sales >= num) {
//         str.title = 'Sales>=10'
//         return e.sales
//       } else if (num == 100 && value >= num) {
//         str.title = 'Value>=100'
//         return e
//       }

//     })

//     console.log(a)
//     str.products = a
//     str.show = true
//     this.setState(str)
//   }
//   render() {
//     let { products, title, show } = this.state
//     return (
//       <React.Fragment>
//         <div className='container'>
//           {
//             show ? <><h4 className='p-3'>Filter: {title}</h4></> : <><h4 className='p-3'>{title}</h4></>
//           }
//           {/* <h4 className='p-3'>{title}</h4> */}
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter(15)}>Price>=15</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter(10)}>Sales>=10</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter(100)}>Value>=100</button>

//           <div className='row border bg-dark  text-white'>
//             <div className='col-3 border' onClick={() => this.sortvalue(0)}>Name</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(1)} >Price</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(2)} >Sales</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(3)}>Value</div>
//           </div>
//           {products.map((e) => {
//             let { name, price, sales } = e
//             return (
//               <>
//                 <div className='row border'>
//                   <div className='col-3 border'>{name}</div>
//                   <div className='col-3 border'>{price}</div>
//                   <div className='col-3 border'>{sales}</div>
//                   <div className='col-3 border'>{price * sales}</div>
//                 </div>

//               </>
//             )
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }



// state = {
//     priceData: [
//       { name: "Perk", category: "Food", oldPrice: 10, newPrice: 10 }, { name: "5Star", category: "Food", oldPrice: 15, newPrice: 12 }, { name: "Pepsi", category: "Drink", oldPrice: 20, newPrice: 22 }, { name: "Maggi", category: "Food", oldPrice: 12, newPrice: 15 }, { name: "Coke", category: "Drink", oldPrice: 20, newPrice: 20 },
//       { name: "Gems", category: "Food", oldPrice: 10, newPrice: 10 }, { name: "7Up", category: "Drink", oldPrice: 15, newPrice: 17 }, { name: "Lindt", category: "Food", oldPrice: 80, newPrice: 90 }, { name: "Nutties", category: "Food", oldPrice: 20, newPrice: 18 }, { name: "Slice", category: "Drink", oldPrice: 18, newPrice: 16 }
//     ],
//     title: "Not Sorted",
//     show: false

//   }
//   sortvalue = (colno) => {
//     let prod = { ...this.state };
//     if (colno == 0) {
//       prod.name = prod.priceData.sort((p1, p2) => p1.name.localeCompare(p2.name))
//       prod.title = "Sorted by Name"
//     } else if (colno == 1) {
//       prod.category = prod.priceData.sort((p1, p2) => p1.category.localeCompare(p2.category))
//       prod.title = "Sorted by Category"
//     } else if (colno == 2) {
//       prod.oldPrice = prod.priceData.sort((p1, p2) => (p1.oldPrice) - (p2.oldPrice))
//       prod.title = "Sorted by old Price"
//     } else {
//       prod.newPrice = prod.priceData.sort((p1, p2) => (p1.newPrice) - (p2.newPrice))
//       prod.title = "Sorted by new Price"
//     }

//     this.setState(prod)
//   }
//   filter = (num) => {

//     let str = { ...this.state };
//     let a = str.priceData.filter((e) => {
//       if (num == 'Food' && e.category == num) {
//         str.title = 'Category: Food'
//         return e
//       } else if (num == 'Drink' && e.category == num) {
//         str.title = 'Category: Drink'
//         return e
//       } else if (num == 'Increase' && e.oldPrice < e.newPrice) {
//         str.title = 'Price Increase'
//         return e
//       }
//       else if (num == 'Decrease' && e.oldPrice > e.newPrice) {
//         str.title = 'Price Decrease '
//         return e
//       }
//       else if (num == 'Same' && e.oldPrice == e.newPrice) {
//         str.title = 'Price Same'
//         return e
//       }
//     })

//     console.log(a)
//     str.priceData = a
//     this.setState(str)
//   }
//   render() {
//     let { priceData, title, show } = this.state
//     return (
//       <React.Fragment>
//         <div className='container'>
//           {/* {
//             show ? <><h4 className='p-3'>Filter: {title}</h4></> : <><h4 className='p-3'>{title}</h4></>
//           } */}
//           <h4 className='p-3'>{title}</h4>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter('Food')}>Food</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter('Drink')}>Drink</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter('Increase')}>Increase</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter('Decrease')}>Decrease</button>
//           <button className='btn btn-primary m-2 btn-sm' onClick={() => this.filter('Same')}>Same</button>



//           <div className='row border bg-dark  text-white'>
//             <div className='col-3 border' onClick={() => this.sortvalue(0)}>Name</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(1)} >Category</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(2)} >Old Price</div>
//             <div className='col-3 border' onClick={() => this.sortvalue(3)}>New Price</div>
//           </div>
//           {priceData.map((e) => {
//             let { name, category, oldPrice, newPrice } = e
//             return (
//               <>
//                 <div className='row border'>
//                   <div className='col-3 border'>{name}</div>
//                   <div className='col-3 border'>{category}</div>
//                   <div className='col-3 border'>{oldPrice}</div>
//                   <div className='col-3 border'>{newPrice}</div>
//                 </div>

//               </>
//             )
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }


// state = {
//     Data: [
//       { name: "Terminator", category: "Action", stock: 6, rate: 4.1 },
//       { name: "Die Hard", category: "Thriller", stock: 5, rate: 2.3 },
//       { name: "Get Out", category: "Comedy", stock: 2, rate: 4.5 },
//       { name: "Trip to Italy", category: "Thriller", stock: 7, rate: 3.5 },
//       { name: "Airplane", category: "Action", stock: 2, rate: 2.6 },
//       { name: "Wedding Crashers", category: "Comedy", stock: 1, rate: 1.5 },
//       { name: "Gone Girl", category: "Action", stock: 5, rate: 4.7 },
//     ],


//   }
//   sortvalue = (colno) => {
//     let prod = { ...this.state };
//     if (colno == 0) {
//       prod.name = prod.Data.sort((p1, p2) => p1.name.localeCompare(p2.name))

//     } else if (colno == 1) {
//       prod.category = prod.Data.sort((p1, p2) => p1.category.localeCompare(p2.category))
//     } else if (colno == 2) {
//       prod.stock = prod.Data.sort((p1, p2) => (p1.stock) - (p2.stock))

//     } else {
//       prod.rate = prod.Data.sort((p1, p2) => (p1.rate) - (p2.rate))

//     }

//     this.setState(prod)
//   }
//   delete = (index) => {
//     let s1 = { ...this.state };
//     s1.Data.splice(index, 1);
//     this.setState(s1);
//   }
//   render() {
//     let { Data, title, show } = this.state
//     return (
//       <React.Fragment>
//         <div className='container'>
//           {/* {
//             show ? <><h4 className='p-3'>Filter: {title}</h4></> : <><h4 className='p-3'>{title}</h4></>
//           } */}
//           {
//             Data.length == 0 ?
//               <>    <h4 className='p-3'>There are no movies</h4></>
//               :
//               <>    <h4 className='p-3'>Showing {Data.length} movies</h4></>
//           }



//           <div className='row border text-dark'>
//             <div className='col-3 p-2 ' onClick={() => this.sortvalue(0)}>Title</div>
//             <div className='col-3 p-2' onClick={() => this.sortvalue(1)} >Genre</div>
//             <div className='col-1 p-2' onClick={() => this.sortvalue(2)} >Stock</div>
//             <div className='col-2 p-2' onClick={() => this.sortvalue(3)}>Rate</div>
//             <div className='col-3 p-2'></div>
//           </div>
//           {Data.map((e, index) => {
//             let { name, category, stock, rate } = e
//             return (
//               <>
//                 <div className='row border'>
//                   <div className='col-3 p-2'>{name}</div>
//                   <div className='col-3 p-2'>{category}</div>
//                   <div className='col-1 p-2 '>{stock}</div>
//                   <div className='col-2 p-2'>{rate}</div>
//                   <div className='col-3 p-2'>
//                     <button className='btn btn-danger m-2 btn-sm' onClick={() => this.delete(index)}>Delete</button>
//                   </div>
//                 </div>

//               </>
//             )
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }


// state = {
//     list: [],
//     code: '',
//     listcode: ['ABC123', '0-9', 'MN012'],
//     indexFrom: -1,
//     //     showcontact: false,
//   }

//   wordAdd = (str) => {
//     let s1 = { ...this.state };
//     s1.code += str
//     this.setState(s1);
//   }

//   Add = () => {
//     let s1 = { ...this.state };
//     let arr = s1.list.find(e => {
//       return s1.code == e
//     })
//     // console.log(arr)
//     if (s1.code == arr) {
//       alert("Code already exists")
//     } else {
//       s1.list.push(s1.code)
//       s1.code = s1.code.substring(0, s1.length - 1)
//       s1.indexFrom = -1;
//     }

//     this.setState(s1);
//   }
//   Clear = () => {
//     let s1 = { ...this.state };
//     s1.code = s1.code.substring(0, s1.length - 1)
//     this.setState(s1)
//   }
//   showFrom = (index) => {
//     let s1 = { ...this.state }
//     s1.indexFrom = index;
//     // s1.showcontact =false;
//     this.setState(s1)
//   }
//   showfromfrist = () => {
//     let { list, code, listcode } = this.state
//     return (
//       <>
//       <p>Code Type : {listcode[0]}</p>
//         <p>Code so far : {code}</p>

//         <button className='btn btn-warning m-2 btn-sm ' onClick={() => this.wordAdd("A")}>A</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("B")} >B</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("C")} >C</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("1")}>1</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("2")}>2</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("3")}>3</button>
//         <br />
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Add()}>Add New Code</button>
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Clear()}>Clear Code</button>
//       </>
//     )
//   }
//   showFromSec =()=>{
//     let { list, code, listcode } = this.state
//     return (
//       <>
//       <p>Code Type : {listcode[1]}</p>
//         <p>Code so far : {code}</p>

//         <button className='btn btn-warning m-2 btn-sm ' onClick={() => this.wordAdd("1")}>1</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("2")} >2</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("3")} >3</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("4")}>4</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("5")}>5</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("6")}>6</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("7")}>7</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("8")}>8</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("9")}>9</button>
//         <br />
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Add()}>Add New Code</button>
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Clear()}>Clear Code</button>
//       </>
//     )
//   }
//   showFromThrid =()=>{
//     let { list, code, listcode } = this.state
//     return (
//       <>
//       <p>Code Type : {listcode[2]}</p>
//         <p>Code so far : {code}</p>

//         <button className='btn btn-warning m-2 btn-sm ' onClick={() => this.wordAdd("M")}>M</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("N")} >N</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("0")} >0</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("1")}>1</button>
//         <button className='btn btn-warning m-2 btn-sm' onClick={() => this.wordAdd("2")}>2</button>
//         <br />
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Add()}>Add New Code</button>
//         <button className='btn btn-primary m-2 btn-sm' onClick={() => this.Clear()}>Clear Code</button>
//       </>
//     )
//   }
//   render() {
//     let { list, indexFrom, listcode } = this.state
//     return (
//       <React.Fragment>
//         <div className='container'>
//           <h2>Create New Code</h2>

//           <br />
//           {indexFrom == 0 ? this.showfromfrist() 
//           : indexFrom ==1 ? this.showFromSec()
//           : indexFrom ==2 ? this.showFromThrid()
//           : <>
//             {listcode.map((e, index) => {
//               return (
//                 <>
//                   <button className='btn btn-primary m-2 btn-sm' onClick={() => this.showFrom(index)}>Code {e}</button>
//                 </>)
//             })}

//           </>}

//           <h2>List of codes Created</h2>
//           {list.map((e) => {

//             return (
//               <>
//                 <ul>
//                   <li>{e}</li>
//                 </ul>

//               </>
//             )
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }

// state = {
//     email:
//       [{ id: 121, sent: false, from: "tweets@twitter.com", to: "jack@test.com", subject: "18 tweets from those you follow", text: "Go to your twitter page and see the tweets from those you follow.", folder: "Social", read: true, },
//       { id: 141, sent: true, from: "jack@test.com", to: "mary@test.com", subject: "Bug 461 in Customer Flow", text: "When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.", folder: "Sent", read: false, },
//       { id: 158, sent: false, from: "email@facebook.com", to: "jack@test.com", subject: "New post from William Jones", text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.", folder: "Social", read: true, },
//       { id: 177, sent: true, from: "jack@test.com", to: "williams@test.com", subject: "Movie tomorrow", text: "Avengers Endgame is releasing tomorrow. Wanna see.", folder: "Sent", read: false, }, { id: 179, sent: false, from: "williams@test.com", to: "jack@test.com", subject: "Re: Movie tomorrow", text: "The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.", folder: "Inbox", read: false, },
//       { id: 194, sent: false, from: "retweet@twitter.com", to: "jack@test.com", subject: "Your tweet has been retweeted by Thomas", text: "Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.", folder: "Social", read: false, },
//       { id: 204, sent: true, from: "mary@test.com", to: "jack@test.com", subject: "To do on Friday", text: "Test the bugs on the employee form in Release 0.7.9 and fix them.", folder: "Inbox", read: false, }, { id: 255, sent: true, from: "mary@test.com", to: "jack@test.com", subject: "Release 0.8.4 deployed", text: "Release 0.8.4 has been deployed in the test environment.", folder: "Inbox", read: false, },
//       { id: 278, sent: false, from: "mary@test.com", to: "jack@test.com", subject: "Re: Bug 461 in Customer Flow", text: "The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary", folder: "Inbox", read: false, },
//       { id: 281, sent: true, from: "jack@test.com", to: "mary@test.com", subject: "Re: Re: Bug 461 in Customer Flow", text: "Bug 461 has been closed.\nRegards,\nJack", folder: "Sent", read: false, },
//       { id: 289, sent: false, from: "email@facebook.com", to: "jack@test.com", subject: "5 Shares, 2 Posts from your friends", text: "Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.", folder: "Social", read: true, },]
//   };

//   filter = (num) => {

//     let str = { ...this.state };
//     let a = str.email.filter((e) => {
//       if (num == 'All') {
//         return e
//       } else if (num == 'Inbox' && e.folder == num) {
//         return e
//       } else if (num == 'Social' && e.folder==num) {
//         return e
//       }
//       else if (num == 'Sent' && e.folder==num) {
//         return e
//       }
//     })

//     str.email = a
//     this.setState(str)
//   }
//   render() {
//     let { email, grid, card } = this.state


//     return (
//       <>
//         <div className='container'>
//           <div className='row'>
//             <div class="col-2 pl-4  bg-secondary text-light">
//               <h4>Folder</h4>
//               <a onClick={()=>{this.filter('All')}}>All</a><br/>
//               <a onClick={()=>{this.filter('Inbox')}}>Inbox</a><br/>
//               <a onClick={()=>{this.filter('Social')}}>Social</a><br/>
//               <a onClick={()=>{this.filter('Sent')}}>Sent</a>
//             </div>
//           <div class="col-10">
//             {email.map((b, index) => (
//               <ProductTable
//                 email={b}
//                 index={index}
//                 onDecrease={this.handleDecrease}
//                 onIncrease={this.handleIncrease}
//               />
//             ))}
//           </div>
//           </div>
//         </div>
//       </>
//     )
//   }