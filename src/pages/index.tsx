import type { NextPage } from 'next'
import Question from '../components/Question'
import AnswerModel from '../model/Answer'
import QuestionModel from '../model/Question'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const question = new QuestionModel(
    1,
    "Isso é um teste?",
    [
      AnswerModel.correctAnswer("Sim ?"),
      AnswerModel.wrongAnswer("Nao ?")
    ]
  )
  return (
    <div className={styles.container}>
     <Question value={question}/>
    </div>
  )
}

export default Home
