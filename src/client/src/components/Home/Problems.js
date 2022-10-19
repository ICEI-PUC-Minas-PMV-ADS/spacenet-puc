import React from 'react'
import ProblemsPhoto from '../../assets/problems.png'
import ButtonWhite from '../Buttons/ButtonWhite'
import styles from './Problems.module.css'

const Problems = () => {
  return (
    <section className={styles.problems}>
      <div className={styles.grid}>
        <div>
          <img className={styles.img} alt='Ícone emburrado' src={ProblemsPhoto} />
        </div>
        
        <div className={styles.text}>
          <h1>Nos ajude a encontrar os problemas.</h1>
          <p>O nosso setor de TI está pronto para te atender.</p>
          <ButtonWhite>RELATAR PROBLEMA</ButtonWhite>
        </div>
      </div>

    </section>
  )
}

export default Problems