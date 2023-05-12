import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import EditDeleteBtn from "../../components/EditDeleteBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Detail (props){
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})
    let session = await getServerSession(authOptions)
    return (
        <div className=" ml-20 mt-10 flex flex-col items-center">
            <h1 className=" font-bold text-2xl ">View Post Detail</h1>
            <div className=" w-full">
                <div className=" flex flex-col items-end text-xs font-sans">
                    <span>First Posted : {result.FirstAuthor}, {result.firstCreated}</span>
                    <span>Recently Posted : {result.LastAuthor}, {result.lastModified}</span>
                </div>
            </div>
            <div className="flex mt-5">
                    <div className=" flex flex-col items-end">
                        <span className=" mb-6">Author</span>
                        <span className=" mb-5">Team Name</span>
                        <span className=" mb-5">Title</span>
                        <span className=" mb-6">Content</span>
                    </div>
                    <div>
                        <input name="author" readOnly defaultValue={result.FirstAuthor} className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="teamname" value={result.teamname} readOnly className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="title" placeholder="글 제목" readOnly className=" mb-5 ml-6 border border-slate-950 min-w-[260px]" defaultValue={result.title}/><br />
                        <textarea name="content" placeholder="글 내용" readOnly rows="15" cols="100" className=" mb-5 ml-6 border border-slate-950" defaultValue={result.content}/><br />
                    </div>
            </div>
            {session.user.role=='admin' || (session.user.team==result.team && session.user.semester==result.semester)
        ? <EditDeleteBtn result={result} /> : null}
        </div>
    )
}