import React from "react";
function LeftPanelOptionRD({ options, allOptions, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        option[input.name] = input.value;
        OnOptionChange(option)
    };

    // console.log(options,allOptions.brand,OnOptionChange)
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
                        checked={value.find((val) => val == opt)||false}
                        onChange={handleChange}
                    />
                    <lable className='form-check-label'>{opt}</lable>
                </div>
            ))}

        </>


    )
    let {status=''} = options;
    // console.log(allOptions)
    return (
        <div className="row border bg-light">
            {/* <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={() => OnOptionChange({})}>Clear All Option</button></div> */}
            <div className="col-12">{makeCheckboxes(allOptions.status, status.split(','), "status", "Current status")}</div>
          
            {/* <div className="col-12">{makeCheckboxes(allOptions.status, status.split(','), "status", "Select status")}</div> */}
            {/* <div className="col-12">{makeCheckboxes(allOptions.processor, processor.split(','), "processor", "Select processor")}</div>
            <div className="col-12">{makeCheckboxes(allOptions.hardDisk, hardDisk.split(','), "hardDisk", "Select hardDisk")}</div>
            <div className="col-12">{makeCheckboxes(allOptions.rating, rating.split(','), "rating", "Select rating")}</div> */}
        </div>
    )


}
export default LeftPanelOptionRD