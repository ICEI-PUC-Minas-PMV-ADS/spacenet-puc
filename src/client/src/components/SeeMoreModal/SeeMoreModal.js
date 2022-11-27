import React from 'react'
import Button from '../Buttons/Button'
import styles from './SeeMoreModal.module.css'

const SeeMoreModal = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modalBody}>

                <img className={styles.img} alt='Colegas de trabalho no computador sorrindo' src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
                <h2 className={styles.h2}>Bem-vindo(a) à Spacenet!</h2>
                <div className={styles.textContainer}>
                    <p>Nós estamos trabalhando para construir uma aplicação completa e de fácil utilização.</p>
                    <br />
                    <p>Este é um produto ainda em fase de desenvolvimento, então pode ficar à vontade para dar sugestões de melhorias e de novas funcionalidades.</p>
                    <br />
                   <Button onClick={onClose} styles={{marginBottom: '1rem'}}>OK</Button>
                </div>
            </div>

        </div>
    )
}

export default SeeMoreModal