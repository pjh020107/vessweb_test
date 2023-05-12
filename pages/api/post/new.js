import { connectDB } from "@/util/database";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let newpost = request.body;
        const timeval = getTime();
        request.body.lastModified = timeval;
        request.body.firstCreated = timeval;
        let result = await db.collection('post').insertOne(request.body)
        return response.redirect(302,'/post')
    }
}
const getTime = () => {
    const today = new Date();

    const dateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)  
    + '-' + ('0' + today.getDate()).slice(-2);
    const timeString = ('0' + today.getHours()).slice(-2)  + ':' 
    + ('0' + today.getMinutes()).slice(-2)  + ':' + ('0' + today.getSeconds()).slice(-2); 
    return dateString+' '+timeString;
}