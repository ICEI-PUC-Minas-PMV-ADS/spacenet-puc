import React from 'react'
import styles from './CardSetores.module.css'
import Button from '../Buttons/Button'

const CardSetores = ({ alt, src, title, text, button, disabled }) => {
    return (
        <div className={styles.div}>
            <img className={styles.img} alt={alt} src={src} />
            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{text}</p>
                <Button disabled={disabled}>{button}</Button>
            </div>
        </div>
    )
}

export default CardSetores;