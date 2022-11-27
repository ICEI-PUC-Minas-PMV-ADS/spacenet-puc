import React from 'react'
import Logo from '../assets/logo.svg'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img alt='Logo Spacenet' className={styles.logo} src={Logo} />
        </footer>
    )
}

export default Footer