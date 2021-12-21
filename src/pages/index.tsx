import type { NextPage } from 'next'
import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router' 
import MyButton from '../components/MyButton'
import styles from '../styles/Home.module.css'
import DropdownQuestion from '../components/DropdownQuestion'
import { QuizContext } from '../context/quizContext'


const Home: NextPage = () => {
  const {setNumberQuestion,setStarted} = useContext(QuizContext)

  useEffect(()=>{
    setNumberQuestion(1);
    setStarted(false);
  },[])
  
  return(
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <h2 className={styles.title}><strong>F</strong>UT Quiz</h2>
        <h4 className={styles.subTitle}>{`"Veja o quanto você sabe de futebol"`}</h4>
      </header>
      <div className={styles.inputContainer}>
        <DropdownQuestion/>
        <MyButton url='/game' text='Jogar' onClick={()=>setStarted(true)}/>
      </div>
    </div>
  )
}

export default Home
