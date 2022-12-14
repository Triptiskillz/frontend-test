import React, { Component } from 'react'

class Child extends Component {
    handleChange = (e) => {
        let s1 = { ...this.props.optionsSel };
        let { currentTarget: input } = e;
        input.name === "category"
            ? (s1.category = this.updateCBs(input.checked, input.value, s1.category))
            : input.name === "hardDisk"
                ? (s1.hardDisk = this.updateCBs(input.checked, input.value, s1.hardDisk))
                : input.name === "rating"
                    ? (s1.rating = this.updateCBs(input.checked, input.value, s1.rating))
                    : (s1[input.name] = input.value);
                    console.log(s1)
        this.props.onChangeOption(s1);

    }
    updateCBs = (checked, value, arr) => {
        if (checked) {
            arr.push(value)
        } else {
            let index = arr.findIndex((e) => e === value);
            if (index >= 0) arr.splice(index, 1)
        }
        return arr;
    }
    render() {
        let { optionsSel, optionsArray } = this.props

        return (
            <>
                <div className='container'>
                    {/* <h6> Choose Options</h6> */}
                    {/* <button className='btn btn-warning btn-sm'
                        onClick={this.props.onClear}>Clear All</button> */}
                    <br />
                    {/* {this.showsetect(
                        "Brand",
                        optionsArray.brand,
                        "brand",
                        optionsSel.brand
                    )}
                    {this.showsetect(
                        "RAM",
                        optionsArray.ram,
                        "ram",
                        optionsSel.ram
                    )} */}


                 {this.showCheckboxes(
                        "Category",
                        optionsArray.category,
                        "category",
                        optionsSel.category
                    )} 
                    
                    {this.showRodios(
                        "Stock Status",
                        optionsArray.stock,
                        "stock",
                        optionsSel.stock
                    )}
                    {/*
                    {this.showCheckboxes(
                        "Rating",
                        optionsArray.rating,
                        "rating",
                        optionsSel.rating
                    )} */}
                </div>
            </>
        )
    }

    showCheckboxes = (label, arr, name, selArr) => {
        // console.log(label, arr, name, selArr)
        return (
            <>
                <label className='form-check-label fw-bold'>{label}</label><br />
                {arr.map((d1, index) => (
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type="checkbox"
                            name={name}
                            value={d1}
                            checked={selArr.findIndex((t) => t === d1) >= 0}
                            onChange={this.handleChange}
                        />
                        <label className='form-check-label'>{d1}</label>
                    </div>))}
            </>
        )
    }
    showsetect = (label, arr, name, selArr) => {
        let sel = selArr ? 'selected' : ''
        return (
            <>
                <div className='form-group'>
                    <label>{label}</label>
                    <select className='form-control'
                        name={name}
                        value={selArr}
                        onChange={this.handleChange}
                    >
                        <option value="" >Select the country</option>
                        {arr.map((c1) => (
                            <>
                                <option
                                    value={c1}
                                >
                                    {c1}
                                </option>
                            </>

                        ))}
                    </select>
                </div>
            </>
        )

    }
    showRodios = (label, arr, name, selArr) => {
        // console.log(label, arr, name, selArr)
        return (
            <>
                <label className='form-check-label fw-bold'>{label}</label><br />
                {arr.map((d1) => (
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type="radio"
                            name={name}
                            value={d1}
                            checked={selArr === d1}
                            onChange={this.handleChange}
                        />

                        <label className='form-check-label'>{d1}</label>
                    </div>))}
            </>
        )
    }
}

export default Child








// import React, { Component } from 'react'

// class Child extends Component {
//     state = {
//         customer: this.props.customer,
//         slotOptioon: [
//             "2PM-6PM",
//             "6PM-8PM",
//             "10AM-2PM",

//         ],
//         deliveryOption: [
//             "Home",
//             "Office",
//             "Pickup",
//         ],
//         paymentOption: ["Credit Card", "Debit Card", "Net Banking"]
//     };
//     handleChange = (e) => {
//         const { currentTarget: input } = e;
//         let s1 = { ...this.state };
//         input.type === "checkbox"
//             ? input.name === "payment"
//                 ? (s1.customer.payment = this.updateCBs(input.checked, input.value, s1.customer.payment))
//                 : (s1.customer[input.name] = input.checked)
//             :
//             (s1.customer[input.name] = input.value);

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
//         this.props.onsubmit(this.state.customer)
//     }
//     render() {
//         let { name, gender, delivery, payment=[], slot } = this.state.customer;
//         let { slotOptioon, deliveryOption, paymentOption } = this.state
//         return (
//             <>
//                 <div className='container mt-4'>
                 
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
//                         />
//                     </div>

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
//                     <br />
//                     <label className='form-check-label fw-bold'>Choose your Delivery Option</label><br />

//                     {deliveryOption.map((d1) => (
//                         <div className='form-check form-check-inline'>
//                             <input
//                                 className='form-check-input'
//                                 type="radio"
//                                 name="delivery"
//                                 value={d1}
//                                 checked={delivery === d1}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))}

//                     <br />
//                     <label className='form-check-label fw-bold'>Choose your Payment Option</label><br />

//                     {paymentOption.map((d1) => (
//                         <div className='form-check '>
//                             <input
//                                 className='form-check-input'
//                                 type="checkbox"
//                                 name="payment"
//                                 value={d1}
//                                 checked={payment.findIndex((tech) => tech === d1) >= 0}
//                                 onChange={this.handleChange}
//                             />
//                             <label className='form-check-label'>{d1}</label>
//                         </div>))}
//                     <br />
//                     <div className='form-group'>
//                         <select className='form-control'
//                             name='slot'
//                             value={slot}
//                             onChange={this.handleChange} >
//                             <option disabled value="" >Select the Delivery Slot</option>
//                             {slotOptioon.map((c1) => (
//                                 <option>
//                                     {c1}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <br />
//                     <button
//                         className='btn btn-primary m-2'
//                         onClick={this.handleSubmit}>
//                         Submit</button>
//                 </div>
//             </>
//         )

//     }

// }

// export default Child