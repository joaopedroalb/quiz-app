import { shuffle } from "../functions/arrays";
import AnswerModel from "./Answer";

export default class QuestionModel{
    #id: number
    #header: string
    #answers: AnswerModel[]
    #isCorrect: boolean

    constructor (id:number,header:string,answers:AnswerModel[], isCorrect?:boolean){
        this.#id = id;
        this.#header = header;
        this.#answers = answers;
        this.#isCorrect = false;
    }

    get id():number{
        return this.#id
    }

    get header():string{
        return this.#header
    }

    get answer():AnswerModel[]{
        return this.#answers
    }

    get isCorrect():boolean{
        return this.#isCorrect
    }

    get isAnswered():boolean{
        if(this.#answers.length==0)
            return false
        else
            return this.#answers.filter(x=>x.isCorrect).length>0
    }

    shuffleAnswers():QuestionModel{
        let answersShuffle = shuffle(this.#answers);
        return new QuestionModel(this.#id,this.#header,answersShuffle,this.#isCorrect)
    }

    toObject(){
        return{
            id: this.#id,
            header: this.#header,
            answer: this.#answers.map(resp=>resp.toObject()),
            isCorrect:this.#isCorrect
        }
    }

}