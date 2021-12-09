export default class AnswerModel{
    #value: string
    #isCorrect: boolean
    #show: boolean

    constructor(value:string,isCorrect:boolean,show=false){
        this.#value = value
        this.#isCorrect=isCorrect
        this.#show=show
    }

    static correctAnswer(value:string){
        return new AnswerModel(value,true)
    }

    static wrongAnswer(value:string){
        return new AnswerModel(value,false)
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

    reveal(){
        return new AnswerModel(this.#value,this.#isCorrect,true);
    }

    showAnswer(){
        this.#show = true;
        return this.#value;
    }

    toObject(){
        return{
            value: this.#value,
            isCorrect: this.#isCorrect,
            show: this.#show
        }
    }
}