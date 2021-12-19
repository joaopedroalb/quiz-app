import styles from "./index.module.css"

interface StatisticProps{
    value:any
    text:string
    bgColor?:string
    textColor?:string
}

export default function Statistic(props:StatisticProps){
    return(
        <div className={styles.statistic}>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.value} style={{
                color:props.textColor??'#ff0000'
            }}> 
                {props.value}
            </div>
        </div>
    )
}   