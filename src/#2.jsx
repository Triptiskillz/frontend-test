import React, { Component } from 'react'
class MyComp extends Component {
  state = {
    players: [
      { name: "Williams", ans: 10, correct: 36 },
      { name: "George", ans: 8, correct: 31 },
      { name: "Katherine", ans: 45, correct: 37 },
      { name: "Sophia", ans: 22, correct: 19 },
      { name: "Katherine", ans: 35, correct: 40 },
      { name: "Sophia", ans: 10, correct: 50 },

    ],
    correctScore: 2,
    incorrectScore: -1,
  };
  sortplayers = (p1, p2) => {
    let { correctScore, incorrectScore } = this.state;
    let x1 = p1.correct * correctScore + (p1.ans - p1.correct) * incorrectScore;
    let x2 = p2.correct * correctScore + (p2.ans - p2.correct) * incorrectScore;
    return x2 - x1
  }
  totalQus = () => {
    const { players } = this.state;
    return players.reduce((acc, curr) => acc + curr.ans, 0)
  };
  totalCorrect = () => {
    const { players } = this.state;
    return players.reduce((acc, curr) => acc + curr.correct, 0)
  };
  render() {
    let { players, correctScore, incorrectScore } = this.state;
    const play = [...players];
    let totalQnsAsked = this.totalQus();
    let totalCorrectAns = this.totalCorrect()
    play.sort(this.sortplayers);
    return (
      <div className='container'>
        <div className='row'>
          {players.map((p1) => {
            let { name, ans, correct } = p1;
            return (
              <div className='col-4 border bg-warning'>
                {name}<br />
                Answered: {ans} <br />
                Correct: {correct} <br />
                Score:  {correct * correctScore + (ans - correct) * incorrectScore} <br />

              </div>
            )
          })}
        </div>
        <div className='row bg-light'>
          <div className='col-6 border text-center'>
            <h4>Leaderboard</h4>
            1.{play[0].name}
            <br />
            2.{play[1].name}
            <br />
            3.{play[2].name}
          </div>
          <div className='col-6 border'>
            <h4>Statistics</h4>
            Total Questions :{totalQnsAsked}
            <br />
            Correct Answers :{totalCorrectAns}
            <br />
            Incorrect Anwers :{totalQnsAsked - totalCorrectAns}
          </div>
        </div>
      </div>
    )
  }

}

export default MyComp


// state = {
//     product: {code: "PRD341",price: 24,targetSales: 10,actualSales: 8}
// };
//   render() {
//     let { product } = this.state
//     let { code, price, targetSales,actualSales } = product
//     let value = price*actualSales
//     let value1 = price*targetSales
//     return (
//       <div className='container'>
//         <p>Product Code: {code}</p>
//         <p>Price: {price}</p>
//         <p>Sales Target: {targetSales}</p>
//         <p>Actual Sales: {actualSales}</p>
        
//         <p>Actual Sales Value: {value}</p>
//         <p>Target Achieved: {value>value1?'Yes':'No'}</p>
//       </div>
//     )
// state = {
//   student: [
//     { name: "Bill Johnson", english: 61, Maths: 55, computer: 60 },
//     { name: "Mary", english: 75, Maths: 80, computer: 82 },
//     { name: "Rex", english: 37, Maths: 32, computer: 27 }
//   ]
// };
// render() {
//   let { student } = this.state
//   return (
//     <div className='container'>
//       <div className='row'>
//         {student.map(e => {
//           let { name, english, Maths, computer } = e
//           let value = (+english) + (+Maths) + (+computer)
//           console.log(value)
//           return (
//             <div div className='col-4' >
//               <p>Name: {name}</p>
//               <p>Marks in English: {english}</p>
//               <p>Marks in Maths: {Maths}</p>
//               <p>Marks in Computer: {computer}</p>
//               <p>Total Marks: {value}</p>
//               <p>Grade: {value >=225  ? 'A' : value >=180 ?'B':value>=150?'C':'D'}</p>
//             </div>
//           )
//         })}
//       </div>
//     </div >
//   )
// }


// state = {
//   products: [
//     { name: "Perk", quantity: 10, sales: 7 },
//     { name: "5Star", quantity: 7, sales: 9 },
//     { name: "Pepsi", quantity: 10, sales: 20 },
//     { name: "Maggi", quantity: 41, sales: 22 },
//     { name: "Coke", quantity: 18, sales: 50 }
//   ]
// };
// getRowStyle = (m1, m2) => (m1 >= m2 ? 'bg-success' : 'bg-danger');
// totalqty = () => {
//   const { products } = this.state;
//   return products.reduce((acc, curr) => acc + curr.quantity, 0)
// };
// totalsale = () => {
//   const { products } = this.state;
//   return products.reduce((acc, curr) => acc + curr.sales, 0)
// };
// render() {
//   let { products } = this.state
//   // let arr = products.filter(e=>{
//   //   return e.quantity<=e.sales?e.quantity:'';
//   // })
//   let totalqtyNum = this.totalqty()
//   let totalsalenum =this.totalsale();
//   let prod = [...products]
//   prod.sort((n1, n2) => {
//     let n3 = n1.sales
//     let n4 = n2.sales
//     if (n3 > n4)
//       return 1
//     else if (n3 < n4)
//       return -1
//     else
//       return 0
//   })
//   return (
//     <div className='container'>
//       <div className='row border bg-dark text-white'>
//         <div className='col-4'>Name</div>
//         <div className='col-4'>Quantity</div>
//         <div className='col-4'>Sales</div>
//       </div>
//       {prod.map((e) => {
//         let { name, quantity, sales } = e
//         return (
//           <div className={"row border " + this.getRowStyle(quantity, sales)}>
//             <div className='col-4'>{name}</div>
//             <div className='col-4'>{quantity}</div>
//             <div className='col-4'>{sales}</div>
//           </div>
//         )
//       })}
//       <div className='row bg-light'>
//         <div className='col-6 border'>
//           <h4>Total</h4>
//           Sum of quantity:  {totalqtyNum}<br/>
//           Sum of sales: {totalsalenum}<br/>
//           Total: {totalqtyNum*totalsalenum}<br/>
//         </div>
//       </div>
//     </div>

//   );
// }

// state = {
//   employees: [{ name: "Jack Smith", level: 2, dept: "Tech", designation: "Manager", salary: 24000 }, { name: "Mary Robbins", level: 3, dept: "Fin", designation: "Manager", salary: 28000 }, { name: "Steve Williams", level: 4, dept: "Ops", designation: "President", salary: 35000 }, { name: "Bob Andrews", level: 1, dept: "Fin", designation: "Trainee", salary: 16500 }, { name: "Dave Martin", level: 2, dept: "Fin", designation: "Manager", salary: 21700 }, { name: "Julia Clarke", level: 3, dept: "Ops", designation: "Manager", salary: 26900 }, { name: "Kathy Jones", level: 4, dept: "Tech", designation: "President", salary: 42500 }, { name: "Tom Bresnan", level: 2, dept: "Tech", designation: "Manager", salary: 22200 }]
// };
// // getRowStyle = (m1, m2) => (m1 >= m2 ? 'bg-success' : 'bg-danger');
// totalsalary = () => {
//   const { employees } = this.state;
//   return employees.reduce((acc, curr) => acc + curr.salary, 0)
// };



// render() {
//   let { employees } = this.state
//   let techCount = 0
//   let tech = employees.filter(e => {
//     return e.dept == 'Tech' ? techCount++ : '';
//   })
//   let finCount = 0
//   let fin = employees.filter(e => {
//     return e.dept == 'Fin' ? finCount++ : '';
//   })
//   let opsCount = 0
//   let ops = employees.filter(e => {
//     return e.dept == 'Ops' ? opsCount++ : '';
//   })
//   const empsort = [...employees];
//   empsort.sort((n1, n2) => {
//   let n3 = n1.salary
//   let n4 = n2.salary
//   if (n3 > n4)
//     return 1
//   else if (n3 < n4)
//     return -1
//   else
//     return 0
// })

//   let totaltotalsalaryNum = this.totalsalary()



//   return (
//     <div className='container'>
//       <h2 className=' text-center'>Welcome to the Employee Protal</h2>
//       <div className='row border bg-primary  text-white'>
//         <div className='col-3 border'>Name</div>
//         <div className='col-2 border'>Level</div>
//         <div className='col-2 border'>Dept</div>
//         <div className='col-3 border'>Designation</div>
//         <div className='col-2 border'>Salary</div>
//       </div>
//       {employees.map((e) => {
//         let { name, level, dept, designation, salary } = e
//         return (
//           <div className="row border">
//             <div className='col-3 border'>{name}</div>
//             <div className='col-2 border'>{level}</div>
//             <div className='col-2 border'>{dept}</div>
//             <div className='col-3 border'>{designation}</div>
//             <div className='col-2 border'>{salary}</div>
//           </div>
//         )
//       })}
//       <div className='row bg-warning text-dark'>
//         <div className='col-6 text-center'>
//           <h4>Employee Details</h4>
//           Number of employees: {employees.length}
//           <br />
//           Tech : {techCount}
//           <br />
//           Fin: {finCount}
//           <br />
//           Ops: {opsCount}
//         </div>
//         <div className='col-6 text-center'>
//           <h4>Salary Details</h4>
//           Total Salary :{totaltotalsalaryNum}
//           <br />
//           Average Salary :{totaltotalsalaryNum / employees.length}
//           <br />
//           Max Salary :{empsort[7].salary}
//           <br />
//           Min Salary:{empsort[0].salary}
//         </div>
//       </div>
//     </div>

//   );
// }

// state = {
//   employees: [{ name: "Jack Smith", level: 2, dept: "Tech", designation: "Manager", salary: 24000 }, { name: "Mary Robbins", level: 3, dept: "Fin", designation: "Manager", salary: 28000 }, { name: "Steve Williams", level: 4, dept: "Ops", designation: "President", salary: 35000 }, { name: "Bob Andrews", level: 1, dept: "Fin", designation: "Trainee", salary: 16500 }, { name: "Dave Martin", level: 2, dept: "Fin", designation: "Manager", salary: 21700 }, { name: "Julia Clarke", level: 3, dept: "Ops", designation: "Manager", salary: 26900 }, { name: "Kathy Jones", level: 4, dept: "Tech", designation: "President", salary: 42500 }, { name: "Tom Bresnan", level: 2, dept: "Tech", designation: "Manager", salary: 22200 }]
// };
// // getRowStyle = (m1, m2) => (m1 >= m2 ? 'bg-success' : 'bg-danger');
// totalsalary = () => {
//   const { employees } = this.state;
//   return employees.reduce((acc, curr) => acc + curr.salary, 0)
// };



// render() {
//   let { employees } = this.state
//   let techCount = 0
//   let tech = employees.filter(e => {
//     return e.dept == 'Tech' ? techCount++ : '';
//   })
//   let finCount = 0
//   let fin = employees.filter(e => {
//     return e.dept == 'Fin' ? finCount++ : '';
//   })
//   let opsCount = 0
//   let ops = employees.filter(e => {
//     return e.dept == 'Ops' ? opsCount++ : '';
//   })
//   const empsort = [...employees];
//   empsort.sort((n1, n2) => {
//   let n3 = n1.salary
//   let n4 = n2.salary
//   if (n3 > n4)
//     return 1
//   else if (n3 < n4)
//     return -1
//   else
//     return 0
// })

//   let totaltotalsalaryNum = this.totalsalary()



//   return (
//     <div className='container mt-4'>
//       <h2 className=' text-center'>Welcome to the Employee Protal</h2>
//       <div className='row'>
//       {employees.map((e) => {
//         let { name, level, dept, designation, salary } = e
//         return (
//           <div className='col-6 border bg-light text-center'>
//             <h4>{name} </h4>
//             Designation : {designation} <br/>
//             Salary : {salary} <br/>
//           </div>
//         )
//       })}
//       <div className='row bg-warning text-dark'>
//         <div className='col-6 text-center'>
//           <h4>Employee Details</h4>
//           Number of employees: {employees.length}
//           <br />
//           Tech : {techCount}
//           <br />
//           Fin: {finCount}
//           <br />
//           Ops: {opsCount}
//         </div>
//         <div className='col-6 text-center'>
//           <h4>Salary Details</h4>
//           Total Salary :{totaltotalsalaryNum}
//           <br />
//           Average Salary :{totaltotalsalaryNum / employees.length}
//           <br />
//           Max Salary :{empsort[7].salary}
//           <br />
//           Min Salary:{empsort[0].salary}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
