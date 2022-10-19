import React from 'react'
import styles from './FirstSection.module.css'
import ButtonWhite from '../Buttons/ButtonWhite'

const FirstSection = () => {
    return (
        <section className={styles.container}>
            <div className={`animeLeftSlow ${styles.text}`}>
                <h1 className={styles.title}>Para deixar o dia a dia mais simples.</h1>
                <p className={styles.paragraph}>Conheça a Spacenet.</p>
            </div>
            <div className='animeLeftSuperSlow'>
                <ButtonWhite>VER MAIS</ButtonWhite>
            </div>
        </section>
    )
}

export default FirstSection