import Link from "next/link";

const PostListDiv = (item) => {
    return(
        <div className="mb-10 ml-4 p-5 border-neutral-900 
        border rounded-3xl max-w-[500px] shadow-lg
        transition-all ease-in-out duration-200 hover:-translate-x-0 
        hover:-translate-y-2 hover:shadow-2xl hover:bg-neutral-200">
            <Link href={`/post/${item.semester}th${item.team}/${item._id}`} className="flex flex-col">
                <h1>{item.title}</h1><br></br>
                <div className=" flex justify-between">
                    <span>{item.teamname}({item.FirstAuthor})</span>
                    <span>{item.firstCreated}</span>
                </div>
            </Link>
        </div>
    )
}
1
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