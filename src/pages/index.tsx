import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import AnswerModel from '../model/Answer'
import QuestionModel from '../model/Question'
import styles from '../styles/Home.module.css'
import Quiz from '../components/Quiz'
import { useRouter } from 'next/router' 


const BASE_URL = "/api"

const Home: NextPage = () => {
  const router = useRouter()

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

  return question ?(
    <Quiz 
    question={question}
    last={idNextQuestion() === undefined}
    answeredQuestion={answeredQuestion}
    nextStep={nextStep}
    />
  ):(<div></div>)
}

export default Home
