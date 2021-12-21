import type { NextPage } from 'next'
import { useContext, useEffect, useRef, useState } from 'react'
import QuestionModel from '../model/Question'
import Quiz from '../components/Quiz'
import { useRouter } from 'next/router' 
import { QuizContext } from '../context/quizContext'
import MyButton from '../components/MyButton'
import styles from "../styles/Game.module.css"

const BASE_URL = "/api"

export default function Game(){
    
  const router = useRouter()

  const {started} = useContext(QuizContext)

  const [question,setQuestion] = useState<QuestionModel>()
  const [correctQuestions,setCorrectQuestions] = useState<number>(0)
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
  
  function answeredQuestion(questionAnswered:QuestionModel){
    setQuestion(questionAnswered)
    const correct = questionAnswered.isCorrect
    setCorrectQuestions(correctQuestions+(correct?1:0));
  }

  function idNextQuestion(){
    if(question===undefined)
      return undefined

    const nextIndex = idList.indexOf(question.id)+1;
    return idList[nextIndex]
  }

  function nextStep(){
    const nextId = idNextQuestion();
    nextId ? goToNextQuestion(nextId):finishQuiz()
  }

  function goToNextQuestion(index:number){
    loadQuestion(index)
  }

  function finishQuiz(){
    router.push({
      pathname:"/result",
      query:{
        total:idList.length,
        corrects: correctQuestions
      }
    })
  }

    return started ? (question ?(
        <Quiz 
        question={question}
        last={idNextQuestion() === undefined}
        answeredQuestion={answeredQuestion}
        nextStep={nextStep}
        />
    ):(<div></div>)):(
    
    <div className={styles.container}>
      <h1>Escolha quantas perguntas você deseja responder antes</h1>
      <MyButton url='/' text='Home' />
    </div>)
}