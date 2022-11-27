import React from 'react'
import Hero from '../Hero/Hero'
import CardSetores from '../Cards/CardSetores'
import styles from './Setores.module.css'

const fields = [
  {
    id: 1,
    title: 'Tecnologia',
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu.',
    button: 'NOVAS VAGAS DISPONIVEIS',
    disabled: ''
  },
  {
    id: 2,
    title: 'Marketing',
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu.',
    button: 'SEM VAGAS DISPONIVEIS',
    disabled: 'disabled',
  },
  {
    id: 3,
    title: 'Recursos Humanos',
    src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, tellu.',
    button: 'NOVAS VAGAS DISPONIVEIS',
    disabled: ''
  },
]

const Setores = () => {
  return (
    <div>
      <Hero title="Conhecendo nossos setores" />
      <section>
        <ul className={styles.ul}>
          {fields.map((sector) => {
            return (
              <li className={styles.li} key={sector.id}>
                <CardSetores
                  title={sector.title}
                  text={sector.text}
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

export default Setores