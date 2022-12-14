import React from "react";
function LeftPanelOptionRD({ options,sections, OnOptionChange }) {
    const handleChange = (e) => {
        const { currentTarget: input } = e;
        let option = { ...options }
        option[input.name] = input.value;
        OnOptionChange(option)
    };
    let makeCheckboxes = (arr, value, name, lable) => (
        <>
            <lable className="fw-bold text-center">{lable}</lable>
            {arr.map((opt) => (
                <>
                        {/* {console.log(value, opt)} */}

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
                </>
            ))}

        </>
    )
   let {q=""} = options;
//    console.log(options)
    return (
        <div className="row">
            <div className="col-12">{makeCheckboxes(sections, q.split(","), "q", "Section")}</div>
        </div>
    )


}
export default LeftPanelOptionRD