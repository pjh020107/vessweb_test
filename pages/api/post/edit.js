import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let session = await getServerSession(request, response, authOptions)
        let newVal = {
            title : request.body.title,
            content : request.body.content,
            lastModified : getTime(),
            LastAuthor : session.user.name,
        }
        let find = await db.collection('post').findOne({_id: new ObjectId(request.body._id)});
        if(session.user.team == find.team || session.user.role == 'admin'){
            await db.collection('post').updateOne(
                {_id : new ObjectId(request.body._id)},
                {$set : newVal}
            )
            return response.redirect(302,'/post')
        }
        else{
            response.status(500).json('수정 권한이 없습니다')
            response.redirect('/post')
        }
    }
}
const getTime = () => {
    const curr = new Date();
    const utc = 
        curr.getTime() + 
        (curr.getTimezoneOffset() * 60 * 1000);
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const today = 
        new Date(utc + (KR_TIME_DIFF));

    const dateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  
    + '-' + ('0' + today.getDate()).slice(-2);
    const timeString = ('0' + today.getHours()).slice(-2)  + ':' 
    + ('0' + today.getMinutes()).slice(-2)  + ':' + ('0' + today.getSeconds()).slice(-2); 
    return dateString+' '+timeString;
}