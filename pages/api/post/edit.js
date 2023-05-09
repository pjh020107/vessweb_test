import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response){
    if(request.method == 'POST'){
        let newVal = {
            title : request.body.title,
            content : request.body.content
        }
        const db = (await connectDB).db('vessweb');
        await db.collection('post').updateOne(
            {_id : new ObjectId(request.body._id)},
            {$set : newVal}
        )
        return response.redirect(302,'/post')
    }
}