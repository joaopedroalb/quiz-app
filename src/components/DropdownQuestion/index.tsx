import style from "./index.module.css"

import questions from "../../pages/api/dataBaseQuestion"

export default function DropdownQuestion(){

    function renderOptions(){
        return questions.map((q,i)=>{
            return <option key={q.id} value={i+1}>{i+1}</option>
        })
    }

    return(
        <div className={style.container}>
            <h1>Selecione quantas questões deseja responder</h1>
            <select className={style.dropdown}>
                {renderOptions()}
            </select>
        </div>
    )
}