import AnswerModel from '../../model/Answer';
import questions from '../../pages/api/dataBaseQuestion';
import styles from './index.module.css'

interface AnswerProps{
    answer: AnswerModel
    index:number
    letter:string
    bgColor:string
}

export default function Answer(props:AnswerProps){
    const answer = props.answer;
    return(
        <div className={styles.answer}>
            <div className={styles.content}>

                <div className={styles.front}>
                    <div className={styles.letter} style={{backgroundColor:props.bgColor}}>
                        {props.letter}
                    </div>
                    
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>

                {/* <div className={styles.back}>

                </div> */}
            </div>
        </div>
    )
}