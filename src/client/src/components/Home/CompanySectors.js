import React from 'react'
import Button from '../Buttons/Button'
import Sectors from '../../assets/sectors.png'
import styles from '../Home/CompanySectors.module.css'

const CompanySectors = () => {
    return (
        <section className={styles.sectors} >
            <div className={styles.text}>
                <h1>Conheça nossos setores</h1>
                <p>Quer saber um pouco mais sobre a nossa empresa? <strong>Confira as nossas áreas de atuação</strong></p>
                <Button>VER MAIS</Button>
            </div>

            <div className={styles.a}>
                <img alt='Ícone de funcionários' className={styles.img} src={Sectors} />
            </div>
        </section>
    )
}

export default CompanySectors;