import Link from "next/link";

export default function WriteBtn() {
    return(
        <div className=" flex flex-row-reverse">
            <Link className=" font-sans font-semibold" href={"/post/write"}>New Post ✎</Link>
        </div>
    )
}