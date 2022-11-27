import React from 'react'

const CheckBox = ({ name, value, title }) => {
    return (
        <>
            <select name={name} id="cars">
                <option value={value}>{title}</option>
            </select>
        </>

    )
}

export default CheckBox