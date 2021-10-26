import React from 'react'

const FormSelect = ({ placeholder, data, type }) => {
    return (
        <select className="form-input" id={type} >
            <option>{placeholder}</option>
            {data.map((item) => (
                <option key={item.id} value={item.title}>
                    {item.title}
                </option>
            ))}
        </select>
    )
}

export default FormSelect
