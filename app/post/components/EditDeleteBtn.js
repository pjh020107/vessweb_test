'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditDeleteBtn ({result}){
    const router = useRouter();
    return (
        <div className=" mb-10">   
            <Link href={`/post/${result.semester}th${result.team}/${result._id}/edit`}>✏️</Link>
                <button onClick={(e)=>{
                    fetch('/api/post/delete',{method : 'POST', body:result._id})
                    .then((r)=> r.json())
                    .then((result)=>{ 
                        alert(result)
                    })
                }} className=" ml-10">🗑️</button> 
        </div>
    )
}