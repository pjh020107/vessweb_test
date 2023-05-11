
import { connectDB } from "@/util/database";
import ListItem from "../ListItem";
import WriteBtn from "../components/WriteBtn";

export default async function teampage(props){
    const [semester, team] = props.params.team.split('th')
    const db = (await connectDB).db('vessweb');
    let result = await db.collection('post').find({"semester":semester,"team":team}).toArray();
    return(
        <>
            <WriteBtn />
            <ListItem result={result} />
        </>
    )
}