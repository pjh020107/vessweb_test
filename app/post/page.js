import { connectDB } from "@/util/database"
import ListItem from "./ListItem";
import { LogoutBtn } from "../components/LoginBtn";

export default async function Home () {
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').find().toArray();
    return (
        <div>
            <LogoutBtn></LogoutBtn>
            <ListItem result={result} />
        </div>
    )
}