
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    return (
        <div className=" ml-20 mt-10 flex flex-col items-center">
            <h1 className=" font-bold text-2xl ">Edit Post</h1>
            <form action="/api/post/edit" method="POST" id="edit">
                <div className="flex mt-5">
                    <div className=" flex flex-col items-end">
                        <span className=" mb-6">Author</span>
                        <span className=" mb-5">Team Name</span>
                        <span className=" mb-5">Title</span>
                        <span className=" mb-6">Content</span>
                    </div>
                    <div>
                        <input name="team" value={result.team} readOnly className=" hidden"/>
                        <input name="semester" value={result.semester} readOnly className=" hidden"/>
                        <input name="_id" className=" hidden" defaultValue={result._id.toString()} />
                        <input name="author" readOnly defaultValue={result.FirstAuthor} className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="teamname" value={result.teamname} readOnly className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="title" placeholder="글 제목" className=" mb-5 ml-6 border border-slate-950 min-w-[260px]" defaultValue={result.title}/><br />
                        <textarea name="content" placeholder="글 내용" rows="15" cols="100" className=" mb-5 ml-6 border border-slate-950" defaultValue={result.content}/><br />
                    </div>
                </div>
            </form>
            <button type="submit" form="edit" 
            className=" px-5 mb-10 text-sm border border-slate-500 mt-5 bg-gray-300 hover:bg-gray-800 hover:text-light transition-all duration-200">Edit Post</button>
        </div>
    )
}