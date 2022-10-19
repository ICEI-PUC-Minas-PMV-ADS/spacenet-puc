import React from 'react';
import Logo from '../assets/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showNav, setShowNav] = React.useState(true);
    React.useEffect(() => {
        let location = window.location.pathname
        if (location == '/login') {
            setShowNav(false);
            console.log(showNav)
        }
    }, [])

    return (
        <header className={styles.header}>
            <div>
                <img src={Logo} />
            </div>
            {showNav ? (
                <nav >
                    <ul className={styles.ul}>
                        <Link to='/'>Home</Link>
                        <Link to='/noticias'>Notícias</Link>
                        <Link to='/setores'>Setores</Link>
                        <Link to='/ajuda'>Ajuda</Link>
                        <Link to='/login'>Sair</Link>
                    </ul>
                </nav>
            ) : (
                null
            )}

        </header>
    )
}

export default Header;