import style from "./index.module.css"

import questions from "../../pages/api/dataBaseQuestion"
import { useContext } from "react"
import { QuizContext } from "../../context/quizContext"

export default function DropdownQuestion(){

    const {setNumberQuestion} = useContext(QuizContext)

    function renderOptions(){
        return questions.map((q,i)=>{
            return <option key={q.id} value={i+1}>{i+1}</option>
        })
    }

    return(
        <div className={style.container}>
            <h1>Selecione quantas questões deseja responder</h1>
            <select className={style.dropdown} onChange={(e)=>setNumberQuestion(+e.target.value)} >
                {renderOptions()}
            </select>
        </div>
    )
}