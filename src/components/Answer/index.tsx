import AnswerModel from '../../model/Answer';
import questions from '../../pages/api/dataBaseQuestion';
import styles from './index.module.css'

interface AnswerProps{
    answer: AnswerModel
    index:number
    letter:string
    bgColor:string
    onResponse:(index:number)=>void
}

export default function Answer(props:AnswerProps){
    const answer = props.answer;
    return(
        <div className={styles.answer} onClick={()=>props.onResponse(props.index)}>
            <div className={styles.content}>
                {!answer.show?(
                <div className={styles.front}>
                    <div className={styles.letter} style={{backgroundColor:props.bgColor}}>
                        {props.letter}
                    </div>
                    
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                ):(
                <div className={styles.back}>
                    {answer.isCorrect?(
                    <div className={styles.correct}>
                        <div>A resposta certa é...</div>
                        <div className={styles.value}>{answer.value}</div>
                    </div>
                    ):(
                    <div className={styles.wrong}>
                        <div>A resposta informada esta errada...</div>
                        <div className={styles.value}>{answer.value}</div>
                    </div>
                    )}
                </div>
                )}
                

                
                
            </div>
        </div>
    )
}