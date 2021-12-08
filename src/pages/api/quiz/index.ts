import type { NextApiRequest, NextApiResponse } from 'next'
import { shuffle } from '../../../functions/arrays'
import questions from '../dataBaseQuestion'

export default(req: NextApiRequest,res: NextApiResponse<any>)=>{
    const ids = questions.map(q=>q.id)
    res.status(200).json(shuffle(ids))
}