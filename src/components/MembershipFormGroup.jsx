import React from 'react';

const FormGroup = ({ label, placeholder, type, value, children, setInput }) => {
    return (
        <div className="membership-form__group">
            <label htmlFor={type}>{label}</label>
            <input className="form-input"
                type={type}
                name={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setInput(e.target.value)}

            />
            {children}
        </div>
    )
}

export default FormGroup;
