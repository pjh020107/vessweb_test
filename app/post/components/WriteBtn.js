import Link from "next/link";

export default function WriteBtn() {
    return(
        <div className=" flex flex-row-reverse mr-3">
            <Link className=" font-sans font-semibold px-5 py-1 rounded-xl 
            bg-neutral-400/[0.8] transition-all hover:bg-slate-600 hover:text-white" href={"/post/write"}>New Post ✎</Link>
        </div>
    )
}