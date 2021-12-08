import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../dataBaseQuestion'

export default(req: NextApiRequest,res: NextApiResponse<any>)=>{
    res.status(200).json(questions.map(q=>q.id))
}