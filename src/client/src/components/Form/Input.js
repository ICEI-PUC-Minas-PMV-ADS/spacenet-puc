import React from 'react'
import Error from '../Helpers/Error'
import styles from '../Form/Input.module.css'

const Input = ({ label, type, name, value, onChange, error, onBlur, placeholder, autoComplete }) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                placeholder={placeholder}
                autoComplete={autoComplete} />

            {error && <Error error={error}/>}
        </div>

    )
}

export default Input