import { Client } from 'pg';

export async function getClient(){
    const client = new Client("postgres://xaelkdkt:d0gvhVuPHo49ZaxX2Pk-1OP9Tq0GjvmL@flora.db.elephantsql.com/xaelkdkt");
    await client.connect();
    return client;
}