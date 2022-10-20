import React from 'react'
import styles from './Hero.module.css';

const Hero = ({ title, subtitle }) => {
    return (
        <section className={styles.container}>
            <div className={`animeLeftSlow ${styles.text}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.paragraph}>{subtitle}</p>
            </div>
        </section>
    )
}

export default Hero