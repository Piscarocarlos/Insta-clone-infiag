import React, { useId } from 'react'

function Input({ label, value, type, required = false, className = null, onChange, error = null }) {

    const id = useId();

    return (
        <div className="form-group mb-3">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value}
            required={required} className={`form-control ${className}`} onChange={onChange} />
            {error && <span className='text-danger'>{error}</span>}
        </div>
    )
}

export default Input
