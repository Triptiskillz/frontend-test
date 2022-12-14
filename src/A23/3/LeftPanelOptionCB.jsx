import React from "react";
function LeftPanelOptionCB({ options, allOptions, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        option[input.name] = updateCBs(
            option[input.name],
            input.checked,
            input.value
        );
        // console.log(option)
        OnOptionChange(option)
    };
const updateCBs=(inpValue,checked,value)=>{
    let inpArr = inpValue?inpValue.split(","):[];
    if(checked) inpArr.push(value);
    else{
        let index= inpArr.findIndex((ele)=>ele===value);
        if(index>=0) inpArr.splice(index,1);
    }
    return inpArr.join(",")
}
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
                        type="checkbox"
                        value={opt}
                        checked={value.find((val) => val == opt)||false}
                        onChange={handleChange}
                    />
                    <lable className='form-check-label'>{opt}</lable>
                </div>
            ))}

        </>


    )
    let {RAM='',ROM=''} = options;
    // console.log(allOptions)
    return (
        <div className="row border bg-light">
            {/* <div className="col-12 text-center"><button className="btn btn-primary btn-sm mt-2 mb-2" onClick={() => OnOptionChange({})}>Clear All Option</button></div> */}
            <div className="col-12">{makeCheckboxes(allOptions.RAM, RAM.split(','), "RAM", " Choose RAM")}</div>
            <div className="col-12">{makeCheckboxes(allOptions.ROM, ROM.split(','), "ROM", "Choose ROM")}</div>
            {/* <div className="col-12">{makeCheckboxes(allOptions.processor, processor.split(','), "processor", "Select processor")}</div>
            <div className="col-12">{makeCheckboxes(allOptions.hardDisk, hardDisk.split(','), "hardDisk", "Select hardDisk")}</div>
            <div className="col-12">{makeCheckboxes(allOptions.rating, rating.split(','), "rating", "Select rating")}</div> */}
        </div>
    )


}
export default LeftPanelOptionCB