import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import WriteComponent from "../components/WriteComponent"

export default async function Write(){
    let session = await getServerSession(authOptions)
    return(
        <WriteComponent session={session}/>
    );
}