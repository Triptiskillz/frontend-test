import React, { Component } from 'react'

class Child1 extends Component {
    state = {
        person: this.props.person,
        errors: {},

        categoryList: ["Food", "Electronics", "Apparels", "Grocery"],
        discountList: ['5%', '10%', '20%']
    };
    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        // console.log(input.value)
        // input.type === "checkbox"
        input.name === "techsKnown"
            ? (s1.person.techsKnown = this.updateCBs(input.checked, input.value, s1.person.techsKnown))
            : input.name === "server"
                ? (s1.person.server = this.updateCBs(input.checked, input.value, s1.person.server))

                // (s1.person[input.name] = input.checked)
                : (s1.person[input.name] = input.value);
        if (input.name === 'country') s1.person.city = '';
        if (!s1.person.passport) s1.person.passportNumber = "";
        this.handleValidate(e);
        this.setState(s1);
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

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validateAll();
        if (this.isValid(errors)) {
            alert("Successfully Submitted")
            this.props.onsubmit(this.state.person)

        } else {
            let s1 = { ...this.state }
            s1.errors = errors;
            this.setState(s1)
        }
    }

    handleValidate = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        switch (input.name) {
            case "name":
                s1.errors.name = this.validateName(input.value);
                break;
            case "description":
                s1.errors.description = this.validateDescription(input.value);
                break;
            case "productCode":
                s1.errors.productCode = this.validateProductCode(input.value);
                break;
            case "discount":
                s1.errors.discount = this.validateDiscount(input.value);
                break;
            case "price":
                s1.errors.price = this.validatePrice(input.value);
                break;
            case "category":
                s1.errors.category = this.validateCategory(input.value);
                break;
            default:
                break;
        }
        this.setState(s1)

    }
    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0)
        return count === 0;
    }
    isFormValid = () => {
        let errors = this.validateAll();
        return this.isValid(errors);
    }
    validateAll = () => {
        let { name,
            description,
            productCode,
            category,
            price,
            discount, } = this.state.person
        let errors = {};
        errors.name = this.validateName(name);
        errors.description = this.validateDescription(description);
        errors.productCode = this.validateProductCode(productCode);
        errors.category = this.validateCategory(category);
        errors.price = this.validatePrice(price);
        errors.discount = this.validateDiscount(discount);

        return errors;
    }
    validateName = (name) =>
        !name
            ? "Name must be entered"
            : name.length < 5
                ? "Name should have minimum 5 characters"
                : (/[^a-zA-Z]/.test(name))
                    ? "Name should have only alphabets (a-z or A-Z)"
                    : "";
    validateDescription = (description) =>
        !description
            ? "Description must be entered"
            : description.length < 10
                ? "Description should have minimum 10 characters"
                : (/[&\/\\#,+()$~%.@!'":*?<>{}]/.test(description))
                    ? "Description Should not have any special characters except space"
            : "";
    validateProductCode = (productCode) =>

        !productCode
            ? "Product Code must be entered"
            : productCode.length < 6
            ? "Product Code should have minimum 6 characters"
            : !((productCode.substring(0,2)>="A" && productCode.substring(0,2) <="Z" ) && (productCode.substring(productCode.length-4,productCode.length)>="0" && productCode.substring(productCode.length-4,productCode.length)<="9"))
                ? "First 2 characters should be uppercase alphabets and last 4 characters should be digits"
            : "";
    

    validateCategory = (category) =>
        !category
            ? "Category must be entered"
            : "";
    validatePrice = (price) =>
        !price
            ? "Price must be entered"
            : price <= 0
            ? "Price should be greater than 0"
            : "";
    validateDiscount = (discount) =>
        !discount
            ? "Discount must be entered (one of them should be checked)"

            : "";
    render() {
        let {
            name,
            description,
            productCode,
            category,
            price,
            discount,
        } = this.state.person;

        let { errors, categoryList, discountList } = this.state;
        return (
            <>
                <div className='container mt-4'>
                    <h5>Enter New Details</h5>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type="text"
                            className='form-control'
                            id="name"
                            name='name'
                            value={name}
                            placeholder="Enter Name"
                            onChange={this.handleChange}
                            onBlur={this.handleValidate}
                        />
                        {errors.name ? (<span className='text-danger'>{errors.name}</span>) : ("")}
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input
                            type="text"
                            className='form-control'
                            id="description"
                            name='description'
                            value={description}
                            placeholder="Enter description"
                            onChange={this.handleChange}
                            onBlur={this.handleValidate}

                        />
                        {errors.description ? (<span className='text-danger'>{errors.description}</span>) : ("")}

                    </div>
                    <div className='form-group'>
                        <label>Product Code</label>
                        <input
                            type="text"
                            className='form-control'
                            id="productCode"
                            name='productCode'
                            value={productCode}
                            placeholder="Enter productCode"
                            onChange={this.handleChange}
                            onBlur={this.handleValidate}

                        />
                        {errors.productCode ? (<span className='text-danger'>{errors.productCode}</span>) : ("")}
                    </div>

                    <label className='form-check-label font-weight-bold'>Choose the Discount</label><br />
                    {discountList.map((d1) => (
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type="radio"
                                name="discount"
                                value={d1}
                                checked={discount === d1}
                                onChange={this.handleChange}
                            />
                            <label className='form-check-label'>{d1}</label>
                        </div>))}
                    {errors.discount ? (<span className='text-danger'>{errors.discount}</span>) : ("")}

                    <div className='form-group'>
                        <label>Price</label>
                        <input
                            type="number"
                            className='form-control'
                            id="price"
                            name='price'
                            value={price}
                            placeholder="Enter price"
                            onChange={this.handleChange}
                            onBlur={this.handleValidate}

                        />
                        {errors.price ? (<span className='text-danger'>{errors.price}</span>) : ("")}

                    </div>
                    <div className='form-group'>
                        <label>Category</label>
                        <select className='form-control'
                            name='category'
                            value={category}
                            onChange={this.handleChange} >
                            <option disabled value="" >Select the category</option>
                            {categoryList.map((c1) => (
                                <option>
                                    {c1}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.category ? (<span className='text-danger'>{errors.category}</span>) : ("")}

                    <br />
                    <button
                        className='btn btn-primary m-2'
                        onClick={this.handleSubmit}
                        disabled={!this.isFormValid()}
                    >
                        Submit</button>
                </div>
            </>
        )
    }
}
export default Child1