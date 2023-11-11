import { getClient } from "./utils"

async function createTable(){
    const createFirstQuery = `
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    );
    `;

    const client = await getClient()

    await client.query(createFirstQuery);

    const createSecondQuery = `
    CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(20) NOT NULL,
    orders INT,
    );
    `;

    await client.query(createSecondQuery);

    console.log("Table Created Successfully");

}

createTable();
