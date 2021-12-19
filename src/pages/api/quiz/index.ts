import type { NextApiRequest, NextApiResponse } from 'next'
import { shuffle } from '../../../functions/arrays'
import questions from '../dataBaseQuestion'

export default function handler(req: NextApiRequest,res: NextApiResponse<any>){
    let ids = questions.map(q=>q.id)
    //desestruturar melhor depois fazendo um context com o usuario quando fizer um home
    //ids = [ids[0],ids[1],ids[2],ids[3],ids[4]]
    res.status(200).json(shuffle(ids))
}