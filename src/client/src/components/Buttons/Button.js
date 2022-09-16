import React from 'react'
import styles from './Button.module.css'

const Button = ({ buttonText, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick}>{buttonText}</button>
    )
}

export default Button