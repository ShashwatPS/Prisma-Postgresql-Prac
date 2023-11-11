import { getClient } from "./utils";

async function createEntries(){
    const client = await getClient();
    const insertUsersText = 'INSERT INTO users (name,email) VALUES ($1,$2)';
    const usersValues = ['Shashwat','shashwat@gmail.com'];
    let response = await client.query(insertUsersText,usersValues);

    const insertCustomerText = 'INSERT INTO customers (name,email,orders) VALUES ($1,$2,$3)';
    const customersValues = ['Shashwat','shashwat@gmail.com',5];
    await client.query(insertCustomerText,customersValues);

    console.log("Entries Created");
    console.log(response)
}

createEntries();