import { getClient } from "./utils";

async function updateDetails(email : string){
    const client = await getClient();
    const query = `UPDATE customers SET name=$1 where email = $2`;
    await client.query(query,['Snehal Saurabh',email]);
    console.log("Details Updated");
}

let email = "shashwat@gmail.com";
updateDetails(email);