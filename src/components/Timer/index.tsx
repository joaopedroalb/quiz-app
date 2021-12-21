import styles from './index.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps{
    isPlay:boolean
    key:any
    duration:number
    timeOver:()=>void
}

export default function Timer(props:TimerProps){
    return(
        <div className={styles.timer}>
            <CountdownCircleTimer 
                size= {120}
                duration={props.duration}
                onComplete={props.timeOver}
                isPlaying={props.isPlay}
                colors={[
                    ['#BCE596',0.33],
                    ['#F7B801',0.33],
                    ['#ED827A',0.33]
                ]}
            >
            {({remainingTime})=>remainingTime}    
            </CountdownCircleTimer>
        </div>
    )
}