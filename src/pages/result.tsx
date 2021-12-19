import { useRouter } from "next/router"
import MyButton from "../components/MyButton"
import Statistic from "../components/Statistic"
import styles from '../styles/Result.module.css'

export default function Result(){
    const router = useRouter()

    const total = router.query.total != undefined ? +router.query.total:0
    const corrects = router.query.corrects != undefined ? +router.query.corrects:0
    const percentual = Math.round((corrects/total)*100)

    return(
        <div className={styles.container}>
            <h1>Resultado Final</h1>
            <div className={styles.containerStatics}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Corretas" value={corrects} />
                <Statistic  text="Porcentagem" value={`${percentual}%`}/>
            </div>
            <MyButton url="/" text="Jogar Novamente"/>
        </div>
    )
}