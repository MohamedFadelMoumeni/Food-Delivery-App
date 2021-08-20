import React from 'react';

const FormInput = ({type, placeholder, handleChange, ...otherProps}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={handleChange} {...otherProps} />

    )
}

export default FormInput;