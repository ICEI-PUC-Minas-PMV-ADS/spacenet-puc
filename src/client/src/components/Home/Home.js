import React from 'react'
import styles from './Home.module.css'
import FirstSection from './FirstSection'
import News from './News'
import Birthdays from './Birthdays'
import CompanySectors from './CompanySectors'
import Problems from './Problems'

import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const { user } = React.useContext(UserContext);

    React.useEffect(() => {
        if(!user) navigate('/login')
    }, [user, navigate])
    
    return (
        <>
            <FirstSection />
            <section >
                <div className={styles.grid}>
                    <News />
                    <Birthdays />
                </div>
                <CompanySectors />
                <Problems />
            </section>
        </>
    )
}

export default Home
