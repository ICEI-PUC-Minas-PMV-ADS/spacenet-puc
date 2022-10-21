import React from 'react'
import styles from './Birthdays.module.css'
import { USERS_GET } from '../../api'


const Birthdays = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getBirthdays = async () => {
            const { url, options } = USERS_GET();
            const request = await fetch(url, options);
            const response = await request.json()
            setData(response)
            console.log(response)
        }

        getBirthdays();
    }, [])

    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>Aniversários do mês.</h2>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    {data.map((funcionario) => {
                        return (
                            <li key={funcionario.id}>
                                <div className={styles.employeesContainer}>
                                    <img alt='avatar' className={styles.img} src={funcionario.src} />
                                    <div className={styles.text}>
                                        <h4>{funcionario.name}</h4>
                                        <p>{funcionario.birthdayDate}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Birthdays