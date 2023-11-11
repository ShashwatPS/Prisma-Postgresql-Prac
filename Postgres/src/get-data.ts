import { getClient } from "./utils";

async function getdata(){
    const client = await getClient();

    const query = `SELECT * FROM users`
    const data = await client.query(query);
    for(let user of data.rows){
        console.log(user)
    }
}

async function getCustomers(email:string){
    const client = await getClient();
    const query = `SELECT * FROM customers WHERE email = $1`;
    const data = await client.query(query,[email]);

    for(let rr of data.rows){
        console.log(rr);
    }
}

getdata();
let email = "shashwat@gmail.com"
getCustomers(email);