import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body)})
        console.log(result)
        response.status(200).json('삭제완료')
        response.redirect('/post')
    }
}