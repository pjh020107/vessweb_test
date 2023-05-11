'use client'

import { signIn, signOut} from 'next-auth/react'
import CredentialsProvider from "next-auth/providers/credentials";
import Image from "next/image"
import exit from '../../public/exit.png'

function LoginBtn(){
    return(
        <button onClick={()=>{signIn(CredentialsProvider,{callbackUrl:"/post"})}} 
        className=' inline-block text-center w-[93px] mr-10 px-4 py-1 font-mono
        rounded-lg text-sm font-thin text-stone-300 bg-gray-800/[0.8]'>Log In</button>
    )
}
function LogoutBtn(){
    return(
        <button onClick={()=>{signOut({callbackUrl:"/"})}} 
        className=' inline-block text-center w-[93px] mr-10 px-4 py-1 font-mono
        rounded-lg text-sm font-thin text-stone-300 bg-gray-800/[0.8]'>Log Out</button>
    )
}
function ExitLogOutBtn({className}){
    return(
        <button onClick={()=>{signOut({callbackUrl:"/"})}} className={...className}>
            <Image src={exit} height={25} />
        </button>
    )
}
export {LoginBtn, LogoutBtn, ExitLogOutBtn}