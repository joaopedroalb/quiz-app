import styles from "./index.module.css"
import QuestionModel from "../../model/Question"
import Question from "../Question"
import MyButton from "../MyButton"

interface QuizProps{
    question:QuestionModel
    last:boolean
    answeredQuestion:(question:QuestionModel) => void
    nextStep:()=>void
}

export default function Quiz(props:QuizProps){


    function onResponse(index:number){
        if(!props.question.isAnswered){
            props.answeredQuestion(props.question.answeredBy(index))
        }
    }

    function renderQuestion(){
        return(
            <Question 
                value={props.question}
                onResponse={onResponse}
                timeOver={props.nextStep}
            />
        )
    }

    return(
        <div className={styles.quiz}>
            {props.question?renderQuestion():false}

            {/* <MyButton 
                onClick={props.nextStep}
                text={props.last?"Finalizar":"Próximo"}
            /> */}
        </div>
    )
}