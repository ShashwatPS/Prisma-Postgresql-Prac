import {getClient} from "./utils";

async function deleteData(id:number){
    const client = await getClient();
    const query =  `DELETE FROM users WHERE id = $1`;
    await client.query(query,[id]);
    console.log("Entry Deleted");
}

let id:number = 2;
deleteData(id);