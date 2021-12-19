import { useRouter } from "next/router"
import MyButton from "../components/MyButton"
import Roubo from "../components/Roubo"
import Statistic from "../components/Statistic"
import styles from '../styles/Result.module.css'

export default function Result(){
    const router = useRouter()

    const total = router.query.total != undefined ? +router.query.total:0
    const corrects = router.query.corrects != undefined ? +router.query.corrects:0
    const percentual = Math.round((corrects/total)*100)

    const text = () =>{
        if(percentual >90)
            return "TU É O DEUS DO FUTEBOL"
        if(percentual>=70)
            return "Parabens você sabe de futebol"
        if(percentual >= 50)
            return "Não é ignorante no assunto"
        if(percentual > 20)
            return "Ta mal das pernas, tem que estudar"
        if(percentual > 0)
            return "SEU HORRIVEL"
        
        return "kkkkkkkkkkkkkkk Parabéns irmão o que Íbis joga de bola você conhece de futebol"
    }

    return percentual>100?(
        <div className={styles.containerRoubo}>
            <Roubo/>
            <MyButton url="/" text="Tente mais uma vez só que com a dignidade de não mudar a url, obrigado"/>
        </div>
    ):(
        <div className={styles.container}>
            <h1>Resultado Final</h1>
            <div className={styles.containerStatics}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Corretas" value={corrects} />
                <Statistic  text="Porcentagem" value={`${percentual}%`}/>
            </div>
            <h1>{text()}</h1>
            <MyButton url="/" text="Jogar Novamente"/>
        </div>
    )
}