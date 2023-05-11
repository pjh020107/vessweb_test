import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import PostNavBar from "./components/PostNavBar"
import TeamNavBar from "./components/TeamNavBar"

export default async function Layout({ children }) {
    let session = await getServerSession(authOptions)
    if(session){
        return (
            <html lang="en">
              <body>
                <div className="flex flex-col h-screen">
                  <PostNavBar />
                  <div className=" flex items-stretch grow">
                      <TeamNavBar />
                      {children}
                  </div>
                </div>
              </body>
            </html>
          )
    }
    else{
        return(
            <body>LogIn Required</body>
        )
    }
}
