import React from "react";
function Option({ options, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        if (input.name === "city1" || input.name === "company")
            option[input.name] = updateCBs(
                option[input.name],
                input.checked,
                input.value
            );
        else
            option[input.name] = input.value;
        // console.log(option)
        OnOptionChange(option)
    };
    const updateCBs = (inpValue, checked, value) => {
        let inpArr = inpValue ? inpValue.split(",") : [];
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr.join(",")
    }

    
    let makeInputboxes = (value, name,label) => (

        <>
            <div className='form-group'>
                     <input
                        type="text"
                        className='form-control'
                        name={name}
                        value={value}
                        placeholder={label}
                        onChange={handleChange}
                    />
                </div>

        </>
    )
    let {maxprice="",minprice="" } = options;
    return (
        <div className="row">
            <div className="col-6">{makeInputboxes(maxprice,"maxprice","Enter the Max Price")}</div>
            <div className="col-6">{makeInputboxes(minprice,"minprice","Enter the Min Price")}</div>
        </div>
    )


}
export default Option