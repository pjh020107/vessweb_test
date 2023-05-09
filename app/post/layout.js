import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth].js"

export default async function Layout({ children }) {
    let session = await getServerSession(authOptions)
    if(session){
        return (
            <html lang="en">
              <body>{children}</body>
            </html>
          )
    }
    else{
        return(
            <body>LogIn Required</body>
        )
    }
}
