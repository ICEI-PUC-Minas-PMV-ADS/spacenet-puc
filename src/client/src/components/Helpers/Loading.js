import React from 'react'
import styles from './Loading.module.css'

const Loading = ({style}) => {
  return (
    <div style={style} className={styles.spinner}></div>
  )
}

export default Loading