import React from 'react'
import styles from './Birthdays.module.css'


const employees = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
    {
        id: '5',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
    {
        id: '6',
        src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        name: 'Nome do Funcionario',
        date: '02/10/2022'
    },
]

const Birthdays = () => {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>Aniversários do mês.</h2>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    {employees.map((funcionario) => {
                        return (
                            <li key={funcionario.id}>
                                <div className={styles.employeesContainer}>
                                    <img className={styles.img} src={funcionario.src} />
                                    <div className={styles.text}>
                                        <h4>{funcionario.name}</h4>
                                        <p>{funcionario.date}</p>
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