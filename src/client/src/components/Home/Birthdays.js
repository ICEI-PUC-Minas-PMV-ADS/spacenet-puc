import React from 'react'
import styles from './Birthdays.module.css'
import { USERS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helpers/Loading'


const Birthdays = () => {
    const { data, request, error, loading } = useFetch();

    const getBirthdays = React.useCallback(() => {
        const getData = async () => {
            const { url, options } = USERS_GET();
            const { json } = await request(url, options);

            return json;
        }
        getData()
    }, [request])

    React.useEffect(() => {
        getBirthdays()
    }, [getBirthdays])

    // const date = new Date()
    // let newDate = date.getTime()



    // let formatDate = dataAtualFormatada(newDate)

    // const myArray = formatDate.split("", 10)

    // console.log(myArray)

    if (error) return <p>Temos um erro por aqui</p>
    if (data)
        return (
            <div className={styles.mainContainer}>
                <h2 className={styles.title}>Aniversários do mês.</h2>
                <div className={styles.container}>
                    <ul className={styles.ul}>
                        {loading ? <Loading /> : (
                            data.map((funcionario) => {
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
                            })
                        )}
                    </ul>
                </div>
            </div>
        )
}

export default Birthdays