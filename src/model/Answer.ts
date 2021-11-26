export default class AnswerModel{
    #value: string
    #isCorrect: boolean
    #show: boolean

    constructor(value:string,isCorrect:boolean){
        this.#value = value
        this.#isCorrect=isCorrect
        this.#show=false
    }

    get value():string{
        return this.#value
    }

    get isCorrect():boolean{
        return this.#isCorrect
    }

    get show():boolean{
        return this.#show
    }

    showAnswer(){
        this.#show = true;
        return this.#value;
    }
}