import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { ExitLogOutBtn } from "../../components/LoginBtn"

export default async function PostNavBar() {
    let session = await getServerSession(authOptions)
    return (
        <div className=" z-50 flex justify-between items-center border-b-[1px] border-gray-600 shadow-md">
            <Link href={'/'} className={'pauta text-black text-3xl tracking-tight mx-5 my-3 font-extrabold min-w-[83px]'}>V E S S</Link>
            <div className=" flex justify-center items-center flex-wrap">
                <Link href={'/post/pwchange'}>
                    <span className=" mr-5">{`${session.user.name} (${session.user.semester}기)`}</span>
                </Link>
                    <span className=" mr-5">{session.user.teamname}</span>
                
                <div className=" flex items-center">
                    <span>{session.user.group}</span>
                    <ExitLogOutBtn className = 'm-5 mr-10 ml-10' />
                </div>
            </div>
        </div>
    )
}