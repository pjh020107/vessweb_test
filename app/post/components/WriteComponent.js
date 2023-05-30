'use client'

import { useRouter } from "next/navigation";
export default function WriteComponent({session}) {
    const router = useRouter();
    return (
        <div className=" ml-20 mt-10 flex flex-col items-center">
            <h1 className=" font-bold text-2xl ">New Post</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const formdata = new FormData(e.target);
                fetch('/api/post/new',{method : 'POST', body:formdata})
                    .then((r)=> r.json())
                    .then((result)=>{ 
                        alert(result)
                        router.push('/post');
                    })}} id="write">
                <div className="flex mt-5">
                    <div className=" flex flex-col items-end">
                        <span className=" mb-6">Author</span>
                        <span className=" mb-6">Team Name</span>
                        <span className=" mb-6">Title</span>
                        <span className=" mb-6">Content</span>
                    </div>
                    <div>
                        <input name="team" value={session.user.team} readOnly className=" hidden"/>
                        <input name="semester" value={session.user.semester} readOnly className=" hidden"/>
                        <input name="FirstAuthor" value={session.user.name} readOnly className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="LastAuthor" value={session.user.name} readOnly className=" hidden"/>
                        <input name="teamname" value={session.user.teamname} readOnly className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <input name="title" placeholder="글 제목" className=" mb-5 ml-6 border border-slate-950 min-w-[260px]"/><br />
                        <textarea name="content" placeholder="글 내용" rows="15" cols="100" className=" mb-5 ml-6 border border-slate-950"/><br />
                        <input type="file" name="file"></input>
                    </div>
                </div>
            </form>
            <button type="submit" form="write" 
            className=" px-5 mb-10 text-sm border border-slate-500 mt-5 bg-gray-300 
            hover:bg-gray-800 hover:text-light transition-all duration-200">Upload Post ✎</button>
        </div>
    )
}