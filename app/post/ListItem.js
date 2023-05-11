'use client'

import Link from "next/link";
import { Router } from "next/router";

const PostListDiv = ({_id, title, content, semester, team}) => {
    return(
        <div className="mb-5">
            <Link href={`/post/${semester}th${team}/${_id}`}>
                <h1>{title}</h1>
                <h4>{content}</h4>
            </Link>
        </div>
    )
}
/*
<Link href={`/post/${semester}th${team}/${_id}/edit`}>✏️</Link>
            <button onClick={(e)=>{
                fetch('/api/post/delete',{method : 'POST', body:_id})
                .then((r)=> r.json())
                .then((result)=>{ 
                    alert(result)
                    e.target.parentElement.style.display = 'none'
                })
            }} className=" ml-10">🗑️</button> 
*/ 
export default function ListItem({result}){
    return(
        <>
            {
                result.map((item)=>{
                    return PostListDiv(item);
                })
            }
        </>
    )
}