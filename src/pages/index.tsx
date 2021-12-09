import type { NextPage } from 'next'
import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/Answer'
import QuestionModel from '../model/Question'
import styles from '../styles/Home.module.css'

const questionMock = new QuestionModel(
  1,
  "Isso é um teste?",
  [
    AnswerModel.correctAnswer("Sim ?"),
    AnswerModel.wrongAnswer("Talvez ?"),
    AnswerModel.wrongAnswer("Espero que seja"),
    AnswerModel.wrongAnswer("Nao ?")
  ]
)

const Home: NextPage = () => {
  const [question,setQuestion] = useState(questionMock)

  function onResponse(index:number){
    setQuestion(question.answeredBy(index));
  }

  return (
    <div className={styles.container}>
     <Question value={question} onResponse={onResponse}/>
    </div>
  )
}

export default Home
