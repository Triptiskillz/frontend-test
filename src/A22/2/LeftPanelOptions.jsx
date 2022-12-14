import React from "react";
function LeftPanelOptions({ options, allOptions, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        option[input.name] = input.value;
        // console.log(option)
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
    let { brand, ram, processor, hardDisk, rating } = options;
    return (
        <div className="row border bg-light">
            <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={()=>OnOptionChange({})}>Clear All Option</button></div>
            <div className="col-12">{makeDropdown(allOptions.brand, brand, "brand", "Select brand")}</div>
            <div className="col-12">{makeDropdown(allOptions.ram, ram, "ram", "Select ram")}</div>
            <div className="col-12">{makeDropdown(allOptions.processor, processor, "processor", "Select processor")}</div>
            <div className="col-12">{makeDropdown(allOptions.hardDisk, hardDisk, "hardDisk", "Select hardDisk")}</div>
            <div className="col-12">{makeDropdown(allOptions.rating, rating, "rating", "Select rating")}</div>
        </div>
    )


}
export default LeftPanelOptions