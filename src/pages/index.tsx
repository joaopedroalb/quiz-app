import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router' 
import MyButton from '../components/MyButton'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const router = useRouter()

  return(
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}><strong>F</strong>UT Quiz</h1>
        <h5>{`"Veja o quanto você sabe de futebol"`}</h5>
      </header>
      <MyButton url='/game' text='Jogar' />
    </div>
  )
}

export default Home
