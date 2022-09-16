import React from 'react';
import Logo from '../assets/logo.svg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={Logo} />
            </div>
            {/* <nav >
                <ul className={styles.ul}>
                    <a href='/'><li>Home</li></a>
                    <a href='/'><li>Notícias</li></a>
                    <a href='/'><li>Setores</li></a>
                    <a href='/'><li>Ajuda</li></a>
                    <a href='/'><li>Sair</li></a>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header;