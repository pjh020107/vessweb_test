import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail (props){
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})
    return (
        <div>
            {result.title}
            {result.content}
        </div>
    )
}