import React from 'react'

import styles from './TextArea.module.css'

const TextArea = ({ label, name, placeholder, onChange}) => {
    return (
        <div>
            <label>{label}</label>
            <textarea onChange={onChange} name={name} placeholder={placeholder }className={styles.textarea} ></textarea>
        </div>
    )
}

export default TextArea