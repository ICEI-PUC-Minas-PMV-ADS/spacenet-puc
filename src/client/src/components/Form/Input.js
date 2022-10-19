import React from 'react'
import styles from '../Form/Input.module.css'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
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
                onBlur={onBlur} />

            {error && <p className={styles.error}>{error}</p>}
        </div>

    )
}

export default Input