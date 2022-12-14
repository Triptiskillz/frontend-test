import React from "react";
function LeftPanelOptions({ options, cities,paymentlist,genderlist, OnOptionChange }) {
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

    let makeCheckboxes = (arr, value, name, lable) => (

        <>
            {/* {console.log(arr, value, name, lable)} */}
            <lable>{lable}</lable>
            {arr.map((opt) => (
                <div className='form-check' key={opt}>
                    <input
                        className='form-check-input'
                        name={name}
                        type="radio"
                        value={opt}
                        // checked={value}
                        onChange={handleChange}
                    />
                    <lable className='form-check-label'>{opt}</lable>
                </div>
            ))}

        </>


    )
    let { city = "", gender = "", payment = "" } = options;
    return (
        <div className="row border bg-light">
            {/* <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={() => OnOptionChange({})}>Clear All Option</button></div> */}
            <div className="col-12">{makeCheckboxes(cities, city, "city", "Select City")}</div>
            <div className="col-12">{makeCheckboxes(genderlist, gender, "gender", "Select gender")}</div>
            <div className="col-12">{makeCheckboxes(paymentlist, payment, "payment", "Select payment")}</div>
        
        </div>
    )


}
export default LeftPanelOptions