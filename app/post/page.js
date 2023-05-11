import { connectDB } from "@/util/database"
import ListItem from "./ListItem";
import WriteBtn from "./components/WriteBtn";

export default async function Home () {
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').find().toArray();
    return (
        <div className="m-5 flex flex-col">
            <WriteBtn />
            <ListItem result={result} />
        </div>
    )
}