import React from 'react'
import Hero from '../Hero/Hero'
import CardSetores from '../Cards/CardSetores'
import styles from './Noticias.module.css'

const fields = [
  {
    id: '1',
    title: 'Notícia 1',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....',
    date: '17-03-1997'
  },
  {
    id: '2',
    title: 'Notícia 2',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
  {
    id: '3',
    title: 'Notícia 3',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
  {
    id: '4',
    title: 'Notícia 100',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
  {
    id: '5',
    title: 'Notícia 200',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
  {
    id: '6',
    title: 'Notícia 6',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
]

const Noticias = () => {
  return (
    <div>
      <Hero title="Notícias da semana" />
      <section>
        <ul className={styles.ul}>
          {fields.map((sector) => {
            return (
              <li className={styles.li} key={sector.id}>
                <CardSetores
                  title={sector.title}
                  text={sector.paragraph}
                  src={sector.src}
                  alt={sector.alt}
                  button={sector.button}
                  disabled={sector.disabled} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Noticias;