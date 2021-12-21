import AnswerModel from "../../model/Answer";
import QuestionModel from "../../model/Question";

const questions: QuestionModel[] =[
    new QuestionModel(1,"Quem ganhou a copa de 2002 ?",[
        AnswerModel.wrongAnswer("Alemanha"),
        AnswerModel.wrongAnswer("Italia"),
        AnswerModel.wrongAnswer("Espanha"),
        AnswerModel.correctAnswer("Brasil")
    ]),
    new QuestionModel(2,"Qual jogador fez o gol da vitoria do Palmeiras na libertadores 2021 ?",[
        AnswerModel.wrongAnswer("Raphael Veiga"),
        AnswerModel.wrongAnswer("Gustavo Scarpa"),
        AnswerModel.wrongAnswer("Felipe Melo"),
        AnswerModel.correctAnswer("Deyverson")
    ]),
    new QuestionModel(3,"Qual desses clubes o jogador Garricha NUNCA jogou?",[
        AnswerModel.wrongAnswer("Fortaleza"),
        AnswerModel.wrongAnswer("Olaria"),
        AnswerModel.wrongAnswer("Novo Hamburgo"),
        AnswerModel.correctAnswer("Ypiranga")
    ]),
    new QuestionModel(4,"Qual desses clubes o jogador Wellington Paulista NUNCA jogou?",[
        AnswerModel.wrongAnswer("Fortaleza"),
        AnswerModel.wrongAnswer("West Ham"),
        AnswerModel.wrongAnswer("Santos"),
        AnswerModel.correctAnswer("Benfica")
    ]),
    new QuestionModel(5,"Qual o grande ídolo do Lionel Messi ?",[
        AnswerModel.wrongAnswer("Diego Maradona"),
        AnswerModel.wrongAnswer("Pelé"),
        AnswerModel.wrongAnswer("Javier Saviola"),
        AnswerModel.correctAnswer("Pablo Aimar")
    ]),
    new QuestionModel(6,"Quantos gols o ex-jogador Rogério Ceni marcou em sua carreira ?",[
        AnswerModel.wrongAnswer("142"),
        AnswerModel.wrongAnswer("126"),
        AnswerModel.wrongAnswer("135"),
        AnswerModel.correctAnswer("131")
    ]),
    new QuestionModel(7,"Quem ganhou a bola de ouro de 2018 ?",[
        AnswerModel.wrongAnswer("Neymar"),
        AnswerModel.wrongAnswer("Cristiano Ronaldo"),
        AnswerModel.wrongAnswer("Lionel Messi"),
        AnswerModel.correctAnswer("Luka Modric")
    ]),
    new QuestionModel(8,"Messi em 2019 foi eleito melhor do mundo pela sexta vez. Quem mais disputou o prêmio ?",[
        AnswerModel.wrongAnswer("Salah e Mané"),
        AnswerModel.wrongAnswer("Van Dijk e Mané"),
        AnswerModel.wrongAnswer("Van Dijk e Salah"),
        AnswerModel.correctAnswer("Cristiano Ronaldo e Van Dijk")
    ]),
    new QuestionModel(9,"Qual desses jogadores NÃO jogou com Kevin De Bruyne?",[
        AnswerModel.wrongAnswer("Vincent Kompany"),
        AnswerModel.wrongAnswer("Mohammed Salah"),
        AnswerModel.wrongAnswer("Thibaut Courtois"),
        AnswerModel.correctAnswer("Mario Balotelli")
    ]),
    new QuestionModel(10,"Qual Time que mais ganhou Copa do Brasil?",[
        AnswerModel.wrongAnswer("Grêmio"),
        AnswerModel.wrongAnswer("Atlético Mineiro"),
        AnswerModel.wrongAnswer("Flamengo"),
        AnswerModel.correctAnswer("Cruzeiro")
    ]),
]

export default questions