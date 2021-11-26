export default class QuestionModel{
    #id: number
    #header: string
    #answer: any[]
    #isCorrect: boolean
    //#isAnswered:boolean

    constructor (id:number,header:string,answer:any[],isCorrect:boolean){
        this.#id = id;
        this.#header = header;
        this.#answer = answer;
        this.#isCorrect = isCorrect;
    }

    get id():number{
        return this.#id
    }

    get header():string{
        return this.#header
    }

    get answer():any[]{
        return this.#answer
    }

    get isCorrect():boolean{
        return this.#isCorrect
    }

    // get isAnswered():boolean{
    //     return.this.#isAnswered;
    // }

}