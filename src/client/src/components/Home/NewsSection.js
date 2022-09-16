import React from 'react'
import styles from './NewsSection.module.css'
import SetaCarrosselEsquerda from '../../assets/seta_carrossel_esquerda.png'
import SetaCarrosselDireita from '../../assets/seta_carrossel_direita.png'
import Card from '../Card/Card'

const news = [
  {
    id: '1',
    title: 'Notícia 1',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
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
    title: 'Notícia 4',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
  {
    id: '5',
    title: 'Notícia 5',
    src: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    alt: 'Thumbail da notícia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu....'
  },
]

const NewsSection = () => {
  const carousel = React.useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notícias</h2>
      <ul ref={carousel} className={styles.carousel}>
        {news.map((noticia) => {
          return (
            <li key={noticia.id}>
              <Card
                alt={noticia.alt}
                src={noticia.src}
                title={noticia.title}
                paragraph={noticia.paragraph} />
            </li>
          )
        })}
      </ul>

      <div className={styles.carouselButtos}>
        <div>
          <button onClick={handleLeftClick} className={styles.button}><img alt='Seta Carrossel' src={SetaCarrosselEsquerda} /></button>
        </div>
        <div>
          <button onClick={handleRightClick} className={styles.button}><img alt='Seta Carrossel' src={SetaCarrosselDireita} /></button>
        </div>
      </div>

    </div>
  )
}

export default NewsSection