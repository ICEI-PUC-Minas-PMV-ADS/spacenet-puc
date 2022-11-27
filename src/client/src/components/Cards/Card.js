import React from 'react'
import styles from './Card.module.css'

const Card = ({ onClick, src, title, paragraph, alt }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <img className={styles.image} alt={alt} src={src} />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </div>
  )
}

export default Card