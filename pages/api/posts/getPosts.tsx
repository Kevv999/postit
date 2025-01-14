import type {NextApiRequest, NextApiResponse} from "next";
import prisma from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){
    if(req.method === "GET"){
        
        //fetch all post
        try{
            const data = await prisma.post.findMany({
                include: {
                    user: true,
                    comments: true,
                },
                orderBy:{
                    createdAt: "desc",
                },
            })
            
            res.status(200).json(data)
        }catch(err){
            res.status(403).json({err: "Error fetching posts."})
        }
        }   

}