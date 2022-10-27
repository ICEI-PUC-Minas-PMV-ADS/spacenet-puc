import React from 'react';
import Logo from '../assets/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';

const Header = () => {
    const { user, userLogout } = React.useContext(UserContext);
    
    return (
        <header className={styles.header}>
            <div>
                <img alt='Logo' src={Logo} />
            </div>
            {user ?  (
                <nav >
                <ul className={styles.ul}>
                    <Link to='/'>Home</Link>
                    <Link to='/noticias'>Notícias</Link>
                    <Link to='/setores'>Setores</Link>
                    <Link to='/ajuda'>Ajuda</Link>
                    <Link onClick={userLogout} to='/login'>Sair /{user && user} </Link>
                </ul>
            </nav>
            ) : null}
            

        </header>
    )
}

export default Header;