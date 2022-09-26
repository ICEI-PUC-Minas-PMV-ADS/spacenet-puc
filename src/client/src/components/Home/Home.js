import React from 'react'
import styles from './Home.module.css'
import FirstSection from './FirstSection'
import News from './News'
import Birthdays from './Birthdays'
import CompanySectors from './CompanySectors'
import Problems from './Problems'

const Home = () => {
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
