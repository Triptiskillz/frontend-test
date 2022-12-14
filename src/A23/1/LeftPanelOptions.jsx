import React from "react";
function LeftPanelOptions({ options, allOptions, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        option[input.name] = input.value;
        OnOptionChange(option)
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
    let { dept, designation  } = options;

    return (
        <div className="row border bg-light">
            <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={()=>OnOptionChange({})}>Clear All Option</button></div>
            <div className="col-12">{makeDropdown(allOptions.dept, dept, "dept", "Select dept")}</div>
            <div className="col-12">{makeDropdown(allOptions.designation, designation, "designation", "Select designation")}</div>
        </div>
    )


}
export default LeftPanelOptions