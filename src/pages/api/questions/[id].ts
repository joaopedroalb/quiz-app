// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import QuestionModel from '../../../model/Question'
import questoes from '../dataBaseQuestion'


export default function handler(req: NextApiRequest,res: NextApiResponse<any>){
  
  res.status(200).json(questoes[0].toObject())
}
