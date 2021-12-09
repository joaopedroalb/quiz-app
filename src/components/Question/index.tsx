import QuestionModel from "../../model/Question";
import Answer from "../Answer";
import Header from "../Header";
import styles from './index.module.css'

interface QuestionProps{
    value: QuestionModel
}

const letters = [
    {value:'A',color:"#3772ff"},
    {value:'B',color:"#ff0054"},
    {value:'C',color:"#390099"},
    {value:'D',color:"#ea3546"}
]

export default function Question(props:QuestionProps){
    const question = props.value

    function renderAnswers(){
        return question.answer.map((a,i)=>{
            return <Answer key={i} answer={a} index={i} letter={letters[i].value} bgColor={letters[i].color}/>
        })
    }
    return(
        <div className={styles.questionContainer}>
            <Header text={question.header}/>
            {renderAnswers()}
        </div>
    )
}