import React from 'react'
import styles from './FirstSection.module.css'
import ButtonWhite from '../Buttons/ButtonWhite'
import SeeMoreModal from '../SeeMoreModal/SeeMoreModal'

const FirstSection = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false)


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return (
        <>
            {isModalVisible && (
                <SeeMoreModal onClose={handleCloseModal} visible={isModalVisible} />
            )}

            <section className={styles.container}>

                <div className={`animeLeftSlow ${styles.text}`}>
                    <h1 className={styles.title}>Para deixar o dia a dia mais simples.</h1>
                    <p className={styles.paragraph}>Conheça a Spacenet.</p>
                </div>
                <div className='animeLeftSuperSlow'>
                    <ButtonWhite onClick={handleOpenModal}>VER MAIS</ButtonWhite>
                </div>
            </section>
        </>

    )
}

export default FirstSection