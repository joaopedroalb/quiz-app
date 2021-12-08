import QuestionModel from "../../model/Question";
import Header from "../Header";
import styles from './index.module.css'

interface QuestionProps{
    value: QuestionModel
}

export default function Question(props:QuestionProps){
    const question = props.value
    return(
        <div className={styles.questionContainer}>
            <Header text={question.header}/>
            {props.value.answer.map((a,i)=>{
                return(
                    <h4 key={i}>
                        {a.value}
                    </h4>
                )
            })}
        </div>
    )
}