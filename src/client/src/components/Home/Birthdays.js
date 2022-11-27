import React from 'react'
import styles from './Birthdays.module.css'
import { USERS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helpers/Loading'
import Error from '../Helpers/Error'
import Avatar from '../Helpers/Avatar'


const Birthdays = () => {
    const { request, loading } = useFetch();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getBirthdays = async () => {
            const token = window.localStorage.getItem('token');
            const { url, options } = USERS_GET(token);
            const { json } = await request(url, options);

            let arrayData = json.data;

            const actualMonth = new Date().getMonth();

            const result = arrayData.filter((month) => {
                const months = new Date(month.birthdayDate).getMonth();

                return months === actualMonth;
            })

            setData(result);
        }
        
        getBirthdays();
    }, [request]);

    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>Aniversários do mês.</h2>
            {data ? (
                <div className={styles.container}>
                    <ul className={styles.ul}>
                        {loading ? <Loading style={{ height: '50px', width: '50px', marginTop: '4rem', marginBottom: '1rem' }} /> : (
                            data.map((funcionario) => {
                                funcionario.birthdayDate = new Date().toLocaleString('pt-BR', {timeZone: 'UTC'})
                                return (
                                    <li key={funcionario.id}>
                                        <div className={styles.employeesContainer}>
                                            <Avatar />
                                            <div className={styles.text}>
                                                <h4>{funcionario.name}</h4>
                                                <p>{funcionario.birthdayDate}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <Loading style={{ height: '50px', width: '50px', marginTop: '4rem', marginBottom: '1rem' }} />
                    <Error error="Ops... Encontramos um erro :(" />
                </div>
            )}

        </div>
    );

}

export default Birthdays;
