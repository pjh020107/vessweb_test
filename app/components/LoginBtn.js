'use client'

import {signIn, signOut} from 'next-auth/react'

function LoginBtn(){
    return(
        <button onClick={()=>{signIn({callbackUrl:"/post"})}} 
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
export {LoginBtn, LogoutBtn}