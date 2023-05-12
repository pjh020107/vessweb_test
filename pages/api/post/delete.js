import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let session = await getServerSession(request, response, authOptions)
        let find = await db.collection('post').findOne({_id: new ObjectId(request.body)});
        if(session.user.team == find.team || session.user.role == 'admin'){
            let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body)})
            response.status(200).json('삭제완료')
            response.redirect('/post')
        }
        else{
            response.status(500).json('삭제 권한이 없습니다')
            response.redirect('/post')
        }
    }
}