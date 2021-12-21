import type { NextPage } from 'next'
import { useContext, useEffect, useRef, useState } from 'react'
import QuestionModel from '../model/Question'
import Quiz from '../components/Quiz'
import { useRouter } from 'next/router' 
import { QuizContext } from '../context/quizContext'
import MyButton from '../components/MyButton'
import styles from "../styles/Game.module.css"
import { resolve } from 'path'

const BASE_URL = "/api"

export default function Game(){
    
  const router = useRouter()

  const {setCorrectQuestion,correctQuestion} = useContext(QuizContext)
 
  const {started,numberQuestion} = useContext(QuizContext)

  const [question,setQuestion] = useState<QuestionModel>()
  const [idList,setIdList] = useState<number[]>([])
  const [isPlay,setIsPlay] = useState<boolean>(true)

  async function loadIdsQuestion(){
    const resp = await fetch(`${BASE_URL}/quiz`)
    const idsAux = await resp.json()
    
    const ids:number[] =[]
    for(let i = 0; i<numberQuestion;i++){
      ids.push(idsAux[i])
    }
    console.log(ids)
    setIdList(ids)
  }

  async function loadQuestion(id:number){
    const resp = await fetch(`${BASE_URL}/questions/${id}`)
    const questionJson = await resp.json();
    const newQuestion = QuestionModel.createByObject(questionJson);
    setIsPlay(true);
    setQuestion(newQuestion)
    

  }

  useEffect(()=>{
    setCorrectQuestion(0)
    loadIdsQuestion();
  },[])

  useEffect(()=>{
    idList.length > 0 && loadQuestion(idList[0])
      
  },[idList])
  
  async function answeredQuestion(questionAnswered:QuestionModel){
    const correct = questionAnswered.isCorrect
    
    setIsPlay(false)
    setCorrectQuestion(correctQuestion+(correct?1:0))
    console.log(questionAnswered.isCorrect);
    console.log(correctQuestion+(correct?1:0))
    
    //task delay para passar a pergunta depois de respondida e o usuario ver a certa caso tenha errado
    
    setQuestion(questionAnswered)
    setTimeout(()=>nextStep(),2000)
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
      }
    })
  }

    return started ? (question ?(
        <Quiz 
        question={question}
        last={idNextQuestion() === undefined}
        answeredQuestion={answeredQuestion}
        nextStep={nextStep}
        isPlay={isPlay}
        />
    ):(<div></div>)):(
    
    <div className={styles.container}>
      <h1>Escolha quantas perguntas você deseja responder antes</h1>
      <MyButton url='/' text='Home' />
    </div>)
}