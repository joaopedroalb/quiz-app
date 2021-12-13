import styles from './index.module.css'
import Link from 'next/link'

interface MyButtonProps{
    url?:string
    text:string
    onClick?:(e:any)=>void
}

export default function MyButton(props:MyButtonProps){

    function renderBtn(){
        return(
            <button className={styles.myBtn} 
                    onClick={props.onClick}>
                {props.text}
            </button>
        )
    }

    return props.url?(
        <Link href={props.url}>
            {renderBtn()}
        </Link>
    ):renderBtn()
}