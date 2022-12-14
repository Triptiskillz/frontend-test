import React from "react";
function LeftPanelOptions({ options, countrie, OnOptionChange }) {
    console.log(options)
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        if (input.name === "countrie")
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
    // console.log(options,allOptions.brand,OnOptionChange)
    let makeDropdown = (arr, value, name, lable) => (
        // {console.log(arr, value, name, lable)}

        <div className='form-group mt-2'>
            <select
                className='form-control'
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value=''>{lable}</option>
                {arr.map((pr) => (
                    <option>{pr}</option>
                ))}
            </select>
        </div>

    )

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
                        checked={value.find((val) => val == opt) || false}
                        onChange={handleChange}
                    />
                    <lable className='form-check-label'>{opt}</lable>
                </div>
            ))}

        </>


    )
    let { countries = ""} = options;
    return (
        <div className="row border bg-light">
            {/* <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={() => OnOptionChange({})}>Clear All Option</button></div> */}
            <div className="col-12">{makeCheckboxes(countrie, countries.split(","), "countries", "Countries")}</div>
        
        </div>
    )


}
export default LeftPanelOptions