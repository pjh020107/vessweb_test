import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import bcrypt from 'bcrypt';
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('vessweb');
        let session = await getServerSession(request, response, authOptions)
        let find = await db.collection('user').findOne({username : session.user.username});

        const pwcheck = await bcrypt.compare(request.body.Current, find.password);
        if (!pwcheck) {
            return response.status(500).json('현재 비밀번호가 틀렸습니다')
        }
        if(request.body.NewPw == request.body.NewPwCheck){
            const hash = await bcrypt.hash(request.body.NewPw, 10);
            let newVal = {
                password : hash
            }
            let result = await db.collection('user').updateOne(
                    {_id : new ObjectId(find._id)},
                    {$set : newVal}
            )
            return response.status(200).json('비밀번호 변경 완료')
        }
        else{
            return response.status(500).json('새로 설정하려는 비밀번호가 바르게 입력되지 않았습니다.')
        }
    }
}