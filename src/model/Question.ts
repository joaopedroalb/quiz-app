import { shuffle } from "../functions/arrays";
import AnswerModel from "./Answer";

export default class QuestionModel{
    #id: number
    #header: string
    #answers: AnswerModel[]
    #isCorrect: boolean

    constructor (id:number,header:string,answers:AnswerModel[], isCorrect=false){
        this.#id = id;
        this.#header = header;
        this.#answers = answers;
        this.#isCorrect = isCorrect;
    }

    get id():number{
        return this.#id
    }

    get header():string{
        return this.#header
    }

    get answers():AnswerModel[]{
        return this.#answers
    }

    get isCorrect():boolean{
        return this.#isCorrect
    }

    get isAnswered():boolean{
        if(this.#answers.length==0)
            return false
        else
            return this.#answers.filter(x=>x.show).length>0
    }

    answeredBy(index:number):QuestionModel{
        const correct = this.#answers[index]?.isCorrect
        const answers = this.#answers.map((answer,i)=>{
            const answersSelected = index === i;
            return (answersSelected || answer.isCorrect) ? answer.reveal():answer
        })
        return new QuestionModel(this.#id,this.#header,answers,correct)
    }

    shuffleAnswers():QuestionModel{
        let answersShuffle = shuffle(this.#answers);
        return new QuestionModel(this.#id,this.#header,answersShuffle,this.#isCorrect)
    }

    toObject(){
        return{
            id: this.#id,
            header: this.#header,
            answers: this.#answers.map(resp=>resp.toObject()),
            isCorrect:this.#isCorrect,
            answered:this.isAnswered
        }
    }

    static createByObject(obj:QuestionModel):QuestionModel{
        const answers = obj.answers.map(a=>AnswerModel.createByObject(a))
        return new QuestionModel(obj.id,obj.header,answers,obj.isCorrect)
    }

}