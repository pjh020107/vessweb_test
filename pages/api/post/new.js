import { connectDB } from "@/util/database";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let result = await db.collection('post').insertOne(request.body)
        return response.redirect(302,'/post')
    }
}