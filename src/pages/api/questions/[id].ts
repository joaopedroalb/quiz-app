// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import QuestionModel from '../../../model/Question'
import questoes from '../dataBaseQuestion'


export default function handler(req: NextApiRequest,res: NextApiResponse<any>){
  const idReq = +req.query.id

  const myQuestion = questoes.filter(x=>x.id==idReq)[0]

  if(myQuestion != null){
    const obj = myQuestion.toObject()
    res.status(200).json(obj)
  }else{
    res.status(404).send({error:`not found question with id ${idReq}`});
  }
  
}
