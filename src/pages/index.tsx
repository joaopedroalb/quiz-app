import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/Answer'
import QuestionModel from '../model/Question'
import MyButton from '../components/MyButton'
import styles from '../styles/Home.module.css'
import Quiz from '../components/Quiz'

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

const BASE_URL = "/api"

const Home: NextPage = () => {
  const [question,setQuestion] = useState(questionMock)
  const [idList,setIdList] = useState<number[]>([])

  async function loadIdsQuestion(){
    const resp = await fetch(`${BASE_URL}/quiz`)
    const ids = await resp.json()
    console.log(ids)
    setIdList(ids)
  }

  async function loadQuestion(id:number){
    const resp = await fetch(`${BASE_URL}/questions/${id}`)
    const questionJson = await resp.json();
    const newQuestion = QuestionModel.createByObject(questionJson);
    setQuestion(newQuestion)

  }

  useEffect(()=>{
    loadIdsQuestion();
  },[])

  useEffect(()=>{
    idList.length > 0 && loadQuestion(idList[0])
      
  },[idList])
  
  function answeredQuestion(question:QuestionModel){

  }
  function nextStep(){

  }

  return (
      <Quiz 
        question={question}
        last={true}
        answeredQuestion={answeredQuestion}
        nextStep={nextStep}
      />
  )
}

export default Home
