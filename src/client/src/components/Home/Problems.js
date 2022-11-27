import React from 'react'
import ProblemsPhoto from '../../assets/problems.png'
import ButtonWhite from '../Buttons/ButtonWhite'
import styles from './Problems.module.css'
import SupportModal from '../SupportModal/SupportModal'

const Problems = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <section className={styles.problems}>

      {isModalVisible && (
        <SupportModal onClose={handleCloseModal} visible={isModalVisible} />
      )}


      <div className={styles.grid}>
        <div>
          <img className={styles.img} alt='Ícone emburrado' src={ProblemsPhoto} />
        </div>

        <div className={styles.text}>
          <h1>Nos ajude a encontrar os problemas.</h1>
          <p>O nosso setor de TI está pronto para te atender.</p>
          <ButtonWhite onClick={handleOpenModal}>RELATAR PROBLEMA</ButtonWhite>
        </div>
      </div>

    </section>
  )
}

export default Problems