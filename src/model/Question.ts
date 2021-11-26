import AnswerModel from "./Answer";

export default class QuestionModel{
    #id: number
    #header: string
    #answers: AnswerModel[]
    #isCorrect: boolean

    constructor (id:number,header:string,answers:AnswerModel[],isCorrect:boolean){
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

}