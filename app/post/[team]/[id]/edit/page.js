import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    
    return (
        <div>
            <h1>Edit</h1>
            <form action="/api/post/edit" method="POST">
                <input name="title" placeholder="글 제목" defaultValue={result.title} />
                <input name="content" placeholder="글 내용" defaultValue={result.content} />
                <input name="_id" style={{display:'none'}} defaultValue={result._id.toString()} />
                <button>버튼</button>
            </form>
        </div>
    )
}