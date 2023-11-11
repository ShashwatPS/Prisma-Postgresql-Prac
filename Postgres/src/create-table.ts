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


}
