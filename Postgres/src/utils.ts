export { Client } from 'pg';

export async function getClient(){
    const client = new Client("postgres://fluxlfgv:z1QnzZmyd3bAzGkNxQWGAZ03BPmLifeE@tai.db.elephantsql.com/fluxlfgv");
    await client.connect();
    return client;
}