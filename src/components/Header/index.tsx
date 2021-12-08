import styles from './index.module.css'

interface HeaderProps{
    text:string
}

export default function Header(props:HeaderProps){
    return(
        <div className={styles.headerContainer}>
            <h2 className={styles.text}>{props.text}</h2>
        </div>
    )
}