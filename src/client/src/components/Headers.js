import React from "react";
import "./Headers.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';
import Logo from '../assets/logo.svg'

const Header = () => {
    const [toggleButton, setToggleButton] = React.useState(false)

    const { userLogout, login } = React.useContext(UserContext);
    let newUser = window.localStorage.getItem('user')

    const handleClick = () => {
        setToggleButton(!toggleButton);
    }

    return (
        <header>
            <div>
                <Link to="/"><img className="logo" alt="Logo" src={Logo} /></Link>
            </div>

            {login ? (
                <nav className={`navMenu ${toggleButton ? 'navMenuActive' : ''}`}>
                    <button onClick={handleClick} className="btnMobile">Menu
                        <span id="hamburger"></span></button>
                    <ul onClick={handleClick} className="menuTopics">
                        <div className="menuTopic">
                            <Link to='/'><span>Home</span></Link>
                        </div>
                        <div className="menuTopic">
                            <Link to='/noticias'>Notícias</Link>
                        </div >
                        <div className="menuTopic">
                            <Link to='/setores'>Setores</Link>
                        </div>
                        <div className="menuTopic">
                            <Link to='/ajuda'>Ajuda</Link>
                        </div>
                        <div className="menuTopic">
                            <Link onClick={userLogout} to='/login'>Sair / {login && newUser} </Link>
                        </div>
                    </ul>
                </nav>
            ) : null}

        </header>
    )
}

export default Header