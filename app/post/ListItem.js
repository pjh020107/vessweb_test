'use client'

import Link from "next/link";
import { Router } from "next/router";

const PostListDiv = ({_id, title, content}) => {
    return(
        <div>
            <Link href={`/post/${_id}`}>
                <h1>{title}</h1>
                <h4>{content}</h4>
            </Link>
            <Link href={`/post/edit/${_id}`}>✏️</Link>
            <button onClick={(e)=>{
                fetch('/api/post/delete',{method : 'POST', body:_id})
                .then((r)=> r.json())
                .then((result)=>{ 
                    alert(result)
                    e.target.parentElement.style.display = 'none'
                })
            }} className=" ml-10">🗑️</button>
        </div>
    )
}

export default function ListItem(props){
    return(
        <div>
            {
                props.result.map((item)=>{
                    return PostListDiv(item);
                })
            }
        </div>
    )
}