import QuestionModel from "../../model/Question";
import Answer from "../Answer";
import Header from "../Header";
import styles from './index.module.css'

interface QuestionProps{
    value: QuestionModel
}

export default function Question(props:QuestionProps){
    const question = props.value

    function renderAnswers(){
        return question.answer.map((a,i)=>{
            return <Answer key={i} answer={a} index={i} letter={`${i+1}`} bgColor={"#F2C866"}/>
        })
    }
    return(
        <div className={styles.questionContainer}>
            <Header text={question.header}/>
            {renderAnswers()}
        </div>
    )
}