'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const TeamLink = ({teamname, path, className, accurate = false, router_pathname}) => {
    const teamstyle = ` m-2 pl-10 hover:bg-slate-500 transition-all rounded-xl ${className}`;
    const activeteamstyle = ` m-2 pl-10 bg-slate-500 transition-all rounded-xl ${className}`;
    if(accurate){
        return(
            <Link href={path} 
            className={router_pathname==path ? activeteamstyle : teamstyle}>
                {teamname}
            </Link>
        )
    }
    return (
        <Link href={path} 
        className={router_pathname.startsWith(path) ? activeteamstyle : teamstyle}>
            {teamname}
        </Link>
    )
}

export default async function TeamNavBar() {
    const router = usePathname();
    return (
        <div className="items-stretch self-stretch z-50 flex flex-col text-light bg-blue-950/[0.8] font-bold text-lg w-[140px]">
            <TeamLink teamname={'All'} path='/post' className='m-2 mt-5 mb-5 pl-2 ' accurate={true} />
            <div className="mb-5">
                <div className=" ml-4 mb-2">7.5th VESS</div>
                <div className=" flex flex-col font-medium">
                    <TeamLink teamname={'재잘재잘'} path='/post/7.5th1' router_pathname={router} />
                    <TeamLink teamname={'Fancy'} path='/post/7.5th2' router_pathname={router}/>
                </div>
            </div>
            <div className="mb-5">
                <div className=" ml-4 mb-2">8th VESS</div>
                <div className=" flex flex-col font-medium">
                    <TeamLink teamname={'1조'} path='/post/8th1' router_pathname={router}/>
                    <TeamLink teamname={'2조'} path='/post/8th2' router_pathname={router}/>
                    <TeamLink teamname={'3조'} path='/post/8th3' router_pathname={router}/>
                    <TeamLink teamname={'4조'} path='/post/8th4' router_pathname={router}/>
                </div>
            </div>
        </div>
    )
}